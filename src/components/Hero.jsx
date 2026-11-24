import { CalendarCheck, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import { services } from '../data/services.js'
import WaterBackdrop from './WaterBackdrop.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__card">
        <WaterBackdrop />
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            Need Professional RO Water Purifier <span>Repair &amp; Service</span> in Pune?
          </h1>
          <div className="hero__actions">
            <a className="btn btn--white btn--lg" href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call Now – {business.phoneDisplay}
            </a>
            <a className="btn btn--glass btn--lg" href="#contact">
              <CalendarCheck aria-hidden="true" />
              Book RO Service
            </a>
          </div>
          <ul className="hero__chips" aria-label="Services offered">
            {services.map((service) => (
              <li key={service.id}>{service.shortTitle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
