import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { buildHeadTags, resolveSiteUrl } from './seo.config.js'

function seoHead() {
  return {
    name: 'crystal-clear-seo-head',
    transformIndexHtml() {
      return buildHeadTags(resolveSiteUrl())
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), seoHead()],
  build: {
    copyPublicDir: !isSsrBuild,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['.v0.build'],
  },
}))
