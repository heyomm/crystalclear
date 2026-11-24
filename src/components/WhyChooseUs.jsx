import { Building2, Filter, Headset, MapPin, MessagesSquare, Wrench } from 'lucide-react'
import { reasons } from '../data/reasons.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  support: Headset,
  repair: Wrench,
  filter: Filter,
  building: Building2,
  chat: MessagesSquare,
  location: MapPin,
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section why" aria-labelledby="why-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="why-title"
            inverted
            eyebrow="Why Choose Us"
            title="Why Choose Crystal Clear?"
            description="Practical RO water purifier support for homes and businesses in Pune, with clear communication at every step."
          />
        </Reveal>
        <ul className="why__grid">
          {reasons.map((reason, index) => {
            const Icon = ICONS[reason.icon]
            return (
              <Reveal as="li" key={reason.title} className="why-card" delay={(index % 3) * 80}>
                <span className="icon-tile icon-tile--glass" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3 className="why-card__title">{reason.title}</h3>
                  <p className="why-card__description">{reason.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
