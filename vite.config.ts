import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})