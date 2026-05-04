import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import IconRed from '../../ICONRED.png'

const NAV_LINKS = [
  { href: '/',        label: 'Início',   exact: true },
  { href: '/sobre',   label: 'FAQ' },
  { href: '/servicos', label: 'Serviços' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(item.href + '/')

  const isLight = pathname === '/contato' && !scrolled

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isLight ? styles.navLight : ''}`}>
      <nav className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Página inicial">
          <span className={styles.brandText}>Camila Cavaleri</span>
          <img src={IconRed} alt="" className={styles.brandIcon} aria-hidden="true" />
        </Link>

        <button
          className={styles.menuButton}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          type="button"
        >
          <svg className={styles.menuIcon} viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>

        {/* Desktop links only */}
        <div className={styles.desktopLinks}>
          <ul id="primary-nav" className={styles.links}>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`${styles.link} ${isActive(item) ? styles.linkActive : ''}`}
                  aria-current={isActive(item) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contato" className={styles.navCta}>
            Agendar conversa
          </Link>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {open && (
        <div className={styles.mobileOverlay} role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z" />
            </svg>
          </button>

          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${styles.mobileLink} ${isActive(item) ? styles.mobileLinkActive : ''}`}
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/contato" className={styles.mobileCta}>
            Agendar conversa
          </Link>
        </div>
      )}
    </header>
  )
}
