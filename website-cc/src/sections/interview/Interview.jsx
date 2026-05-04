import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Interview.module.css'

const signs = [
  'Palpitações e sensação de alerta constante',
  'Pensamentos acelerados e dificuldade de desacelerar',
  'Sudorese intensa e tensão no corpo',
  'Desânimo persistente e perda de vitalidade',
]

export default function Interview() {
  return (
    <section id="interview" className={`section ${styles.interview}`}>
      <div className="container">

        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeDot} />
          Na mídia
        </motion.span>

        <div className={styles.grid}>

          {/* ── Image ── */}
          <motion.figure
            className={styles.mediaCard}
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/assets/CamilaInterview.webp"
              alt="Camila Cavaleri em entrevista no Jornal da TV Vitória"
              className={styles.mediaImage}
              loading="lazy"
            />
            <figcaption className={styles.mediaOverlay}>
              <span className={styles.channelBadge}>TV Vitória · Rede Record</span>
            </figcaption>
          </motion.figure>

          {/* ── Content ── */}
          <motion.article
            className={styles.contentCard}
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <h2 className={styles.title}>
              Saúde Mental em Pauta no{' '}
              <em>Jornal da TV&nbsp;Vitória</em>
            </h2>

            <blockquote className={styles.pullQuote}>
              "Não existe fórmula pronta para sofrimento emocional: é preciso escuta, contexto e cuidado sério."
            </blockquote>

            <p className={styles.body}>
              Em entrevista para a afiliada da Rede Record, Camila reforçou a urgência do cuidado com
              ansiedade, depressão e burnout como tema de saúde pública. Jornadas excessivas e ambientes
              de trabalho adoecedores também fazem parte do problema — e precisamos de políticas públicas
              e acolhimento acessível.
            </p>

            <p className={styles.signsLabel}>Sinais que merecem atenção</p>
            <ul className={styles.signs}>
              {signs.map((sign, i) => (
                <motion.li
                  key={sign}
                  className={styles.signItem}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                >
                  <span className={styles.signNum}>{String(i + 1).padStart(2, '0')}</span>
                  {sign}
                </motion.li>
              ))}
            </ul>
          </motion.article>

        </div>

        {/* ── Callout ── */}
        <motion.div
          className={styles.callout}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className={styles.calloutText}>
            Pedir ajuda é um gesto de <em>coragem.</em>
          </p>
          <Link to="/contato" className={styles.calloutButton}>
            Conversar sobre isso →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
