import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      className={`section ${styles.about}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={styles.grid}>
          
          {/* Photo Column */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrapper}>
              <div className={styles.photoCircle}>
                <img
                  src="/assets/CamilaPhoto.png"
                  alt="Camila Cavaleri - Psicóloga especialista em Terapia Breve"
                  className={styles.photo}
                  decoding="async"
                  loading="lazy"
                />
              </div>
              
              <div className={styles.decorativeElement}></div>
              <div className={styles.decorativeElement}></div>
              <div className={styles.decorativeElement}></div>
            </div>
            
            <div className={styles.credentials}>
              <div className={styles.credentialItem}>
                <img 
                  src="/assets/ICONGREEN.png" 
                  alt="" 
                  className={styles.credentialIcon}
                  aria-hidden="true"
                />
                <span>CRP 06/123456</span>
              </div>
              <div className={styles.credentialItem}>
                <img 
                  src="/assets/ICONGREEN.png" 
                  alt="" 
                  className={styles.credentialIcon}
                  aria-hidden="true"
                />
                <span>Especialista em Terapia Breve</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className={styles.textCol}>
            <span className={styles.kicker}>Sobre mim</span>
            
            <h2 className={styles.title}>
              Camila Cavaleri
            </h2>
            
            <p className={styles.lead}>
              Sou psicóloga especializada em <strong>Psicologia Breve</strong>, uma
              abordagem focada em acolher o presente e transformar o modo como
              você enxerga seus desafios.
            </p>
            
            <p className={styles.body}>
              Minha trajetória foi marcada por um olhar atento às pessoas, suas
              histórias e seus ciclos de vida. Essa vivência fortaleceu meu
              propósito: <span className={styles.highlight}>ajudar mulheres em fases de transformação</span> a encontrarem
              clareza, leveza e autonomia através da Psicologia Breve.
            </p>
            
            <p className={styles.body}>
              Com empatia e escuta ativa, ofereço um espaço seguro e
              direcionado, onde cada encontro se torna uma oportunidade de
              reconexão consigo mesma e de abertura para novos caminhos.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>🌱</span>
                <span className={styles.statLabel}>Abordagem humanizada</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>💛</span>
                <span className={styles.statLabel}>Escuta acolhedora</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>🎯</span>
                <span className={styles.statLabel}>Foco no presente</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}