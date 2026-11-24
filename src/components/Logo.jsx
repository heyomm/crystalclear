import logoSmall from '../assets/logo-240.webp'
import logoLarge from '../assets/logo-480.webp'

export default function Logo({ className, sizes = '160px', eager = false }) {
  return (
    <img
      className={className}
      src={logoSmall}
      srcSet={`${logoSmall} 240w, ${logoLarge} 480w`}
      sizes={sizes}
      width="240"
      height="207"
      alt="Crystal Clear RO Water Filter Services logo"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
