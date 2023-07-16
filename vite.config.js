import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    base: process.env.GITHUB_PAGES
        ? "sample"
        : "./",  
    root,
    resolve: {
        alias: {
            '@': root
        }
    }
})

