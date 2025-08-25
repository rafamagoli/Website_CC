import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../CCLOGO.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        <a className={styles.brand} href="#home" aria-label="Go to Home">
          <img src={Logo} alt="Camila Cavaleri Logo" className={styles.logo} />
        </a>
        <ul className={styles.links}>
          <li><a className={styles.link} href="#about">About</a></li>
          <li><a className={styles.link} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}