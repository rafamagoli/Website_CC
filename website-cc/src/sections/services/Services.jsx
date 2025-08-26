import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.kicker}>Terapia Breve</span>
          <h2 className={styles.title}>O que é Psicologia Breve?</h2>
          <p className={styles.subtitle}>
            Uma abordagem focada no presente, acolhendo sua história para te ajudar a enxergar os desafios com
            mais leveza, clareza e autonomia.
          </p>
        </header>

        {/* Bloco 1 – Introdução (card destaque) */}
        <article className={`${styles.card} ${styles.intro}`}>
          <div className={styles.cardBody}>
            <p>
              A Psicologia Breve é uma abordagem não convencional e profundamente valiosa.
              Ela parte do que está te incomodando hoje, dentro do seu contexto de vida, relações e ciclos.
            </p>
            <p className={styles.callout}>
              👉 O foco não é apagar o problema, mas ajudar você a enxergá-lo de outra forma — com mais leveza, clareza e autonomia.
            </p>
          </div>
        </article>

        {/* Bloco 2 – Como funciona (stepper 1–2–3) */}
        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Como funciona</h3>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeGreen}`}>1</div>
              <div className={styles.stepText}>
                Não é necessário começar do zero: trabalhamos a partir do que está vivo agora em você.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeYellow}`}>2</div>
              <div className={styles.stepText}>
                Terapia com começo, meio e fim — estruturada para trazer resultados no tempo certo.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeRed}`}>3</div>
              <div className={styles.stepText}>
                Direcionada, mas respeitando sua história, seus limites e seu ritmo.
              </div>
            </li>
          </ol>
        </section>

        {/* Bloco 3 – Para quem é (chips grandes) */}
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

        {/* Bloco 4 – Benefícios (checklist visual) */}
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

        {/* Bloco 5 – CTA (banner amplo, clean) */}
        <aside className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>✨ Quer saber se a Terapia Breve é para você?</h3>
            <p className={styles.ctaSubtitle}>Te convido para uma primeira conversa acolhedora.</p>
          </div>
          <a href="#contact" className="btn">Agende sua sessão</a>
        </aside>
      </div>
    </section>
  )
}