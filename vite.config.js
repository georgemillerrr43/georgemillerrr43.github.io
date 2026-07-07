import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  server: {
    port: 3000,
    open: true,
    host: true
  },

  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',

    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'aos',
            'owl-carousel2'
          ]
        }
      }
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  css: {
    postcss: './postcss.config.js'
  },

  optimizeDeps: {
    include: ['aos', 'owl-carousel2']
  }
})
