import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { business } from '../data/business.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__photo about__photo--main">
            <img
              src="/images/products/cosmax-640.webp"
              srcSet="/images/products/cosmax-640.webp 640w, /images/products/cosmax-1100.webp 1100w"
              sizes="(min-width: 960px) 460px, 90vw"
              width="640"
              height="682"
              alt="Wall-mounted RO water purifier with a pre-filter after installation"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about__photo about__photo--float">
            <img
              src="/images/products/legend-installed-640.webp"
              width="640"
              height="898"
              alt="RO water purifier fitted on a kitchen wall"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="about__badge">
            <MapPin aria-hidden="true" />
            <span>
              <strong>Pune, Maharashtra</strong>
              RO service for homes and businesses
            </span>
          </p>
        </Reveal>

        <Reveal className="about__copy" delay={120}>
          <SectionHeading
            id="about-title"
            align="start"
            eyebrow="About Crystal Clear"
            title={"Pune's Trusted RO Water Purifier Service Provider"}
          />
          <div className="prose">
            <p>
              {business.name} is dedicated to helping households and businesses in Pune maintain reliable
              water purification systems.
            </p>
            <p>
              We provide professional RO water purifier repair, installation, filter replacement, and
              maintenance services with a focus on dependable support and practical solutions.
            </p>
            <p>
              Whether your purifier needs attention due to reduced water flow, unusual taste, filter
              problems, or general maintenance, our team works to help restore its performance.
            </p>
            <p>
              Our aim is to make clean and safe drinking water more accessible through reliable RO service
              solutions.
            </p>
          </div>
          <div className="about__actions">
            <a className="btn btn--primary" href="#contact">
              Contact Us
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href={business.phoneHref}>
              <Phone aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
