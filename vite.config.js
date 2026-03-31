import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // чтобы принимать внешние подключения
    port: 5173, // если хочешь конкретный порт
    strictPort: true, 
    allowedHosts: [
      'yuriko-preneuralgic-memphis.ngrok-free.dev', // разрешаем этот ngrok хост
      // '*' // можно для всех, но менее безопасно
    ]
  }
})