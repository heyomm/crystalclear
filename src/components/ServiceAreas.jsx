import { MapPin, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import { serviceAreas } from '../data/serviceAreas.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section" aria-labelledby="areas-title">
      <div className="container">
        <Reveal className="areas">
          <div className="areas__copy">
            <SectionHeading
              id="areas-title"
              align="start"
              eyebrow="Service Areas"
              title="RO Water Purifier Services Across Pune"
              description={`${business.name} provides RO purifier repair, installation, replacement, and maintenance support in Pune.`}
            />
            <ul className="areas__list" aria-label="Confirmed service locations">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <MapPin aria-hidden="true" />
                  {area.name}
                </li>
              ))}
            </ul>
            <p className="areas__hint">
              Not sure whether we cover your locality? Call us and we will confirm service availability
              for your address.
            </p>
            <a className="btn btn--primary" href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Check Availability – {business.phoneDisplay}
            </a>
          </div>
          <div className="areas__visual" aria-hidden="true">
            <span className="areas__ring" />
            <span className="areas__ring" />
            <span className="areas__ring" />
            <span className="areas__pin">
              <MapPin />
            </span>
            <span className="areas__label">Pune</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
