import { run } from 'concent';

import allModels from './models';

run({
  counter: {
    // 声明一个名为'counter'的模块
    state: { num: 1, numBig: 100 }, // 定义状态
  },
  ...allModels,
});
