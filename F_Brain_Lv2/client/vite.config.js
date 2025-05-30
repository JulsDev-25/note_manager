import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // exposer le serveur au réseau Docker
    port: 5173,      
    watch: {
      usePolling: true,
    },
  },
})
