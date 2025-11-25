import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/frontapp1/',
     // change if you deploy to a sub-folder
})
