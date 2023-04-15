import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/MANGOSTEEN-FE-1/dist/',
  plugins: [vue()]
})
