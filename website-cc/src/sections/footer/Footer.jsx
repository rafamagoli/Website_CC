import { Link } from 'react-router-dom'
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Vamos dar o próximo passo?
          </h2>
          <p className={styles.ctaText}>
            Seja para iniciar um acompanhamento clínico ou uma avaliação psicológica, estou à disposição.
          </p>
          <Link to="/contato" className={styles.ctaButton}>
            Agendar conversa
          </Link>
        </div>

        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandNameWrap} aria-label="Camila Cavaleri">
              <span className={styles.brandLine}>Camila</span>
              <span className={styles.brandLineWithIcon}>
                <span className={styles.brandLine}>Cavaleri</span>
                <img
                  src="/assets/ICONRED.png"
                  alt=""
                  className={styles.brandIcon}
                  aria-hidden="true"
                />
              </span>
            </div>
            <div>
              <p className={styles.brandMeta}>Psicologia Clínica e Avaliação Psicológica • CRP 16/11890</p>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contacts}>
              <a href="https://wa.me/5527988302361?text=Ol%C3%A1%2C%20Camila!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20e%20como%20funciona%20o%20primeiro%20contato." target="_blank" rel="noopener noreferrer" className={styles.contact} title="WhatsApp">
                <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                  <path d="M20 12a8 8 0 10-14.7 4.3L4 21l4.9-1.3A8 8 0 0020 12z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M9.5 10.5c.4 1.2 1.3 2.2 2.5 2.8l.6-.6a1 1 0 011.1-.2l2 .8a1 1 0 01.6 1.1c-.3 1.4-1.8 2-3.2 1.6A7.5 7.5 0 018 9.1c-.4-1.4.2-2.9 1.6-3.2a1 1 0 011.1.6l.8 2a1 1 0 01-.2 1.1l-.6.6z" fill="currentColor"/>
                </svg>
              </a>
              <a href="mailto:camilacavaleri@yahoo.com?subject=Consulta Terapia Breve&body=Olá, Camila! Gostaria de agendar uma consulta." className={styles.contact} title="E-mail">
                <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/camilacavaleri/" target="_blank" rel="noopener noreferrer" className={styles.contact} title="Instagram">
                <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <div className={styles.nav}>
              <Link to="/">Início</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/servicos">Serviços</Link>
              <Link to="/servicos/psicologia-breve">Psicologia Breve</Link>
              <Link to="/servicos/avaliacao-psicologica">Avaliação Psicológica</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© {year} Camila Cavaleri. Todos os direitos reservados.</p>
          <p>
            Site feito por{' '}
            <a href="https://www.instagram.com/lyradigitalstudio" target="_blank" rel="noopener noreferrer">
              Lyra • Digital Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
