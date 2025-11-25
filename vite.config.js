import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/frontapp1/',
  server: {
    port: 3000,
    open: true 
  }     // change if you deploy to a sub-folder
})
