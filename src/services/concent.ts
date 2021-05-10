// concent 相关的一些公共封装函数

import {
  useConcent,
  reducer,
  getState as getSt,
  getGlobalState as getGst,
  emit,
  getComputed,
  cst,
} from 'concent';
import type {
  ReducerCallerParams,
  IReducerFn,
  IActionCtxBase,
  MODULE_DEFAULT,
  ICtxBase,
  IAnyObj,
  SettingsType,
  ComputedValType,
  SetupFn,
  MultiComputed,
} from 'concent';

import type {
  ModuleContext,
  ModuleContextWithConnect,
  ContextWithConnect,
  Modules,
  RootReducer,
  RootState,
  RootComputed,
} from '../types/store';
import type EventMap from '../types/concentEventMap';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function noop(...args: any[]) {}

function buildCallParams(
  moduleName: string,
  connect: Modules[],
  options?: Options<any, any, any, any, any, any>,
) {
  const targetOptions = options || {};
  const {
    setup,
    tag,
    extra,
    staticExtra,
    computedDesc,
    passComputedDesc = true,
    props = {},
    concentClassKey,
  } = targetOptions;
  const registerOptions = {
    module: moduleName,
    connect,
    setup,
    props,
    tag,
    extra,
    staticExtra,
    computedDesc: null as any,
  };
  if (passComputedDesc) registerOptions.computedDesc = computedDesc;
  return { registerOptions, concentClassKey };
}

/**
 * 调用目标函数，用于对接 reducer 里的 ghost函数
 *
 * @param callerParams
 * @param actionCtx
 */
