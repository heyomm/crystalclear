import { ArrowRight, Filter, HousePlug, Settings2, Wrench } from 'lucide-react'

const ICONS = {
  repair: Wrench,
  filter: Filter,
  maintenance: Settings2,
  installation: HousePlug,
}

export default function ServiceCard({ service, onBook }) {
  const Icon = ICONS[service.icon]

  return (
    <article className="service-card">
      <span className="icon-tile" aria-hidden="true">
        <Icon />
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <button type="button" className="service-card__action" onClick={onBook}>
        Book Service
        <span className="sr-only"> – {service.title}</span>
        <ArrowRight aria-hidden="true" />
      </button>
    </article>
  )
}
