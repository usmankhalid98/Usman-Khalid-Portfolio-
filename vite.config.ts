import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 450,
    rollupOptions: {
      output: {
        manualChunks: {
          'resume-data': ['./data/resumeData'],
          'vendor': ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  }
});