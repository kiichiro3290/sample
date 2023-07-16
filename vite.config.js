import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'src/dist')

export default defineConfig({
    base: '/sample/',
    root,
    build: {
        outDir,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                threejs: resolve(root, 'threejs', 'index.html'),
            }
        }
    },
    resolve: {
        alias: {
            '@': root
        }
    }
})

