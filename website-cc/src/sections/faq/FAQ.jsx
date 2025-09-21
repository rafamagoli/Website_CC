import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FAQ.module.css'

const questions = [
  {
    id: 1,
    icon: '/assets/ICONGREEN.png',
    category: 'Abordagem',
    q: 'O que é Psicologia Breve?',
    a: 'A Psicologia Breve é uma abordagem focada e com começo-meio-fim. Olha para o que te incomoda hoje, dentro do seu contexto de vida, relações e ciclos. É um processo direcionado, com objetivos claros e resultados práticos.'
  },
  {
    id: 2,
    icon: '/assets/ICONYELLOW.png',
    category: 'Processo',
    q: 'Como funciona a primeira conversa?',
    a: 'É um encontro acolhedor para entender o que está te incomodando hoje, mapear objetivos e alinhar expectativas. Ao final, combinamos um plano de cuidado com frequência e foco.'
  },
  {
    id: 3,
    icon: '/assets/ICONRED.png',
    category: 'Logística',
    q: 'Qual a frequência dos atendimentos?',
    a: 'Na maioria dos casos, semanal. Em algumas fases pode ser quinzenal, de acordo com objetivos e disponibilidade. Decidimos juntas(o) o que faz mais sentido.'
  },
  {
    id: 4,
    icon: '/assets/ICONGREEN.png',
    category: 'Modalidade',
    q: 'Atende online ou presencial?',
    a: 'Atendimento online por vídeo chamada. Assim, posso cuidar de você onde quer que esteja, com mais flexibilidade e conforto.'
  },
  {
    id: 5,
    icon: '/assets/ICONYELLOW.png',
    category: 'Adequação',
    q: 'Como saber se a Psicologia Breve é para mim?',
    a: 'Se você busca clareza para um tema específico e deseja um processo estruturado, com direção e metas realistas, a Psicologia Breve é um bom caminho.'
  },
  {
    id: 6,
    icon: '/assets/ICONRED.png',
    category: 'Processo',
    q: 'O que posso esperar entre as sessões?',
    a: 'Convites de reflexão e pequenas práticas de autocuidado que ajudam a levar o que acontece no consultório para a vida. Sem cobranças excessivas: consciência e gentileza com o seu tempo.'
  },
  {
    id: 7,
    icon: '/assets/ICONGREEN.png',
    category: 'Resultados',
    q: 'Como são definidos objetivos e resultados?',
    a: 'Juntas(os), traduzimos o que te incomoda hoje em objetivos claros e alcançáveis. Ao longo do processo, revisitamos esses objetivos para acompanhar o que já ganhou leveza e o que ainda precisa de cuidado.'
  },
  {
    id: 8,
    icon: '/assets/ICONYELLOW.png',
    category: 'Ética',
    q: 'Sigilo e ética são garantidos?',
    a: 'Sim. O atendimento segue as diretrizes do Conselho Regional de Psicologia e o compromisso de confidencialidade. CRP 16/11890.'
  },
  {
    id: 9,
    icon: '/assets/ICONRED.png',
    category: 'Flexibilidade',
    q: 'E se eu precisar de um acompanhamento mais longo?',
    a: 'Quando necessário, podemos estender o cuidado, manter pausas estratégicas ou encaminhar para outros recursos. O importante é que o plano continue fazendo sentido para você naquele momento.'
  },
  {
    id: 10,
    icon: '/assets/ICONGREEN.png',
    category: 'Políticas',
    q: 'Política de cancelamento e remarcação',
    a: 'Para reorganizarmos agendas e mantermos o cuidado com todas as pessoas atendidas, pedimos aviso com 24 horas de antecedência para cancelamentos e remarcações.'
  },
  {
    id: 11,
    icon: '/assets/ICONYELLOW.png',
    category: 'Agendamento',
    q: 'Como agendar?',
    a: 'Clique em "Agende sua primeira conversa" e me envie uma mensagem. Vou te retornar com as próximas disponibilidades e os passos simples para começarmos.'
  }
]

export default function FAQ() {
  const [active, setActive] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredItem, setHoveredItem] = useState(null)
  const sectionRef = useRef(null)

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const answerVariants = {
    closed: {
      height: 0,
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section 
      id="faq" 
      className={`section ${styles.faq}`}
      ref={sectionRef}
    >
      {/* Interactive background elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONGREEN.png)'
          }}
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONYELLOW.png)',
            top: '60%',
            right: '5%'
          }}
          animate={{ 
            y: [15, -15, 15],
            x: [5, -5, 5],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      {/* Gradient cursor follower */}
      <motion.div
        className={styles.cursorFollower}
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      />

      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Enhanced Header */}
          <motion.header 
            className={styles.header}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.badge}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ❓ FAQ
            </motion.div>
            
            <motion.h2 
              className={styles.title}
              variants={itemVariants}
            >
              Perguntas <span className={styles.titleAccent}>Frequentes</span>
            </motion.h2>
            
            <motion.p 
              className={styles.subtitle}
              variants={itemVariants}
            >
              Respostas claras e diretas sobre a Psicologia Breve e como podemos 
              trabalhar juntas(os) no seu processo de transformação
            </motion.p>
          </motion.header>

          {/* Enhanced FAQ List */}
          <motion.div 
            className={styles.faqContainer}
            variants={itemVariants}
          >
            {questions.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`${styles.item} ${active === idx ? styles.active : ''}`}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(idx)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Question Button */}
                <motion.button
                  className={styles.question}
                  onClick={() => setActive(active === idx ? null : idx)}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Category Tag */}
                  <div className={styles.categoryTag}>
                    <img 
                      src={item.icon} 
                      alt="" 
                      className={styles.categoryIcon}
                    />
                    <span className={styles.categoryText}>{item.category}</span>
                  </div>

                  {/* Question Text */}
                  <h3 className={styles.questionText}>
                    {item.q}
                  </h3>

                  {/* Animated Toggle Button */}
                  <motion.div 
                    className={styles.toggleButton}
                    animate={{ 
                      rotate: active === idx ? 45 : 0,
                      scale: hoveredItem === idx ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className={styles.toggleIcon}>
                      <div className={styles.iconLine} />
                      <div className={styles.iconLine} />
                    </div>
                  </motion.div>
                </motion.button>

                {/* Animated Answer */}
                <AnimatePresence>
                  {active === idx && (
                    <motion.div
                      className={styles.answer}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={answerVariants}
                    >
                      <motion.div 
                        className={styles.answerContent}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className={styles.answerText}>
                          {item.a}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover indicator line */}
                <motion.div 
                  className={styles.hoverLine}
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredItem === idx ? 1 : 0,
                    opacity: hoveredItem === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div 
            className={styles.ctaSection}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.ctaCard}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.ctaIcon}>
                <motion.img 
                  src="/assets/ICONRED.png" 
                  alt=""
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
              
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>
                  Ainda tem dúvidas?
                </h3>
                <p className={styles.ctaDescription}>
                  Vamos conversar! Estou aqui para esclarecer qualquer questão 
                  e te ajudar a dar o primeiro passo.
                </p>
              </div>
              
              <motion.a 
                href="#contact"
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale comigo
                <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}