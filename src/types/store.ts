import type {
  ICtx,
  IActionCtx,
  IAnyObj,
  MODULE_VOID,
  MODULE_DEFAULT,
  MODULE_GLOBAL,
  GetRootState,
  GetRootReducer,
  GetRootComputed,
  GetRootReducerCaller,
  GetRootReducerGhost,
} from 'concent';

import type { Models } from './models';

export type RootState = GetRootState<Models>;

export type RootReducer = GetRootReducer<Models>;

export type RootReducerCaller = GetRootReducerCaller<Models>;

export type RootReducerGhost = GetRootReducerGhost<Models, RootReducer>;

export type RootComputed = GetRootComputed<Models>;

export type GlobalState = RootState[MODULE_GLOBAL];

export type Modules = keyof RootState;

export type ActionContext<
  M extends Modules,
  ModuleState extends IAnyObj = RootState[M]
> = IActionCtx<RootState, RootComputed, M, ModuleContext<Record<string, unknown>, M>, ModuleState>;

// 从左到右: Extra, StaticExtra, Mapped
type OtherTypes = [any] | [any, any] | [any, any, any];

export type ModuleContext<
  Props = Record<string, unknown>,
  ModuleName extends Modules = MODULE_DEFAULT,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  Record<string, unknown>,
  ModuleName,
  MODULE_VOID,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** belong one module，expand private state. */
export type ModuleContextWithPrivateState<
  Props = Record<string, unknown>,
  ModuleName extends Modules = MODULE_DEFAULT,
  PrivateState = Record<string, unknown>,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  PrivateState,
  ModuleName,
  MODULE_VOID,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** belong one module, connect other modules. */
export type ModuleContextWithConnect<
  Props = Record<string, unknown>,
  ModuleName extends Modules = MODULE_DEFAULT,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  Record<string, unknown>,
  ModuleName,
  ConnectModule,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** belong one module，expand private state, connect other modules. */
export type ModuleContextWithConnectAndPrivateState<
  Props = Record<string, unknown>,
  ModuleName extends Modules = MODULE_DEFAULT,
  PrivateState = Record<string, unknown>,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  PrivateState,
  ModuleName,
  ConnectModule,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** expand private state, connect other modules. */
export type ContextWithConnectAndPrivateState<
  Props = Record<string, unknown>,
  PrivateState = Record<string, unknown>,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  PrivateState,
  MODULE_DEFAULT,
  ConnectModule,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** expand private state. */
export type ContextWithPrivateState<
  Props = Record<string, unknown>,
  PrivateState = Record<string, unknown>,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  PrivateState,
  MODULE_DEFAULT,
  MODULE_VOID,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** connect other modules. */
export type ContextWithConnect<
  Props = Record<string, unknown>,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ICtx<
  RootState,
  RootReducer,
  RootReducerCaller,
  RootReducerGhost,
  RootComputed,
  Props,
  IAnyObj,
  MODULE_DEFAULT,
  ConnectModule,
  Settings,
  RefComputed,
  Extra[2],
  [Extra[0], Extra[1]]
>;

/** default series, when no module specified, the component belong to $$default module by default */
export type DefaultContext<
  Props = Record<string, unknown>,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ModuleContext<Props, MODULE_DEFAULT, Settings, RefComputed, Extra>;

export type DefaultContextWithPrivateState<
  Props = Record<string, unknown>,
  PrivateState = Record<string, unknown>,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ModuleContextWithPrivateState<
  Props,
  MODULE_DEFAULT,
  PrivateState,
  Settings,
  RefComputed,
  Extra
>;

export type DefaultContextWithConnectAndPrivateState<
  Props = Record<string, unknown>,
  PrivateState = Record<string, unknown>,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ModuleContextWithConnectAndPrivateState<
  Props,
  MODULE_DEFAULT,
  PrivateState,
  ConnectModule,
  Settings,
  RefComputed,
  Extra
>;

export type DefaultContextWithConnect<
  Props = Record<string, unknown>,
  ConnectModule extends Modules = MODULE_VOID,
  Settings = Record<string, unknown>,
  RefComputed = Record<string, unknown>,
  Extra extends OtherTypes = OtherTypes
> = ContextWithConnectAndPrivateState<
  Props,
  MODULE_DEFAULT,
  ConnectModule,
  Settings,
  RefComputed,
  Extra
>;

export type ItemsType<Arr> = Arr extends readonly (infer E)[] ? E : never;

export type Empty = void | null | undefined;
export type MouseEvent = React.MouseEvent<HTMLElement>;
export type ChangeEvent = React.ChangeEvent<HTMLElement>;
export type VoidPayload = Empty | MouseEvent;
