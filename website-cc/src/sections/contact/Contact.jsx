import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    section.addEventListener('mousemove', handleMouseMove)
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const floatingIconVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section 
      id="contact" 
      className={`section ${styles.contact}`}
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONGREEN.png)'
          }}
          variants={floatingIconVariants}
          animate="animate"
        />
        <motion.div 
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONYELLOW.png)',
            top: '60%',
            left: '80%',
            animationDelay: '2s'
          }}
          variants={floatingIconVariants}
          animate="animate"
        />
        <motion.div 
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONRED.png)',
            top: '20%',
            left: '10%',
            animationDelay: '4s'
          }}
          variants={floatingIconVariants}
          animate="animate"
        />
      </div>

      {/* Interactive cursor follower */}
      <motion.div
        className={styles.cursorFollower}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header with enhanced styling */}
          <motion.div className={styles.header} variants={itemVariants}>
            <motion.span 
              className={styles.note}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ✨ Pronta para começar?
            </motion.span>
            
            <motion.h2 
              className={styles.title}
              variants={itemVariants}
            >
              Vamos <span className={styles.titleAccent}>conversar</span> sobre 
              <br />seu bem-estar
            </motion.h2>
            
            <motion.p 
              className={styles.subtitle}
              variants={itemVariants}
            >
              Escolha a forma mais confortável para entrar em contato. 
              Estou aqui para acolher suas dúvidas e iniciar essa jornada juntos.
            </motion.p>
          </motion.div>

          {/* Enhanced contact cards */}
          <motion.div 
            className={styles.cards}
            variants={itemVariants}
          >
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/5527988302361?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              className={`${styles.card} ${styles.whatsapp}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard('whatsapp')}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className={styles.cardIconContainer}
                animate={hoveredCard === 'whatsapp' ? { rotate: 10, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.687"/>
                  </svg>
                </div>
              </motion.div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>WhatsApp</h3>
                <p className={styles.cardDescription}>Resposta rápida e direta</p>
                <span className={styles.cardDetail}>
                  Clique para conversar agora
                </span>
              </div>
              
              <motion.div 
                className={styles.cardArrow}
                animate={hoveredCard === 'whatsapp' ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:camilacavaleri@yahoo.com?subject=Consulta Terapia Breve&body=Olá, Camila! Gostaria de agendar uma consulta."
              className={`${styles.card} ${styles.email}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard('email')}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className={styles.cardIconContainer}
                animate={hoveredCard === 'email' ? { rotate: -10, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </motion.div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>E-mail</h3>
                <p className={styles.cardDescription}>Para uma conversa mais detalhada</p>
                <span className={styles.cardDetail}>
                  camilacavaleri@yahoo.com
                </span>
              </div>
              
              <motion.div 
                className={styles.cardArrow}
                animate={hoveredCard === 'email' ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className={styles.trustIndicators}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.trustItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.trustIcon}>🔒</span>
              <span className={styles.trustText}>Sigilo profissional</span>
            </motion.div>
            
            <motion.div 
              className={styles.trustItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.trustIcon}>⚡</span>
              <span className={styles.trustText}>Resposta rápida</span>
            </motion.div>
            
            <motion.div 
              className={styles.trustItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.trustIcon}>💖</span>
              <span className={styles.trustText}>Acolhimento garantido</span>
            </motion.div>
          </motion.div>

          {/* Call-to-action footer */}
          <motion.div 
            className={styles.ctaFooter}
            variants={itemVariants}
          >
          <p className={styles.ctaText}>
            "Transformação começa com um gesto. <strong>Dê o primeiro passo</strong>, eu caminho ao seu lado."
          </p>
            <div className={styles.ctaSignature}>
              <img 
                src="/assets/ICONRED.png" 
                alt="" 
                className={styles.signatureIcon}
              />
              <span className={styles.signatureName}>Camila Cavaleri</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}