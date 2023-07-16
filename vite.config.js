import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    base: process.env.GITHUB_PAGES
        ? "/sample/"
        : "./",
    outDir: 'dist',
    build: {
        outDir,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                threejs: resolve(root, 'threejs', 'index.html'),
            }
        }
    },
})

