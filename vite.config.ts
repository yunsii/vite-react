// import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import { visualizer } from 'rollup-plugin-visualizer';
import vitApp from '@vitjs/vit';
import { getThemeVariables } from 'antd/dist/theme';

import routes from './config/routes';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react/',
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
    tsconfigPaths(),
    PkgConfig(),
    OptimizationPersist(),
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
    visualizer(),
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
        modifyVars: getThemeVariables({
          // dark: true, // 开启暗黑模式
          // compact: true, // 开启紧凑模式
        }),
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-venders': ['react', 'react-dom', '@vitjs/runtime'],
        },
      },
    },
  },
});
