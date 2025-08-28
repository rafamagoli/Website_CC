import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        {/* Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <p className={styles.subtitle}>
            Escolha o canal que for mais confortável para você 💬
          </p>
        </header>

        {/* Cards */}
        <div className={styles.cards}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/5527988302361?text=Olá%20Camila,%20gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.whatsapp}`}
          >
            <div className={styles.icon}>📱</div>
            <div>
              <h3>WhatsApp</h3>
              <p>Agende direto comigo pelo WhatsApp</p>
              <span className={styles.detail}>+55 27 98830-2361</span>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:Camila_cavaleri@yahoo.com.br"
            className={`${styles.card} ${styles.email}`}
          >
            <div className={styles.icon}>✉️</div>
            <div>
              <h3>E-mail</h3>
              <p>Prefere escrever? Envie um e-mail</p>
              <span className={styles.detail}>Camila_cavaleri@yahoo.com.br</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}