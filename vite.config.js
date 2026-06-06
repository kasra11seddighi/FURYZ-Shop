import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FURYZ-Shop/', // نام دقیق ریپازیتوری‌ات را اینجا بنویس
})
