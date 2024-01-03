import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      include: ['./src/**', './index.html'],
    },
  },
  plugins: [react()],
});