export async function callTarget(
  callerParams: ReducerCallerParams | [IReducerFn, any],
  actionCtx: IActionCtxBase,
) {
  try {
    /** 支持 reducer 文件里内部调用 actionCtx.dispatch(loading, [targetFn, payload]) */
    if (Array.isArray(callerParams)) {
      const [fn, payload] = callerParams;
      await actionCtx.dispatch(fn, payload);
    } else {
      const { fnName, payload, renderKey, delay } = callerParams;
      await actionCtx.dispatch(fnName, payload, renderKey, delay);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('callTarget error:', err.message);
  }
}

export interface ValidSetup {
  (ctx: ICtxBase): IAnyObj | void;
}

export interface ValidMapProps {
  (ctx: ICtxBase): IAnyObj;
}

export interface OptionsBase<
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
> {
  props?: Props;
  tag?: string;
  concentClassKey?: string;
  extra?: Extra;
  staticExtra?: StaticExtra;
  /** 一个遗留的参数，对接 useConcent 的 mapProps，每一轮渲染都会调用，返回结果可通过 ctx.mapped 拿到 */
  mapProps?: MapProps;
  computedDesc?: ComputedDesc;
  /**
   * 是否透传 cuSpec 给 useConcent 函数，默认为true，
   * 表示需要透传，此时用户不需要再setup函数体内调用 ctx.computed(cuSpec)
   * 如果用户设置 passCuSpec 为 false，表示传入 cuSpec 仅为了方便推导出 refComputed 类型，但不透传 cuSpec 给 useConcent 函数
   * 注意此时用户需要在 setup 函数体内调用 ctx.computed(cuSpec) 来完成示例计算函数的定义，
   * 否则 refComputed 里拿不到真正的计算结果
   */
  passComputedDesc?: boolean;
}
export interface Options<
  Props extends IAnyObj,
  Setup extends ValidSetup,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
> extends OptionsBase<Props, ComputedDesc, Extra, StaticExtra, MapProps> {
  setup?: Setup;
}

/**
 * 属于某个模块
 * use the target model context you want by passing a module name
 * 如需要全局任意地方可通过 useModule('xx') 导出 xx 模块上下文来使用，
 * 需要在 src/models/index.js 显式的导出该模块
 *
 * -----------------------[Code example]-----------------------
 * // models/index.ts 里导出
 * import somePageModel from 'pages/SomePage/model';
 * import someCompModel from 'components/SomeComp/model';
 *
 * const allModels = {...somePageModel,  ...someCompModel};
 *
 * export default allModels;
 *
 * // 某些组件里使用
 * import { useModule } from 'services/concent';
 *
 * function DemoComp(){
 *   const ctx = useModule('xxxMod');
 *   return <h1>{ctx.state.hello}</h1>
 * }
 * --------------------------------------------------------------
 * @param moduleName
 * @param options {Options} - 可选参数，见 Options 定义
 */
export function useModule<
  M extends Modules,
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
>(moduleName: M, options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const { registerOptions, concentClassKey } = buildCallParams(moduleName, [], options);
  type Ctx = ModuleContext<
    Props,
    M,
    SettingsType<Setup>,
    ComputedValType<ComputedDesc>,
    [Extra, StaticExtra, ReturnType<MapProps>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(registerOptions, concentClassKey);
}

/** 属于某个模块，连接多个模块 */
export function useModuleWithConnect<
  M extends Modules,
  Conn extends Modules[],
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
>(moduleName: M, connect: Conn, options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const { registerOptions, concentClassKey } = buildCallParams(moduleName, connect, options);
  type Ctx = ModuleContextWithConnect<
    Props,
    M,
    Conn[number],
    SettingsType<Setup>,
    ComputedValType<ComputedDesc>,
    [Extra, StaticExtra, ReturnType<MapProps>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(registerOptions, concentClassKey);
}

/** 连接多个模块 */
export function useConnect<
  Conn extends Modules[],
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
>(connect: Conn, options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const { registerOptions, concentClassKey } = buildCallParams(cst.MODULE_DEFAULT, connect, options);
  type Ctx = ContextWithConnect<
    Props,
    Conn[number],
    SettingsType<Setup>,
    ComputedValType<ComputedDesc>,
    [Extra, StaticExtra, ReturnType<MapProps>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(registerOptions, concentClassKey);
}

/**
 * 适用于不属于任何模块，只是设置 setup 函数的场景
 *
 * @param setup
 * @param options - see OptionsBase
 */
export function useSetup<
  T extends SetupFn,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
>(setup: T, options?: OptionsBase<Props, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const mergedOptions = { setup, ...options };
  const { registerOptions, concentClassKey } = buildCallParams(cst.MODULE_DEFAULT, [], mergedOptions);
  type Ctx = ModuleContext<
    Props,
    MODULE_DEFAULT,
    SettingsType<T>,
    ComputedValType<ComputedDesc>,
    [Extra, StaticExtra, ReturnType<MapProps>]
  >;
  const { settings } = useConcent<Record<string, unknown>, Ctx>(registerOptions, concentClassKey);
  return settings;
}

/**
 * 为属于某个模块的 ctx 标记类型, 通常使用在 class 成员变量上 和 setup 函数体内
 * 在 class 组件成员变量使用时不需要传递第三位参数 ctx，组件实例化时会由 concent 注入并替换
 * 在 setup 函数里使用时，可直接传入已经创建好的 ctx
 */
export function typeContextModule<
  M extends Modules,
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps
>(moduleName: M, options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>, ctx?: any) {
  noop(moduleName, options);
  type Ctx = ModuleContext<
    Props,
    M,
    SettingsType<Setup>,
    ComputedValType<ComputedDesc>,
    [Extra, StaticExtra, ReturnType<MapProps>]
  >;
  return (ctx || {}) as Ctx;
}

/**
 * useModule 的工厂函数，返回钩子函数的同时，也提供了帮助推导 setup 函数的 ctx 参数类型的辅助函数
 * 注意! 此工厂函数仅适用于 setup 函数 ctx 参数不需要感知 props, extra 类型时，方可使用
 *
 * @param moduleName
 * @param options
 * -----------------------[Code example]-----------------------
 * const ret = makeUseModule("Counter");
 * function setupA1(c: any) {
 *   const ctx = ret.typeCtx(c);
 *   const cu = ctx.computed({countX6: (n) => n.value * 6 });
 *   return { cu };
 * }
 *
 * export function UseC2ModByFactory() {
 *   const ctx = ret.useModule({ setup: setupA1 });
 *   return <h1>{ctx.state.bigValue} {ctx.settings.cu.countX6}</h1>
 * }
 * --------------------------------------------------------------
 */
export function makeUseModule<M extends Modules>(moduleName: M) {
  return {
    /** 需要传入的 setup 函数 */
    useModule: <
      Setup extends ValidSetup,
      Props extends IAnyObj,
      ComputedDesc extends MultiComputed<any>,
      Extra extends IAnyObj,
      StaticExtra extends any,
      MapProps extends ValidMapProps
    >(
      options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>,
    ) => {
      const { registerOptions, concentClassKey } = buildCallParams(moduleName, [], options);
      type Ctx = ModuleContext<
        Props,
        M,
        SettingsType<Setup>,
        ComputedValType<ComputedDesc>,
        [Extra, StaticExtra, ReturnType<MapProps>]
      >;
      return useConcent<Props, Ctx>(registerOptions, concentClassKey);
    },
    /** 推导 setup 函数的 ctx 参数类型 */
    typeCtx: (ctx: ICtxBase) => {
      return ctx as ModuleContext<Record<string, unknown>, M>;
    },
  };
}

export const concentReducer = (reducer as unknown) as RootReducer;

/**
 * 获取 global 模块的状态
 * 在已拥有 concent model 上下文、action 上下文的地方，
 * 推荐直接获取，代替调用此函数，因为直接获取数据时组件并不会订阅数据变化
 */
export function getGlobalState() {
  const globalState = getGst<RootState>();
  return globalState;
}

/**
 * 获取整个根状态
 * 注意直接获取数据时组件并不会订阅数据变化
 */
export function getRootState() {
  const rootState = getSt() as RootState;
  return rootState;
}

/**
 * 获取目标模块状态
 * 注意直接获取数据时组件并不会订阅数据变化
 */
export function getModelState<T extends Modules>(modelName: T) {
  const modelState = getSt(modelName) as RootState[T];
  return modelState;
}

/** 获取目标模块状态 */
export function getModelComputed<T extends Modules>(modelName: T) {
  const modelComputed = getComputed(modelName) as RootComputed[T];
  return modelComputed;
}

type EventKeys = keyof EventMap;

/**
 * 发射事件
 *
 * @param eventName - 事件名
 * @param args
 */
export function concentEmit<E extends EventKeys, T extends EventMap[E]>(eventName: E, ...args: T) {
  emit(eventName, ...args);
}

/**
 * 携带id的发射事件
 *
 * @param eventDesc - [eventName, id]
 * @param args
 */
export function concentEmitId<E extends EventKeys, T extends EventMap[E]>(eventDesc: [E, string], ...args: T) {
  emit(eventDesc, ...args);
}

type OnFn = <E extends EventKeys>(eventName: E, cb: (...args: EventMap[E]) => void) => void;

/**
 * 配合 EvMap，为 ctx.on 装配类型
 * 外部调用时传入具体的事件名就推导出 cb 函数的参数列表类型
 *
 * function setup(ctx: Ctx){
 *   const on = contextOn(ctx);
 *   on('xxx',(a, b)=>{
 *    // 此处 ts 能感知 a、b 的具体类型
 *   })
 * }
 */
export function contextOn(ctx: ICtxBase) {
  return ctx.on as OnFn;
}

type OnIdFn = <E extends EventKeys>(eventDesc: [E, string], cb: (...args: EventMap[E]) => void) => void;

/**
 * 可以携带 id 的 ctx.on
 *
 * @param ctx
 */
export function contextOnId(ctx: ICtxBase) {
  return ctx.on as OnIdFn;
}
