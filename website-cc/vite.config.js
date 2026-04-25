import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom', 'framer-motion'],
  },
  server: {
    warmup: {
      clientFiles: ['./src/App.jsx', './src/sections/home/Home.jsx'],
    },
  },
})
