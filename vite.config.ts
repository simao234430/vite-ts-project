import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {   '@': path.resolve(__dirname, '.', 'src') },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {},
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})

