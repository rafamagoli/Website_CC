import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* CTA em faixa */}
        <div className={styles.ctaBar}>
          <div>
            <h3 className={styles.ctaTitle}>Pronta para começar sua jornada de autoconhecimento?</h3>
            <p className={styles.ctaSubtitle}>
              Marque sua primeira conversa e descubra, no seu tempo, um caminho com mais clareza e leveza.
            </p>
          </div>
          <a
            href="https://wa.me/5527988302361?text=Olá%20Camila,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar no WhatsApp
          </a>
        </div>

        <div className={styles.inner}>
          {/* Marca */}
          <div className={styles.brand}>
            <img src="/assets/CCLOGO.png" alt="Camila Cavaleri" className={styles.logo} />
            <div>
              <p className={styles.brandName}>Camila Cavaleri</p>
              <p className={styles.brandMeta}>Psicologia Breve · CRP 16/11890</p>
            </div>
          </div>

          {/* Contato com ícones */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Contato</h3>
            <ul className={`${styles.list} ${styles.contactIcons}`}>
              <li>
                <a
                  href="https://wa.me/5527988302361?text=Olá%20Camila,%20gostaria%20de%20agendar%20uma%20sessão."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Camila"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className={styles.iconOnly} aria-hidden="true">
                    <path d="M20 12a8 8 0 10-14.7 4.3L4 21l4.9-1.3A8 8 0 0020 12z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9.5 10.5c.4 1.2 1.3 2.2 2.5 2.8l.6-.6a1 1 0 011.1-.2l2 .8a1 1 0 01.6 1.1c-.3 1.4-1.8 2-3.2 1.6A7.5 7.5 0 018 9.1c-.4-1.4.2-2.9 1.6-3.2a1 1 0 011.1.6l.8 2a1 1 0 01-.2 1.1l-.6.6z" fill="currentColor"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Camila_cavaleri@yahoo.com.br"
                  aria-label="E-mail da Camila"
                  title="E-mail"
                >
                  <svg viewBox="0 0 24 24" className={styles.iconOnly} aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/camilacavaleri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Camila"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" className={styles.iconOnly} aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação rápida */}
          <nav className={styles.block} aria-label="Rodapé">
            <h3 className={styles.blockTitle}>Navegação</h3>
            <ul className={styles.quickNav}>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Terapia Breve</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
            <a href="#home" className={styles.toTop} aria-label="Voltar ao topo">↑ Voltar ao topo</a>
          </nav>
        </div>

        {/* Faixa inferior */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Camila Cavaleri. Todos os direitos reservados.</p>
          <p className={styles.by}>
            Site feito por{' '}
            <a
              href="https://www.instagram.com/rafamagoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rafaela Magalhães
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}