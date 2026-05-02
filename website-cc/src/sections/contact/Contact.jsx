import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      {/* LEFT — dark panel */}
      <div className={styles.left}>
        <img
          src="/assets/ICONWHITE.png"
          alt=""
          className={styles.decorIcon}
          aria-hidden="true"
        />
        <div className={styles.leftContent}>
          <p className={styles.eyebrow}>Contato</p>
          <h1 className={styles.heading}>
            Vamos<br />conversar.
          </h1>
          <p className={styles.body}>
            Atendo pacientes e recebo encaminhamentos de profissionais de saúde.
            Escolha o canal mais conveniente.
          </p>
          <div className={styles.modalidades}>
            <span>Presencial</span>
            <span className={styles.modalidadesDot} aria-hidden="true" />
            <span>Online</span>
          </div>
          <p className={styles.crp}>CRP 16/11890 · Vitória, ES</p>
        </div>
      </div>

      {/* RIGHT — light panel */}
      <div className={styles.right}>
        <div className={styles.links}>
          <a
            href="https://wa.me/5527988302361?text=Ol%C3%A1%2C%20Camila!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20e%20como%20funciona%20o%20primeiro%20contato."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>WhatsApp</span>
              <span className={styles.contactValue}>+55 27 98830-2361</span>
            </div>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>

          <div className={styles.divider} aria-hidden="true" />

          <a
            href="mailto:camila_cavaleri@yahoo.com"
            className={styles.contactRow}
          >
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>E-mail</span>
              <span className={styles.contactValue}>camila_cavaleri@yahoo.com</span>
            </div>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>

          <div className={styles.divider} aria-hidden="true" />

          <a
            href="https://www.instagram.com/camilacavaleri/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>Instagram</span>
              <span className={styles.contactValue}>@camilacavaleri</span>
            </div>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>

          <p className={styles.note}>
            Respondo em até 24h em dias úteis.
          </p>
        </div>
      </div>

    </section>
  )
}
