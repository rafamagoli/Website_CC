import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
          icon.style.width = '16px'
          icon.style.height = '16px'
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
      className={styles.hero}
      ref={sectionRef}
    >
      <div className={styles.heroGrid}>

        {/* COLUNA ESQUERDA */}
        <motion.div
          className={styles.heroLeft}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Nome */}
          <div className={styles.nameBlock}>
            <span className={styles.logoText}>Camila</span>
            <div className={styles.logoRight}>
              <span className={styles.logoText}>Cavaleri</span>
              <motion.img
                src="/assets/ICONRED.png"
                alt=""
                className={styles.icon}
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Badge */}
          <p className={styles.heroEyebrow}>
            Atendimento online e presencial em Vitória, ES
          </p>

          {/* Divisor âmbar */}
          <div className={styles.accentLine} />

          {/* Headline */}
          <h1 className={styles.heroTitle}>
            Psicóloga clínica e avaliadora psicológica
          </h1>

          {/* Subtítulo */}
          <p className={styles.heroSubtitle}>
            Um espaço seguro para lidar com o que hoje te incomoda e entender quem você realmente é.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/contato" className={styles.ctaButton}>
                Agende sua primeira conversa
                <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            <Link to="/servicos" className={styles.ctaButtonGhost}>
              Conhecer os serviços
            </Link>
          </div>
        </motion.div>

        {/* COLUNA DIREITA — foto */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src="/assets/CamilaPhoto2.webp"
            alt="Camila Cavaleri, psicóloga clínica e Avaliação psicológica"
            className={styles.heroPhoto}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

      </div>
    </section>
  )
}
