import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},  // Define global object if required by any library
  },
  server: {
    // HMR configuration to use a different WebSocket port, without changing the main server port
    hmr: {
      port: 3001,  // Set HMR to use port 3001 to prevent WebSocket conflicts
    },
    proxy: {
      // Proxy for backend WebSocket requests to avoid CORS issues
      '/ws': {
        target: 'http://localhost:8080',  // Backend WebSocket server
        changeOrigin: true,
        ws: true,  // Enable WebSocket proxying
      },
    },
  },
});
