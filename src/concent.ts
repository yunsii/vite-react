import { run } from 'concent';
import loadingPlugin from 'concent-plugin-loading';

import allModels from './models';

run(allModels, {
  // 配置loading插件
  plugins: [loadingPlugin],
});
