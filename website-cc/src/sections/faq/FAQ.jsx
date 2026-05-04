import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
    a: 'Na maioria dos casos, semanal. Em algumas fases pode ser quinzenal, de acordo com objetivos e disponibilidade. Decidimos juntos o que faz mais sentido.'
  },
  {
    id: 4,
    icon: '/assets/ICONGREEN.png',
    category: 'Modalidade',
    q: 'Atende online ou presencial?',
    a: 'Ambos, atendimento presencial em Vitória - Espírito Santo ou atendimento online por vídeo chamada, assim posso cuidar de você onde quer que esteja, com mais flexibilidade e conforto.'
  },
  {
    id: 5,
    icon: '/assets/ICONYELLOW.png',
    category: 'Adequação',
    q: 'Como saber se a Psicologia Breve é para mim?',
    a: 'Se você busca clareza para um tema específico e deseja um processo estruturado com direção, a Psicologia Breve é um bom caminho.'
  },
  {
    id: 6,
    icon: '/assets/ICONRED.png',
    category: 'Processo',
    q: 'O que posso esperar entre as sessões?',
    a: 'Convites de reflexão e pequenas práticas que ajudam a levar o que acontece no consultório para a vida. Sem cobranças excessivas: consciência e gentileza com o seu tempo.'
  },
  {
    id: 7,
    icon: '/assets/ICONGREEN.png',
    category: 'Resultados',
    q: 'Como são definidos objetivos e resultados?',
    a: 'Juntas(os), traduzimos o que te incomoda hoje em objetivos claros e alcançáveis. Ao longo do processo, revisitamos esses objetivos para acompanhar os que já estão mais claros e os que ainda precisam de cuidado.'
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
    a: 'Clique em "Agendar conversa" e me envie uma mensagem. Vou te retornar com as próximas disponibilidades e os passos simples para começarmos.'
  },
  {
    id: 12,
    icon: '/assets/ICONGREEN.png',
    category: 'Avaliação',
    q: 'O que é a avaliação psicológica?',
    a: 'É um processo investigativo conduzido com rigor clínico para responder perguntas sobre o funcionamento psicológico de uma pessoa. Envolve testes validados, entrevistas estruturadas e, quando indicado, assessments com pessoas próximas. Ao final, é elaborado um laudo criterioso com devolutiva humanizada.'
  },
  {
    id: 13,
    icon: '/assets/ICONRED.png',
    category: 'Avaliação',
    q: 'A avaliação resulta em diagnóstico?',
    a: 'Pode resultar, sim, quando todos os critérios diagnósticos estabelecidos pelo DSM-5 são investigados e documentados com rigor. Um laudo bem feito não é um rótulo, é um documento que ajuda a pessoa a se entender dentro de uma perspectiva clínica.'
  },
  {
    id: 14,
    icon: '/assets/ICONYELLOW.png',
    category: 'Avaliação',
    q: 'Quanto tempo dura o processo de avaliação?',
    a: 'O processo de avaliação psicológica acontece ao longo de 8 sessões, organizadas para investigar com profundidade as perguntas clínicas de cada caso.'
  },
  {
    id: 15,
    icon: '/assets/ICONGREEN.png',
    category: 'Avaliação',
    q: 'Quem pode solicitar uma avaliação psicológica?',
    a: 'Qualquer pessoa que queira entender melhor seu funcionamento psicológico, confirmar uma hipótese diagnóstica ou que chegou com encaminhamento de psiquiatra ou outro profissional de saúde. A avaliação é indicada para suspeitas de TDAH, autismo, burnout e outras questões do neurodesenvolvimento.'
  }
]

export default function FAQ() {
  const [active, setActive] = useState(null)

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
    <section id="faq" className={`section ${styles.faq}`}>
      <div className={styles.backgroundElements}>
        <div
          className={styles.floatingIcon}
          style={{ backgroundImage: 'url(/assets/ICONGREEN.png)' }}
        />
        <div
          className={styles.floatingIcon}
          style={{
            backgroundImage: 'url(/assets/ICONYELLOW.png)',
            top: '60%',
            right: '5%'
          }}
        />
      </div>

      <div className="container">
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>
              FAQ
            </p>
            
            <h2 className={styles.title}>
              Perguntas <span className={styles.titleAccent}>Frequentes</span>
            </h2>
            
            <p className={styles.subtitle}>
              Respostas claras e diretas sobre a Psicologia Breve e a Avaliação Psicológica: como podemos 
              trabalhar juntos no seu processo de transformação
            </p>
          </header>

          <div className={styles.faqContainer}>
            {questions.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.item} ${active === idx ? styles.active : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => setActive(active === idx ? null : idx)}
                >
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
                      scale: 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className={styles.toggleIcon}>
                      <div className={styles.iconLine} />
                      <div className={styles.iconLine} />
                    </div>
                  </motion.div>
                </button>

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
                <div className={styles.hoverLine} />
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
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
                  Estou aqui para esclarecer qualquer questão e ajudar a dar o primeiro passo.
                </p>
                <div className={styles.ctaButtons}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contato" className={styles.ctaButton}>
                      Fale comigo
                      <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                  <Link to="/servicos" className={styles.ctaButtonGhost}>
                    Ver serviços
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
