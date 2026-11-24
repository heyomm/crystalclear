import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import Reveal from './Reveal.jsx'
import WaterBackdrop from './WaterBackdrop.jsx'

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <WaterBackdrop />
      <Reveal className="container final-cta__content">
        <h2 id="final-cta-title" className="final-cta__title">
          Need Reliable RO Water Purifier Service in Pune?
        </h2>
        <p className="final-cta__lead">
          Contact {business.name} for RO repair, installation, maintenance, and filter replacement.
        </p>
        <div className="hero__actions">
          <a className="btn btn--white btn--lg" href={business.phoneHref}>
            <Phone aria-hidden="true" />
            Call Now – {business.phoneDisplay}
          </a>
          <a className="btn btn--teal btn--lg" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
