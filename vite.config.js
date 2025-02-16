import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: '.', // Ensure Vite looks in the root directory
  build: {
    rollupOptions: {
      input: {
        main: 'Lan_pag.html' // Set your new HTML file as the entry point
      }
    }
  },
  server:{
    open:'/Lan_pag.html'
  }
})
