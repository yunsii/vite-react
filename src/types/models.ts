// concent 的所有模块

// 由 run 接口集中化配置
import type models from '../models';

type LoginLoadingKeys = `login/${keyof typeof models.login.reducer}` | 'login';
type MeLoadingKeys = `me/${keyof typeof models.me.reducer}` | 'me';

type LoginLoadingState = Record<LoginLoadingKeys, boolean>;
type MeLoadingState = Record<MeLoadingKeys, boolean>;

export type Models = typeof models & {
  loading: {
    state: LoginLoadingState & MeLoadingState;
  };
};
