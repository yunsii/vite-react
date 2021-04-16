// concent 相关的一些公共封装函数

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
import {
  useConcent,
  reducer,
  getState as getSt,
  getGlobalState as getGst,
  emit,
  getComputed,
  cst,
} from 'concent';

import type { CtxM, CtxMConn, CtxConn, Modules, RootRd, RootState, RootCu } from '../types/store';
import type { EvMap } from '../types/eventMap';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function noop(...args: any[]) {}

function priBuildCallParams(
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
    cuDesc,
    passCuDesc = true,
    props = {},
    ccClassKey,
  } = targetOptions;
  const regOpt = {
    module: moduleName,
    connect,
    setup,
    props,
    tag,
    extra,
    staticExtra,
    cuDesc: null as any,
  };
  if (passCuDesc) regOpt.cuDesc = cuDesc;
  return { regOpt, ccClassKey };
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
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
> {
  props?: P;
  tag?: string;
  ccClassKey?: string;
  extra?: Extra;
  staticExtra?: StaticExtra;
  /** 一个遗留的参数，对接 useConcent 的 mapProps，每一轮渲染都会调用，返回结果可通过 ctx.mapped 拿到 */
  mapProps?: Mp;
  cuDesc?: CuDesc;
  /**
   * 是否透传 cuSpec 给 useConcent 函数，默认为true，
   * 表示需要透传，此时用户不需要再setup函数体内调用 ctx.computed(cuSpec)
   * 如果用户设置 passCuSpec 为 false，表示传入 cuSpec 仅为了方便推导出 refComputed 类型，但不透传 cuSpec 给 useConcent 函数
   * 注意此时用户需要在 setup 函数体内调用 ctx.computed(cuSpec) 来完成示例计算函数的定义，
   * 否则 refComputed 里拿不到真正的计算结果
   */
  passCuDesc?: boolean;
}
export interface Options<
  P extends IAnyObj,
  Setup extends ValidSetup,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
> extends OptionsBase<P, CuDesc, Extra, StaticExtra, Mp> {
  setup?: Setup;
}

/**
 * 属于某个模块
 * use the target model context you want by passing a module name
 * 如需要全局任意地方可通过 useC2Mod('xx') 导出 xx 模块上下文来使用，
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
 * import { useC2Mod } from 'services/concent';
 *
 * function DemoComp(){
 *   const ctx = useC2Mod('xxxMod');
 *   return <h1>{ctx.state.hello}</h1>
 * }
 * --------------------------------------------------------------
 * @param moduleName
 * @param options {Options} - 可选参数，见 Options 定义
 */
