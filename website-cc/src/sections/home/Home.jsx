import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'

export default function Home() {
  const sectionRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const icons = [
      '/assets/ICONGREEN.png',
      '/assets/ICONYELLOW.png',
      '/assets/ICONRED.png',
      '/assets/ICONWHITE.png',
      '/assets/ICONBLACK.png',
    ]

    let timeoutId = null

    function onMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Throttle icon creation
      if (timeoutId) return
      timeoutId = setTimeout(() => {
        timeoutId = null
        
        // Only create icons occasionally
        if (Math.random() > 0.85) {
          const iconSrc = icons[Math.floor(Math.random() * icons.length)]
          const icon = document.createElement('img')
          icon.src = iconSrc
          icon.className = styles.floatingIcon
          icon.style.left = `${e.clientX - 8}px`
          icon.style.top = `${e.clientY - 8}px`
          section.appendChild(icon)
          
          icon.addEventListener('animationend', () => {
            icon.remove()
          })
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
        
        {/* Logo Section */}
        <motion.div 
          className={styles.logoRow}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src="/assets/CAMILA.png"
            alt="Camila"
            className={styles.logoPart}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
          <motion.div
            className={styles.logoRight}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <img 
              src="/assets/CAVALERI.png" 
              alt="Cavaleri" 
              className={styles.logoPart} 
            />
            <motion.img 
              src="/assets/ICONRED.png" 
              alt="Icon" 
              className={styles.icon}
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className={styles.heroTitle}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          Psicologia Breve: clareza e transformação no tempo certo
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        >
          Um espaço seguro, focado e com direção para lidar com o que hoje te incomoda.
        </motion.p>

        {/* Features Cards */}
        <motion.div 
          className={styles.features}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
        >
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <img src="/assets/ICONGREEN.png" alt="" aria-hidden="true" />
            </div>
            <div className={styles.featureTitle}>Abordagem Breve</div>
            <div className={styles.featureText}>Foco no presente e resultados no tempo certo</div>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <img src="/assets/ICONYELLOW.png" alt="" aria-hidden="true" />
            </div>
            <div className={styles.featureTitle}>Escuta Acolhedora</div>
            <div className={styles.featureText}>Espaço seguro para suas emoções e experiências</div>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <img src="/assets/ICONRED.png" alt="" aria-hidden="true" />
            </div>
            <div className={styles.featureTitle}>Transformação Real</div>
            <div className={styles.featureText}>Clareza, autonomia e novos caminhos</div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a 
          href="#contact" 
          className={styles.ctaButton}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Agende sua primeira conversa
          <svg 
            className={styles.ctaIcon} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.a>

        {/* Social Proof */}
        <motion.div 
          className={styles.socialProof}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
        >
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>CRP</span>
            <span className={styles.proofLabel}>Registro Profissional</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>18+</span>
            <span className={styles.proofLabel}>Anos de Experiência</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofNumber}>✓</span>
            <span className={styles.proofLabel}>Especialista em Terapia Breve</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}