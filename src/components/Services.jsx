import { useEnquiry } from '../context/EnquiryContext.jsx'
import { services } from '../data/services.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  const { startEnquiry } = useEnquiry()

  return (
    <section id="services" className="section section--white" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Our RO Water Purifier Services"
            title="Complete RO Water Purifier Solutions in Pune"
            description="Crystal Clear provides RO water purifier solutions to help homes and businesses maintain dependable drinking-water systems. From installation and repairs to filter replacement and routine servicing, we focus on practical, customer-friendly service."
          />
        </Reveal>
        <ul className="services__grid">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={index * 80}>
              <ServiceCard
                service={service}
                onBook={() => startEnquiry({ service: service.enquiryOption })}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
