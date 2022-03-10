// concent Related public package functions

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
 * Call the target function and use to dock the GHOST function in the reductioner
 *
 * @param callerParams
 * @param actionCtx
 */
export async function callTarget(
  callerParams: ReducerCallerParams | [IReducerFn, any],
  actionCtx: IActionCtxBase,
) {
  try {
    /** Support internal calls in the Reducer file actionCtx.dispatch(loading, [targetFn, payload]) */
    if (Array.isArray(callerParams)) {
      const [fn, payload] = callerParams;
      await actionCtx.dispatch(fn, payload);
    } else {
      const { fnName, payload, renderKey, delay } = callerParams;
      await actionCtx.dispatch(fnName, payload, renderKey, delay);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('callTarget error:', (err as Error).message);
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
  MapProps extends ValidMapProps,
> {
  props?: Props;
  tag?: string;
  concentClassKey?: string;
  extra?: Extra;
  staticExtra?: StaticExtra;
  /** A legacy parameter, docking the useconcent's mapps, each round of rendering, the return result can be obtained by ctx.mapped */
  mapProps?: MapProps;
  computedDesc?: ComputedDesc;
  /**
   * Whether to transfer Cuspec to the UseConcent function, default is true,
   * Indicates that it is necessary to pass, and the user does not need to call CTX.Computed (Cuspec) in the SETUP function.
   * If the user sets the passcuspec to false, it means that the incoming CUSPEC is only for convenience of deducting the RefComputed type, but does not translate Cuspec to the UseConcent function.
   * Note that the user needs to call CTX.comPuted (Cuspec) in the SETUP function to complete the definition of the sample calculation function.
   * Otherwise, the true calculation result is not collected in RefComputed.
   */
  passComputedDesc?: boolean;
}
export interface Options<
  Props extends IAnyObj,
  Setup extends ValidSetup,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps,
> extends OptionsBase<Props, ComputedDesc, Extra, StaticExtra, MapProps> {
  setup?: Setup;
}

/**
 * Belong to a module
 * Use the target model conxt you want by passing a module name
 * If you need to export the XX module context through usemodule ('xx'),
 * Need to export this module in src / models / index.js
 *
 * -----------------------[Code example]-----------------------
 * // models/index.ts Export
 * import somePageModel from 'pages/SomePage/model';
 * import someCompModel from 'components/SomeComp/model';
 *
 * const allModels = {...somePageModel,  ...someCompModel};
 *
 * export default allModels;
 *
 * // Some components are used
 * import { useModule } from 'services/concent';
 *
 * function DemoComp(){
 *   const ctx = useModule('xxxMod');
 *   return <h1>{ctx.state.hello}</h1>
 * }
 * --------------------------------------------------------------
 * @param moduleName
 * @param options {Options} - Optional parameters, see Options Definition
 */
export function useModule<
  M extends Modules,
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps,
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

/** It belongs to a module, connecting multiple modules */
export function useModuleWithConnect<
  M extends Modules,
  Conn extends Modules[],
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps,
>(
  moduleName: M,
  connect: Conn,
  options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>,
) {
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

/** Connect multiple modules */
export function useConnect<
  Conn extends Modules[],
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps,
>(connect: Conn, options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const { registerOptions, concentClassKey } = buildCallParams(
    cst.MODULE_DEFAULT,
    connect,
    options,
  );
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
 * Suitable for scenes that do not belong to any module, just set the SETUP function
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
  MapProps extends ValidMapProps,
>(setup: T, options?: OptionsBase<Props, ComputedDesc, Extra, StaticExtra, MapProps>) {
  const mergedOptions = { setup, ...options };
  const { registerOptions, concentClassKey } = buildCallParams(
    cst.MODULE_DEFAULT,
    [],
    mergedOptions,
  );
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
 * For the CTX tag type belonging to a module, it is usually used on the Class member variable and the SETUP function.
 * Do not need to pass the third parameter CTX when the Class component member variable is used, and the component is implanted and replaced by Concent.
 * When used in the setup function, you can directly get into the CTX that has been created.
 */
export function typeContextModule<
  M extends Modules,
  Setup extends ValidSetup,
  Props extends IAnyObj,
  ComputedDesc extends MultiComputed<any>,
  Extra extends IAnyObj,
  StaticExtra extends any,
  MapProps extends ValidMapProps,
>(
  moduleName: M,
  options?: Options<Props, Setup, ComputedDesc, Extra, StaticExtra, MapProps>,
  ctx?: any,
) {
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
 * useModule Factory functions, while returning the hook function, also provides auxiliary function for helping the CTX parameter type of the SETUP function.
 * Note! This factory function applies only to the setup function CTX parameter does not need to be perceived, and the extra type is available.
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
    /** Required SETUP functions */
    useModule: <
      Setup extends ValidSetup,
      Props extends IAnyObj,
      ComputedDesc extends MultiComputed<any>,
      Extra extends IAnyObj,
      StaticExtra extends any,
      MapProps extends ValidMapProps,
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
    /** Deflected the CTX parameter type of the setup function */
    typeCtx: (ctx: ICtxBase) => {
      return ctx as ModuleContext<Record<string, unknown>, M>;
    },
  };
}

export const concentReducer = reducer as unknown as RootReducer;

/**
 * Get the status of the GLOBAL module
 * Where there is a Concent Model context, the Action context,
 * Recommended directly, replacing this function, because the components are not subscribed to data changes because the data is directly acquired
 */
export function getGlobalState() {
  const globalState = getGst<RootState>();
  return globalState;
}

/**
 * Get the entire root state
 * Note that the components do not subscribe to data changes directly when acquiring data.
 */
export function getRootState() {
  const rootState = getSt() as RootState;
  return rootState;
}

/**
 * Get target module status
 * Note that the components do not subscribe to data changes directly when acquiring data.
 */
export function getModelState<T extends Modules>(modelName: T) {
  const modelState = getSt(modelName) as RootState[T];
  return modelState;
}

/** Get target module status */
export function getModelComputed<T extends Modules>(modelName: T) {
  const modelComputed = getComputed(modelName) as RootComputed[T];
  return modelComputed;
}

type EventKeys = keyof EventMap;

/**
 * Launch event
 *
 * @param eventName - Event name
 * @param args
 */
export function concentEmit<E extends EventKeys, T extends EventMap[E]>(eventName: E, ...args: T) {
  emit(eventName, ...args);
}

/**
 * Carry ID emission event
 *
 * @param eventDesc - [eventName, id]
 * @param args
 */
export function concentEmitId<E extends EventKeys, T extends EventMap[E]>(
  eventDesc: [E, string],
  ...args: T
) {
  emit(eventDesc, ...args);
}

type OnFn = <E extends EventKeys>(eventName: E, cb: (...args: EventMap[E]) => void) => void;

/**
 * With EVMAP, for CTX.ON assembly type
 * Internal calling, the specific event name is introduced to the parameter list type of the CB function
 *
 * function setup(ctx: Ctx){
 *   const on = contextOn(ctx);
 *   on('xxx',(a, b)=>{
 *    // Here TS can perceive a specific type of A, B
 *   })
 * }
 */
export function contextOn(ctx: ICtxBase) {
  return ctx.on as OnFn;
}

type OnIdFn = <E extends EventKeys>(
  eventDesc: [E, string],
  cb: (...args: EventMap[E]) => void,
) => void;

/**
 * CTX.ON with ID.ON
 *
 * @param ctx
 */
export function contextOnId(ctx: ICtxBase) {
  return ctx.on as OnIdFn;
}
