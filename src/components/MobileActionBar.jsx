import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/business.js'

export default function MobileActionBar() {
  return (
    <div className="action-bar" role="region" aria-label="Quick contact">
      <a className="btn btn--primary" href={business.phoneHref}>
        <Phone aria-hidden="true" />
        Call Now
      </a>
      <a className="btn btn--teal" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
