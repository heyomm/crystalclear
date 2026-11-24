export default function SectionHeading({ id, eyebrow, title, description, align = 'center', inverted = false }) {
  const className = ['section-heading', `section-heading--${align}`, inverted && 'section-heading--inverted']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}
