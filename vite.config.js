import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base must match your GitHub repo name so the site works at https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/inkwell',
})
