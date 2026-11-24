import { Check, MessageCircle, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { business } from '../data/business.js'
import { buildWhatsAppUrl } from '../lib/enquiry.js'

export default function ProductDialog({ product, onClose, onEnquire }) {
  const dialogRef = useRef(null)
  const [imageIndex, setImageIndex] = useState(0)
  const activeImage = product.images[imageIndex]
  const titleId = `product-dialog-title-${product.id}`

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
    document.documentElement.classList.add('has-dialog')
    return () => document.documentElement.classList.remove('has-dialog')
  }, [])

  const close = () => dialogRef.current?.close()

  const handleEnquire = () => {
    close()
    // Wait a frame so focus restoration from the dialog does not interrupt the scroll.
    requestAnimationFrame(() => onEnquire(product))
  }

  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${business.shortName}, I would like to enquire about the ${product.name}.`,
  )

  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) close()
      }}
    >
      <div className="product-dialog__layout">
        <div className="product-dialog__gallery">
          <div className="product-dialog__image">
            <img
              key={activeImage.srcLarge}
              src={activeImage.srcLarge}
              width={activeImage.width}
              height={activeImage.height}
              alt={activeImage.alt}
              decoding="async"
            />
          </div>
          {product.images.length > 1 && (
            <ul className="product-dialog__thumbs" aria-label="Product photos">
              {product.images.map((image, index) => (
                <li key={image.src}>
                  <button
                    type="button"
                    className="product-dialog__thumb"
                    aria-pressed={index === imageIndex}
                    onClick={() => setImageIndex(index)}
                  >
                    <img src={image.src} width={image.width} height={image.height} alt="" loading="lazy" />
                    <span className="sr-only">
                      Show photo {index + 1} of {product.images.length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="product-dialog__info">
          {product.category && <p className="product-card__category">{product.category}</p>}
          <h3 id={titleId} className="product-dialog__title">
            {product.name}
          </h3>
          <p className="product-dialog__description">{product.description}</p>

          {product.highlights.length > 0 && (
            <>
              <h4 className="product-dialog__subtitle">As shown on the product or brochure</h4>
              <ul className="check-list">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="product-dialog__note">
            Contact us to confirm the current price, availability and warranty for this model.
          </p>

          <div className="product-dialog__actions">
            <button type="button" className="btn btn--primary" onClick={handleEnquire}>
              Enquire Now
            </button>
            <a className="btn btn--teal" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <button type="button" className="product-dialog__close" onClick={close}>
        <X aria-hidden="true" />
        <span className="sr-only">Close product details</span>
      </button>
    </dialog>
  )
}
