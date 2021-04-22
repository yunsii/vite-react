// import * as path from 'path';
import { UserConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitApp from '@vitjs/vit';

import routes from './config/routes';

// https://vitejs.dev/config/
export default {
  base: '/vite-react/',
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
    vitApp({
      routes,
      dynamicImport: {
        loading: './components/PageLoading',
      },
      exportStatic: {},
      mock: { productionEnabled: true },
    }),
  ],
  server: {
    // open: true,
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
  esbuild: {
    jsxInject: "import * as React from 'react'",
  },
} as UserConfig;
