import { Link } from 'react-router-dom'
import styles from '../styles/Servicos.module.css'

export default function Servicos() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Serviços</p>
          <h1 className={styles.pageTitle}>
            Como posso<br />te <em>ajudar</em>
          </h1>
          <div className={styles.accentLine} aria-hidden="true" />
          <p className={styles.pageLead}>Atuo em dois caminhos distintos, cada um com sua abordagem, ritmo e propósito.</p>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.servicesGrid}>
          <article className={`${styles.serviceCard} ${styles.serviceCardDark}`}>
            <span className={styles.cardNumber} aria-hidden="true">01</span>
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>Psicologia Clínica</span>
              <h2 className={styles.cardTitle}>Psicologia Breve</h2>
              <p className={styles.cardDesc}>
                Atendimento focado e com direção. Para quem quer lidar com o que hoje
                incomoda, com clareza e movimento real.
              </p>
            </div>
            <Link to="/servicos/psicologia-breve" className={styles.cardArrow}>
              Ver detalhes
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="14" height="14">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </article>

          <article className={`${styles.serviceCard} ${styles.serviceCardLight}`}>
            <span className={styles.cardNumber} aria-hidden="true">02</span>
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>Avaliação Psicológica</span>
              <h2 className={styles.cardTitle}>Avaliação Psicológica</h2>
              <p className={styles.cardDesc}>
                Um percurso investigativo rigoroso para entender questões do
                neurodesenvolvimento, com testes validados e critérios diagnósticos.
              </p>
            </div>
            <Link to="/servicos/avaliacao-psicologica" className={styles.cardArrow}>
              Ver detalhes
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="14" height="14">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}
