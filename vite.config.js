import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')

export default defineConfig({
    base: process.env.GITHUB_PAGES
        ? "sample"
        : "./",  
    root,
})

