import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import eslint from 'vite-plugin-eslint'
import Checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        svgLoader(),
        eslint({
            failOnError: false,  // don't block the build
            emitWarning: true,   // show warnings in terminal
            emitError: true,     // show errors in terminal
        }),
        Checker({ vueTsc: true })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    optimizeDeps: {
        exclude: ['uuid']
    }
})
