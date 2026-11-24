// Runs after `vite build`:
// 1. Prerenders the React app into dist/index.html so all content is in the initial HTML.
// 2. Writes robots.txt and sitemap.xml using the real published domain.
import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { resolveSiteUrl } from '../seo.config.js'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const PLACEHOLDER = '<!--app-html-->'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const templatePath = path.join(dist, 'index.html')
const template = await readFile(templatePath, 'utf8')

if (!template.includes(PLACEHOLDER)) {
  throw new Error(`Prerender placeholder ${PLACEHOLDER} not found in dist/index.html`)
}

await writeFile(templatePath, template.replace(PLACEHOLDER, () => render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')

const siteUrl = resolveSiteUrl()
const robots = ['User-agent: *', 'Allow: /']
const sitemapPath = path.join(dist, 'sitemap.xml')

if (siteUrl) {
  const lastModified = new Date().toISOString().slice(0, 10)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastModified}</lastmod>
  </url>
</urlset>
`
  await writeFile(sitemapPath, sitemap)
  robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
  console.log(`Wrote sitemap.xml and robots.txt for ${siteUrl}`)
} else {
  await rm(sitemapPath, { force: true })
  console.warn(
    'No site URL found: sitemap.xml and the canonical URL were skipped. Set VITE_SITE_URL to your domain.',
  )
}

await writeFile(path.join(dist, 'robots.txt'), `${robots.join('\n')}\n`)
