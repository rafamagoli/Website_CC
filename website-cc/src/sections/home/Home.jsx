import { motion } from 'framer-motion'
import styles from './Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const section = document.getElementById('home')
    if (!section) return

    const icons = [
      '/assets/ICONGREEN.png',
      '/assets/ICONYELLOW.png',
      '/assets/ICONRED.png',
      '/assets/ICONWHITE.png',
      '/assets/ICONBLACK.png',
    ]

    function onMouseMove(e) {
      const iconSrc = icons[Math.floor(Math.random() * icons.length)]
      const icon = document.createElement('img')
      icon.src = iconSrc
      icon.className = styles.floatingIcon
      icon.style.left = `${e.clientX}px`
      icon.style.top = `${e.clientY}px`
      section.appendChild(icon)

      icon.addEventListener('animationend', () => {
        icon.remove()
      })
    }

    section.addEventListener('mousemove', onMouseMove)
    return () => {
      section.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <section id="home" className={`section section--hero ${styles.hero}`}>
      <div className={`container ${styles.heroTop}`}>
        <div className={styles.logoRow}>
          <motion.img
            src="/assets/CAMILA.png"
            alt="Camila"
            className={styles.logoPart}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className={styles.logoRight}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <img src="/assets/CAVALERI.png" alt="Cavaleri" className={styles.logoPart} />
            <img src="/assets/ICONRED.png" alt="Icon" className={styles.icon} />
          </motion.div>
        </div>

        <h1 className={styles.heroTitle}>
          Psicologia Breve: clareza e transformação no tempo certo
        </h1>
        <p className={styles.heroSubtitle}>
          Um espaço seguro, focado e com direção para lidar com o que hoje te incomoda.
        </p>
        <a href="#contact" className="btn">
          Agende sua primeira conversa
        </a>
      </div>
    </section>
  )
}