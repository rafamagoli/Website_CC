import styles from './Services.module.css'

export default function Services() {
  const gallery = [
    { src: '/assets/Service1.png', alt: 'Acolhimento e leveza' },
    { src: '/assets/Service2.png', alt: 'Portas para novos caminhos' },
    { src: '/assets/Service3.png', alt: 'Texturas suaves e cuidado' },
    { src: '/assets/Service4.png', alt: 'Simplicidade e presença' },
  ]

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">

        <header className={styles.header}>
          <span className={styles.kicker}>Terapia Breve</span>
          <h2 className={styles.title}>O que é Psicologia Breve?</h2>
          <p className={styles.subtitle}>
            Uma abordagem focada no presente, acolhendo sua história para te ajudar a enxergar os desafios com
            mais leveza, clareza e autonomia.
          </p>
        </header>

        <div className={styles.galleryRow}>
          {gallery.map((g, i) => (
            <figure key={i} className={styles.galleryItem} tabIndex={0} aria-label={g.alt}>
              <div className={styles.galleryInner}>
                <img src={g.src} alt={g.alt} className={styles.galleryFront} />
                <div className={styles.galleryBack}>
                  <img src="/assets/ICONGREEN.png" alt="" aria-hidden="true" className={styles.galleryBrandIcon} />
                </div>
              </div>
            </figure>
          ))}
        </div>

        <article className={`${styles.contentCard} ${styles.intro}`}>
          <div className={styles.contentCardBody}>
            <p>
              A Psicologia Breve parte do que te incomoda hoje, acolhendo seu contexto de vida, relações e ciclos.
            </p>
            <ul className={styles.points}>
              <li><span className={styles.pointText}><strong>Clareza no presente</strong> — foco no que está vivo agora.</span></li>
              <li><span className={styles.pointText}><strong>Direção com leveza</strong> — enxergar o problema de outra forma.</span></li>
              <li><span className={styles.pointText}><strong>Autonomia emocional</strong> — resultados no tempo certo.</span></li>
            </ul>
            <p className={styles.callout}>
              👉 O objetivo é transformar o olhar sobre o problema.
            </p>
          </div>
        </article>

        {/* Como funciona */}
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Como funciona</h3>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeGreen}`}>1</div>
              <div className={styles.stepText}>
                <strong>Não começamos do zero.</strong> Trabalhamos o que está vivo agora em você.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeYellow}`}>2</div>
              <div className={styles.stepText}>
                <strong>Com começo, meio e fim.</strong> Estruturada para resultados no tempo certo.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeRed}`}>3</div>
              <div className={styles.stepText}>
                <strong>Direcionada com respeito.</strong> Honramos sua história, limites e ritmo.
              </div>
            </li>
          </ol>
        </section>

        {/* Para quem é */}
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Para quem é</h3>
          <p className={styles.blockLead}>
            Indicada especialmente para mulheres em fases de transformação:
          </p>
          <ul className={styles.chips}>
            <li>🌿 Maternidade</li>
            <li>🌿 Recomeços pessoais ou profissionais</li>
            <li>🌿 Lutos e despedidas</li>
            <li>🌿 Encontros e reencontros consigo mesma</li>
          </ul>
        </section>

        {/* Benefícios */}
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Benefícios</h3>
          <div className={styles.benefitsGrid}>
            {[
              'Redução da ansiedade e do estresse',
              'Melhora da qualidade do sono',
              'Relações mais equilibradas',
              'Reconexão com seus limites e desejos',
              'Mais autoconfiança e clareza emocional'
            ].map((b) => (
              <div key={b} className={styles.benefitItem}>
                <img src="/assets/ICONGREEN.png" alt="" className={styles.icon} aria-hidden="true" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <aside className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Quer saber se a Terapia Breve é para você?</h3>
            <p className={styles.ctaSubtitle}>Te convido para uma primeira conversa acolhedora.</p>
          </div>
          <a href="#contact" className="btn">Agende sua sessão</a>
        </aside>
      </div>
    </section>
  )
}