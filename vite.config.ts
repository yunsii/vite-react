import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import optimizationPersist from 'vite-plugin-optimize-persist'
import pkgConfig from 'vite-plugin-package-config'
import windiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths'

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
    pkgConfig(),
    optimizationPersist(),
    autoImport({
      imports: [
        'react',
        {
          react: [
            'useImperativeHandle',
            'createElement',
            'cloneElement',
            'createContext',
            'useLayoutEffect',
            'forwardRef',
          ],
        },
      ],
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
          'react-venders': ['react', 'react-dom'],
        },
      },
    },
  },
})
