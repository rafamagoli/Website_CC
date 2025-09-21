import { useEffect, useMemo, useState } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../CCLOGO.png' 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Página Inicial' },
      { id: 'about', label: 'Sobre mim' },
      { id: 'services', label: 'Terapia Breve' },
      { id: 'contact', label: 'Contato' },
      { id: 'faq', label: 'FAQ' },
    ],
    []
  )

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

  useEffect(() => {
    const sectionEls = navItems
      .map(it => document.getElementById(it.id))
      .filter(Boolean)

    if (sectionEls.length === 0) return

    if ('IntersectionObserver' in window) {
      const cssOffset =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-offset'), 10) || 0

      const obs = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
          if (visible?.target?.id) setActiveId(visible.target.id)
        },
        {
          root: null,
          threshold: [0.35, 0.6, 0.85],
          rootMargin: `-${cssOffset}px 0px -40% 0px`,
        }
      )
      sectionEls.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }

    const onScroll = () => {
      const cssOffset =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-offset'), 10) || 0
      let current = activeId
      for (const el of sectionEls) {
        const top = el.getBoundingClientRect().top
        if (top - cssOffset <= 0) current = el.id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [navItems])

  const toggle = () => setOpen(v => !v)
  const closeMenu = () => setOpen(false)

  const handleNavClick = (e, id) => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) return

    e.preventDefault()
    closeMenu()

    const hash = `#${id}`
    const el = document.getElementById(id)
    const smooth =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
        ? 'smooth'
        : 'auto'

    if (el && typeof el.scrollIntoView === 'function') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: smooth, block: 'start' })
          if (history.replaceState) {
            history.replaceState(null, '', hash)
          } else {
            location.hash = hash
          }
        })
      })
      return
    }

    if (!el) {
      location.hash = hash
      return
    }

    const rect = el.getBoundingClientRect()
    const rootStyles = getComputedStyle(document.documentElement)
    const cssOffset = parseInt(rootStyles.getPropertyValue('--nav-offset'), 10) || 0
    const y = rect.top + window.pageYOffset - cssOffset

    window.scrollTo({ top: y, behavior: smooth })
    if (history.replaceState) history.replaceState(null, '', hash)
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="Go to Home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img
            src={Logo}
            alt="Camila Cavaleri Logo"
            className={styles.logo}
            decoding="async"
          />
        </a>

        <button
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={toggle}
          type="button"
        >
          <svg
            className={styles.menuIcon}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z" />
            ) : (
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>

        <div className={`${styles.linksWrapper} ${open ? styles.open : ''}`}>
          <ul id="primary-nav" className={styles.links} onClick={closeMenu}>
            {navItems.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={`${styles.link} ${activeId === it.id ? styles.linkActive : ''}`}
                  aria-current={activeId === it.id ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, it.id)}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}