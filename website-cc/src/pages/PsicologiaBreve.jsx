import { Link } from 'react-router-dom'
import Services from '../sections/services/Services.jsx'
import styles from '../styles/AvaliacaoPsicologica.module.css'

export default function PsicologiaBreve() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.avalHeroGrid}>
          <div className={styles.heroLeft}>
            <nav className={styles.breadcrumb} aria-label="Navegação estrutural">
              <Link to="/servicos">Serviços</Link>
              <span aria-hidden="true">›</span>
              <span>Psicologia Breve</span>
            </nav>

            <h1 className={styles.avalH1}>
              Psicologia<br />
              <em>Breve</em>
            </h1>

            <p className={styles.heroLead}>
              Uma abordagem focada no presente, acolhendo sua história para te ajudar a enxergar os desafios com mais leveza, clareza e autonomia.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contato" className={styles.ctaPrimary}>
                Agende sua sessão
              </Link>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img
              src="/assets/CamilaPhoto3.webp"
              alt="Camila Cavaleri em atendimento"
              className={styles.avalHeroPhoto}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Services />
    </>
  )
}
