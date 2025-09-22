import { useEffect, useRef } from 'react'
import styles from './Services.module.css'

export default function Services() {
  const sectionRef = useRef(null)
  
  const gallery = [
    { src: '/assets/Service1.png', alt: 'Acolhimento e leveza' },
    { src: '/assets/Service2.png', alt: 'Portas para novos caminhos' },
    { src: '/assets/Service3.png', alt: 'Texturas suaves e cuidado' },
    { src: '/assets/Service4.png', alt: 'Simplicidade e presença' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="services" 
      className={`section ${styles.services}`}
      ref={sectionRef}
    >
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
            <figure 
              key={i} 
              className={styles.galleryItem} 
              style={{ '--i': i }}
              tabIndex={0} 
              aria-label={g.alt}
              role="button"
            >
              <div className={styles.galleryInner}>
                <img 
                  src={g.src} 
                  alt={g.alt} 
                  className={styles.galleryFront}
                  loading="lazy"
                />
                <div className={styles.galleryBack}>
                  <img 
                    src="/assets/ICONGREEN.png" 
                    alt="" 
                    aria-hidden="true" 
                    className={styles.galleryBrandIcon} 
                  />
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
              <li>
                <span className={styles.pointText}>
                  <strong>Clareza no presente</strong> — foco no que está vivo agora.
                </span>
              </li>
              <li>
                <span className={styles.pointText}>
                  <strong>Direção com leveza</strong> — enxergar o problema de outra forma.
                </span>
              </li>
              <li>
                <span className={styles.pointText}>
                  <strong>Autonomia emocional</strong> — resultados no tempo certo.
                </span>
              </li>
            </ul>
            <div className={styles.callout}>
              O objetivo é transformar o olhar sobre o problema.
            </div>
          </div>
        </article>

        <section className={styles.block}>
          <h3 className={styles.blockTitle}>Como funciona</h3>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeGreen}`}>1</div>
              <div className={styles.stepText}>
                <strong>Não começamos do zero.</strong><br />
                Trabalhamos o que está vivo agora em você.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeYellow}`}>2</div>
              <div className={styles.stepText}>
                <strong>Com começo, meio e fim.</strong><br />
                Estruturada para resultados no tempo certo.
              </div>
            </li>
            <li className={styles.step}>
              <div className={`${styles.badge} ${styles.badgeRed}`}>3</div>
              <div className={styles.stepText}>
                <strong>Direcionada com respeito.</strong><br />
                Honramos sua história, limites e ritmo.
              </div>
            </li>
          </ol>
        </section>

        <section className={`${styles.block} ${styles.audienceSection}`}>
          <h3 className={styles.blockTitle}>Para quem é</h3>
          <p className={styles.audienceIntro}>
            Indicada especialmente para mulheres em fases de transformação
          </p>
          <ul className={styles.chips}>
            <li>🌿 Maternidade</li>
            <li>🌿 Recomeços pessoais ou profissionais</li>
            <li>🌿 Lutos e despedidas</li>
            <li>🌿 Encontros e reencontros consigo mesma</li>
          </ul>
        </section>

        <section className={`${styles.block} ${styles.benefitsSection}`}>
          <h3 className={styles.blockTitle}>Benefícios</h3>
          <p className={styles.benefitsIntro}>
            Resultados que você pode esperar ao longo do processo terapêutico
          </p>
          <div className={styles.benefitsGrid}>
            {[
              'Redução da ansiedade e do estresse',
              'Melhora da qualidade do sono',
              'Relações mais equilibradas',
              'Autonomia para enfrentar desafios futuros',
              'Reconexão com seus limites e desejos',
              'Mais autoconfiança e clareza emocional'
            ].map((benefit, index) => (
              <div key={benefit} className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <img 
                    src="/assets/ICONGREEN.png" 
                    alt="" 
                    aria-hidden="true" 
                  />
                </div>
                <span className={styles.benefitText}>{benefit}</span>
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
          <a 
            href="#contact" 
            className="btn"
            aria-label="Agendar sessão de terapia breve"
          >
            Agende sua sessão
          </a>
        </aside>
      </div>
    </section>
  )
}