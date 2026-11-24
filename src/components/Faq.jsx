import { ChevronDown, Phone } from 'lucide-react'
import { useState } from 'react'
import { business } from '../data/business.js'
import { faqs } from '../data/faqs.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="section" aria-labelledby="faqs-title">
      <div className="container faq__grid">
        <Reveal className="faq__intro">
          <SectionHeading
            id="faqs-title"
            align="start"
            eyebrow="Frequently Asked Questions"
            title="Find Answers to Your RO Water Purifier Service Questions"
          />
          <div className="faq__help">
            <p>Have a different question about RO repair or installation in Pune?</p>
            <a className="btn btn--primary" href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal className="faq__list" delay={120}>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            const triggerId = `faq-trigger-${index}`
            const panelId = `faq-panel-${index}`

            return (
              <div key={faq.question} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <h3 className="faq-item__heading">
                  <button
                    type="button"
                    id={triggerId}
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {faq.question}
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} className="faq-item__panel" aria-labelledby={triggerId}>
                  <div className="faq-item__content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
