import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import EnquiryForm from './EnquiryForm.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--white" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact Us"
            title="Book Your RO Service in Pune"
            description="Call, message or send an enquiry with your purifier details and the service you need."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact-card">
            <h3 className="contact-card__title">{business.name}</h3>
            <p className="contact-card__lead">
              RO water purifier repair, installation, maintenance and filter replacement in Pune.
            </p>
            <ul className="contact-card__list">
              <li>
                <span className="icon-tile icon-tile--glass" aria-hidden="true">
                  <Phone />
                </span>
                <span>
                  <span className="contact-card__label">Phone</span>
                  <a href={business.phoneHref}>{business.phoneDisplay}</a>
                </span>
              </li>
              <li>
                <span className="icon-tile icon-tile--glass" aria-hidden="true">
                  <Mail />
                </span>
                <span>
                  <span className="contact-card__label">Email</span>
                  <a href={business.emailHref}>{business.email}</a>
                </span>
              </li>
              <li>
                <span className="icon-tile icon-tile--glass" aria-hidden="true">
                  <MapPin />
                </span>
                <span>
                  <span className="contact-card__label">Location</span>
                  {business.location}
                </span>
              </li>
            </ul>
            <div className="contact-card__actions">
              <a className="btn btn--white" href={business.phoneHref}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
              <a className="btn btn--teal" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                WhatsApp
              </a>
              <a className="btn btn--glass" href={business.emailHref}>
                <Mail aria-hidden="true" />
                Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
