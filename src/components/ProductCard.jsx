import { Images } from 'lucide-react'

export default function ProductCard({ product, onViewDetails, onEnquire }) {
  const [cover] = product.images
  const photoCount = product.images.length

  return (
    <article className="product-card">
      {/* Clicking the photo is a pointer shortcut; "View Details" is the keyboard-accessible control. */}
      <div className="product-card__media" onClick={onViewDetails}>
        <img
          src={cover.src}
          width={cover.width}
          height={cover.height}
          alt={cover.alt}
          loading="lazy"
          decoding="async"
        />
        {photoCount > 1 && (
          <span className="product-card__count">
            <Images aria-hidden="true" />
            {photoCount} photos
          </span>
        )}
      </div>
      <div className="product-card__body">
        {product.category && <p className="product-card__category">{product.category}</p>}
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__actions">
          <button type="button" className="btn btn--outline btn--sm" onClick={onViewDetails}>
            View Details
            <span className="sr-only"> – {product.name}</span>
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={onEnquire}>
            Enquire Now
            <span className="sr-only"> – {product.name}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
