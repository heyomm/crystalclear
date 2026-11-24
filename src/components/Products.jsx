import { useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext.jsx'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import ProductDialog from './ProductDialog.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { startEnquiry } = useEnquiry()

  const enquireAbout = (product) => startEnquiry({ service: 'Product Enquiry', model: product.name })

  return (
    <section id="products" className="section section--white" aria-labelledby="products-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="products-title"
            eyebrow="Our RO Water Purifier Products"
            title="Explore Water Purification Products and RO Components"
            description="Browse RO water purifiers and cabinets available through Crystal Clear in Pune. Send an enquiry to check the current price and availability of any model."
          />
        </Reveal>
        <ul className="products__grid">
          {products.map((product) => (
            <Reveal as="li" key={product.id}>
              <ProductCard
                product={product}
                onViewDetails={() => setSelectedProduct(product)}
                onEnquire={() => enquireAbout(product)}
              />
            </Reveal>
          ))}
        </ul>
        <p className="products__note">
          Product details are taken from the product or its brochure. Please contact us to confirm the
          current price, availability and warranty before purchase.
        </p>
      </div>

      {selectedProduct && (
        <ProductDialog
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquire={enquireAbout}
        />
      )}
    </section>
  )
}
