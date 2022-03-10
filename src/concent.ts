import { run } from 'concent';
import loadingPlugin from 'concent-plugin-loading';

import allModels from './models';

run(allModels, {
  // Configuring loading plugin
  plugins: [loadingPlugin],
});
