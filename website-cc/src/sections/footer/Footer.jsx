import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Pronta para começar sua jornada de autoconhecimento?
          </h2>
          <p className={styles.ctaText}>
            Marque sua primeira conversa e descubra, no seu tempo, um caminho com mais clareza e leveza.
          </p>
          <a
            href="https://wa.me/5527988302361?text=Olá%20Camila,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar no WhatsApp
          </a>
        </div>

        {/* Conteúdo Principal */}
        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <img 
              src="/assets/CCLOGO.png" 
              alt="Camila Cavaleri" 
              className={styles.logo}
            />
            <div>
              <h3 className={styles.brandName}>Camila Cavaleri</h3>
              <p className={styles.brandMeta}>Psicologia Breve • CRP 16/11890</p>
            </div>
          </div>

          {/* Contato */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contacts}>
              <a href="https://wa.me/5527988302361?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className={styles.contact} title="WhatsApp">
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

          {/* Navegação */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <div className={styles.nav}>
              <a href="#home">Início</a>
              <a href="#about">Sobre</a>
              <a href="#services">Terapia Breve</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© {year} Camila Cavaleri. Todos os direitos reservados.</p>
          <p>
            Site feito por{' '}
            <a href="https://www.instagram.com/rafamagoli" target="_blank" rel="noopener noreferrer">
              Rafaela Magalhães
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}