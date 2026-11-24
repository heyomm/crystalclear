import { CalendarCheck, ClipboardList, Droplets, PhoneCall } from 'lucide-react'
import { steps } from '../data/steps.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  contact: PhoneCall,
  discuss: ClipboardList,
  schedule: CalendarCheck,
  service: Droplets,
}

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="Simple Process"
            title="How Our Service Works"
            description="Booking RO water purifier service in Pune takes four straightforward steps."
          />
        </Reveal>
        <ol className="process__list">
          {steps.map((step, index) => {
            const Icon = ICONS[step.icon]
            return (
              <Reveal as="li" key={step.title} className="process-step" delay={index * 100}>
                <span className="process-step__marker" aria-hidden="true">
                  <Icon />
                  <span className="process-step__number">{index + 1}</span>
                </span>
                <div className="process-step__body">
                  <p className="process-step__label">Step {index + 1}</p>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
