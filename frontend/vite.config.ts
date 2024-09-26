import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr(), mkcert()],
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: { '/src': path.resolve(process.cwd(), 'src') },
  },
});
