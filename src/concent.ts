import { run } from 'concent';
import loadingPlugin from 'concent-plugin-loading';

import allModels from './models';

run(
  {
    counter: {
      // 声明一个名为'counter'的模块
      state: { num: 1, numBig: 100 }, // 定义状态
    },
    ...allModels,
  },
  {
    // 配置loading插件
    plugins: [loadingPlugin],
  },
);
