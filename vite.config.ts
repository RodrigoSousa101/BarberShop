import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// substitui 'elite-barber-shop' pelo nome real do teu repositório no GitHub, se for diferente
export default defineConfig({
  base: '/elite-barber-shop/',
  plugins: [
    tailwindcss(),
    react()
  ]
})
