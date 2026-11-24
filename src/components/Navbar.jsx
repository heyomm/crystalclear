import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business } from '../data/business.js'
import { navLinks } from '../data/navigation.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScrolled } from '../hooks/useScrolled.js'
import Logo from './Logo.jsx'

const SECTION_IDS = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const className = ['navbar', scrolled && 'is-scrolled', menuOpen && 'is-open'].filter(Boolean).join(' ')

  return (
    <header className={className}>
      <div className="container navbar__inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <Logo className="brand__logo" sizes="64px" eager />
          <span className="brand__text" aria-hidden="true">
            <span className="brand__name">{business.shortName}</span>
            <span className="brand__tag">{business.tagline}</span>
          </span>
        </a>

        <nav id="primary-navigation" className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="navbar__link"
                  aria-current={activeId === link.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__menu-actions">
            <a className="btn btn--primary" href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call Now – {business.phoneDisplay}
            </a>
            <a className="btn btn--teal" href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary navbar__call" href={business.phoneHref}>
            <Phone aria-hidden="true" />
            <span className="navbar__call-label">Call Now</span>
            <span className="sr-only"> – {business.phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
