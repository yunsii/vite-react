// import * as path from 'path';
import react from '@vitejs/plugin-react'
import vitApp from '@vitjs/vit'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import windiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths'

import routes from './config/routes'

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
    autoImport({
      imports: [
        'react',
        {
          react: [
            'createElement',
            'cloneElement',
            'createContext',
            'useLayoutEffect',
            'forwardRef',
          ],
        },
      ],
    }),
    vitApp({
      routes,
      dynamicImport: {
        loading: './components/PageLoading',
      },
      exportStatic: {},
    }),
    windiCSS(),
    visualizer(),
  ],
  server: {
    // open: true,
    port: 8000,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
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
})
