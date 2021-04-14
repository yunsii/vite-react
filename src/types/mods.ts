/**
 * concent的所有模块
 */
// 由run接口集中化配置
import models from '../models';


type loginRdKeys = keyof typeof models.login.reducer;
type meRdKeys = keyof typeof models.me.reducer;

// 利用模板字符串生成新的keys，辅助生成 loading模块的key描述
const loadingStatePart1 = { login: false } as { [key in `login/${loginRdKeys}`]: false } & { login: false };
const loadingStatePart2 = { me: false } as { [key in `me/${meRdKeys}`]: false } & { me: false };

const allModels = {
  ...models,
  loading: {
    state: {
      ...loadingStatePart1,
      ...loadingStatePart2,
    },
  }
};

export type Models = typeof allModels;
