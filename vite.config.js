import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests for uploaded files to the backend so `/upload/<file>` works in dev
      "/upload": {
        target: "http://localhost:8800",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
