import { business } from './src/data/business.js'
import { faqs } from './src/data/faqs.js'
import { services } from './src/data/services.js'

// The published domain is never hard-coded. Set VITE_SITE_URL (for example
// https://www.example.in) for a custom domain; on Vercel the production domain
// is picked up automatically.
export function resolveSiteUrl(env = process.env) {
  const explicit = env.VITE_SITE_URL || env.SITE_URL
  const vercel = env.VERCEL_PROJECT_PRODUCTION_URL
  const raw = explicit || (vercel ? `https://${vercel}` : '')
  return raw.trim().replace(/\/+$/, '')
}

function buildStructuredData(siteUrl) {
  const businessId = siteUrl ? `${siteUrl}/#business` : undefined

  const localBusiness = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: business.name,
    description: business.description,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.countryCode,
    },
    areaServed: { '@type': 'City', name: business.city },
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${service.title} in ${business.city}`,
        description: service.description,
        areaServed: { '@type': 'City', name: business.city },
      },
    })),
    ...(siteUrl && {
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
    }),
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return { '@context': 'https://schema.org', '@graph': [localBusiness, faqPage] }
}

export function buildHeadTags(siteUrl) {
  const tags = []

  if (siteUrl) {
    const shareImage = `${siteUrl}/og-image.jpg`
    tags.push(
      { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` } },
      { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` } },
      { tag: 'meta', attrs: { property: 'og:image', content: shareImage } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
      {
        tag: 'meta',
        attrs: { property: 'og:image:alt', content: 'Crystal Clear RO Water Filter Services logo' },
      },
      { tag: 'meta', attrs: { name: 'twitter:image', content: shareImage } },
    )
  }

  tags.push({
    tag: 'script',
    attrs: { type: 'application/ld+json' },
    children: JSON.stringify(buildStructuredData(siteUrl)).replace(/</g, '\\u003c'),
  })

  return tags.map((tag) => ({ ...tag, injectTo: 'head' }))
}
