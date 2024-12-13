import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { templateCompilerOptions } from '@tresjs/core'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    ...templateCompilerOptions,
  }
  ),
  vueDevTools()],
  optimizeDeps: {
    esbuildOptions: {
      supported: {
        'top-level-await': true,
      },
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
})
