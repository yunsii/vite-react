// import * as path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';

import config from './config/config.ts';

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    open: true,
    port: 8000,
  },
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
      },
    },
  },
});