export function useC2Mod<
  M extends Modules,
  Setup extends ValidSetup,
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
>(moduleName: M, options?: Options<P, Setup, CuDesc, Extra, StaticExtra, Mp>) {
  const { regOpt, ccClassKey } = priBuildCallParams(moduleName, [], options);
  type Ctx = CtxM<
    P,
    M,
    SettingsType<Setup>,
    ComputedValType<CuDesc>,
    [Extra, StaticExtra, ReturnType<Mp>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(regOpt, ccClassKey);
}

/** 属于某个模块，连接多个模块 */
export function useC2ModConn<
  M extends Modules,
  Conn extends Modules[],
  Setup extends ValidSetup,
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
>(moduleName: M, connect: Conn, options?: Options<P, Setup, CuDesc, Extra, StaticExtra, Mp>) {
  const { regOpt, ccClassKey } = priBuildCallParams(moduleName, connect, options);
  type Ctx = CtxMConn<
    P,
    M,
    Conn[number],
    SettingsType<Setup>,
    ComputedValType<CuDesc>,
    [Extra, StaticExtra, ReturnType<Mp>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(regOpt, ccClassKey);
}

/** 连接多个模块 */
export function useC2Conn<
  Conn extends Modules[],
  Setup extends ValidSetup,
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
>(connect: Conn, options?: Options<P, Setup, CuDesc, Extra, StaticExtra, Mp>) {
  const { regOpt, ccClassKey } = priBuildCallParams(cst.MODULE_DEFAULT, connect, options);
  type Ctx = CtxConn<
    P,
    Conn[number],
    SettingsType<Setup>,
    ComputedValType<CuDesc>,
    [Extra, StaticExtra, ReturnType<Mp>]
  >;
  return useConcent<Record<string, unknown>, Ctx>(regOpt, ccClassKey);
}

/**
 * 适用于不属于任何模块，只是设置 setup 函数的场景
 *
 * @param setup
 * @param options - see OptionsBase
 */
export function useSetup<
  T extends SetupFn,
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
>(setup: T, options?: OptionsBase<P, CuDesc, Extra, StaticExtra, Mp>) {
  const mergedOptions = { setup, ...options };
  const { regOpt, ccClassKey } = priBuildCallParams(cst.MODULE_DEFAULT, [], mergedOptions);
  type Ctx = CtxM<
    P,
    MODULE_DEFAULT,
    SettingsType<T>,
    ComputedValType<CuDesc>,
    [Extra, StaticExtra, ReturnType<Mp>]
  >;
  const { settings } = useConcent<Record<string, unknown>, Ctx>(regOpt, ccClassKey);
  return settings;
}

/**
 * 为属于某个模块的 ctx 标记类型, 通常使用在 class 成员变量上 和 setup 函数体内
 * 在 class 组件成员变量使用时不需要传递第三位参数 ctx，组件实例化时会由 concent 注入并替换
 * 在 setup 函数里使用时，可直接传入已经创建好的 ctx
 */
export function typeCtxM<
  M extends Modules,
  Setup extends ValidSetup,
  P extends IAnyObj,
  CuDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  Mp extends ValidMapProps
>(moduleName: M, options?: Options<P, Setup, CuDesc, Extra, StaticExtra, Mp>, ctx?: any) {
  noop(moduleName, options);
  type Ctx = CtxM<
    P,
    M,
    SettingsType<Setup>,
    ComputedValType<CuDesc>,
    [Extra, StaticExtra, ReturnType<Mp>]
  >;
  return (ctx || {}) as Ctx;
}

/**
 * useC2Mod 的工厂函数，返回钩子函数的同时，也提供了帮助推导 setup 函数的 ctx 参数类型的辅助函数
 * 注意! 此工厂函数仅适用于 setup 函数 ctx 参数不需要感知 props, extra 类型时，方可使用
 *
 * @param moduleName
 * @param options
 * -----------------------[Code example]-----------------------
 * const ret = makeUseC2Mod("Counter");
 * function setupA1(c: any) {
 *   const ctx = ret.typeCtx(c);
 *   const cu = ctx.computed({countX6: (n) => n.value * 6 });
 *   return { cu };
 * }
 *
 * export function UseC2ModByFactory() {
 *   const ctx = ret.useC2Mod({ setup: setupA1 });
 *   return <h1>{ctx.state.bigValue} {ctx.settings.cu.countX6}</h1>
 * }
 * --------------------------------------------------------------
 */
export function makeUseC2Mod<M extends Modules>(moduleName: M) {
  return {
    /** 需要传入的 setup 函数 */
    useC2Mod: <
      Setup extends ValidSetup,
      P extends IAnyObj,
      CuDesc extends MultiComputed<any>,
      Extra extends IAnyObj,
      StaticExtra extends any,
      Mp extends ValidMapProps
    >(
      options?: Options<P, Setup, CuDesc, Extra, StaticExtra, Mp>,
    ) => {
      const { regOpt, ccClassKey } = priBuildCallParams(moduleName, [], options);
      type Ctx = CtxM<
        P,
        M,
        SettingsType<Setup>,
        ComputedValType<CuDesc>,
        [Extra, StaticExtra, ReturnType<Mp>]
      >;
      return useConcent<P, Ctx>(regOpt, ccClassKey);
    },
    /** 推导 setup 函数的 ctx 参数类型 */
    typeCtx: (ctx: ICtxBase) => {
      return ctx as CtxM<Record<string, unknown>, M>;
    },
  };
}

export const ccReducer = (reducer as unknown) as RootRd;

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
  const modelComputed = getComputed(modelName) as RootCu[T];
  return modelComputed;
}

type EvKeys = keyof EvMap;

/**
 * 发射事件
 *
 * @param eventName - 事件名
 * @param args
 */
export function ccEmit<E extends EvKeys, T extends EvMap[E]>(eventName: E, ...args: T) {
  emit(eventName, ...args);
}

/**
 * 携带id的发射事件
 *
 * @param eventDesc - [eventName, id]
 * @param args
 */
export function ccEmitId<E extends EvKeys, T extends EvMap[E]>(eventDesc: [E, string], ...args: T) {
  emit(eventDesc, ...args);
}

type OnFn = <E extends EvKeys>(eventName: E, cb: (...args: EvMap[E]) => void) => void;

/**
 * 配合 EvMap，为 ctx.on 装配类型
 * 外部调用时传入具体的事件名就推导出 cb 函数的参数列表类型
 *
 * function setup(ctx: Ctx){
 *   const on = ctxOn(ctx);
 *   on('xxx',(a, b)=>{
 *    // 此处 ts 能感知 a、b 的具体类型
 *   })
 * }
 */
export function ctxOn(ctx: ICtxBase) {
  return ctx.on as OnFn;
}

type OnIdFn = <E extends EvKeys>(eventDesc: [E, string], cb: (...args: EvMap[E]) => void) => void;

/**
 * 可以携带 id 的 ctx.on
 *
 * @param ctx
 */
export function ctxOnId(ctx: ICtxBase) {
  return ctx.on as OnIdFn;
}
