import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import { navLinks } from '../data/navigation.js'
import { services } from '../data/services.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="footer__logo" href="#home">
            <Logo sizes="150px" />
          </a>
          <p>
            {business.name} provides RO water purifier repair, installation, maintenance and filter
            replacement in Pune, Maharashtra.
          </p>
        </div>

        <nav aria-labelledby="footer-links-title">
          <h2 id="footer-links-title" className="footer__title">
            Quick Links
          </h2>
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.footerLabel}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services-title">
          <h2 id="footer-services-title" className="footer__title">
            Our Services
          </h2>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services">{service.shortTitle}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact Details</h2>
          <ul className="footer__list footer__list--contact">
            <li>
              <Phone aria-hidden="true" />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href={business.emailHref}>{business.email}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              {business.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {business.name}. All rights
          reserved.
        </p>
        <a className="footer__top" href="#home">
          <ArrowUp aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  )
}
