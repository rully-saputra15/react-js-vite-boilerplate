import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the docker container port mapping to work
    strictPort: true,
    port: 5173, // default
    origin: 'http://0.0.0.0:5173',
  },
});
