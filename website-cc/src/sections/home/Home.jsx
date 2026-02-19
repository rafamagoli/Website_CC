import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './Home.module.css'

export default function Home() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const icons = [
      '/assets/ICONGREEN.png',
      '/assets/ICONYELLOW.png',
      '/assets/ICONRED.png',
      '/assets/ICONWHITE.png',
      '/assets/ICONBLACK.png',
    ]

    let timeoutId = null

    function onMouseMove(e) {
      if (timeoutId) return
      timeoutId = setTimeout(() => {
        timeoutId = null
        if (Math.random() > 0.9) {
          const iconSrc = icons[Math.floor(Math.random() * icons.length)]
          const icon = document.createElement('img')
          icon.src = iconSrc
          icon.className = styles.floatingIcon
          icon.style.left = `${e.clientX - 8}px`
          icon.style.top = `${e.clientY - 8}px`
          section.appendChild(icon)
          icon.addEventListener('animationend', () => icon.remove())
        }
      }, 150)
    }

    section.addEventListener('mousemove', onMouseMove)
    return () => {
      section.removeEventListener('mousemove', onMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section
      id="home"
      className={`section section--hero ${styles.hero}`}
      ref={sectionRef}
    >
      <div className={`container ${styles.heroTop}`}>

        {/* Logo */}
        <motion.div
          className={styles.logoRow}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <img src="/assets/CAMILA.png" alt="Camila" className={styles.logoPart} />
          <div className={styles.logoRight}>
            <img src="/assets/CAVALERI.png" alt="Cavaleri" className={styles.logoPart} />
            <motion.img
              src="/assets/ICONRED.png"
              alt=""
              className={styles.icon}
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.p
          className={styles.heroEyebrow}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          ATENDIMENTO ONLINE PARA ADULTOS
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={styles.heroTitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
        >
          <mark className={styles.heroTitleMark}>Psicologia Breve</mark>: clareza e transformação no tempo certo
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.heroSubtitle}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        >
          Um espaço seguro, focado e com direção para lidar com o que hoje te incomoda.
        </motion.p>

        {/* CTA */}
        <motion.div
          className={styles.ctaGroup}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.75 }}
        >
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Agende sua primeira conversa
            <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
          <a href="#services" className={styles.ctaButtonGhost}>
            Entenda como funciona
          </a>
        </motion.div>


      </div>
    </section>
  )
}
