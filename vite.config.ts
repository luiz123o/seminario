
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@raise-sistemas/ds",
        replacement: path.resolve(__dirname, "./src/@raise-sistemas/ds")
      },
      {
        find: "@raise-sistemas/icons",
        replacement: path.resolve(__dirname, "./src/@raise-sistemas/icons")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils")
      }
    ]
  }
})
