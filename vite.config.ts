import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react/',
  plugins: [reactRefresh()],
  server: {
    open: true,
    port: 8000,
  },
});
