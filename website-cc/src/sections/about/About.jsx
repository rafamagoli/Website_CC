import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
                  src="/assets/CamilaPhoto.webp"
                  alt="Camila Cavaleri - Psicóloga clínica e avaliadora psicológica"
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
                <span>CRP 16/11890</span>
              </div>
              <div className={styles.credentialItem}>
                <img 
                  src="/assets/ICONGREEN.png" 
                  alt="" 
                  className={styles.credentialIcon}
                  aria-hidden="true"
                />
                <span>Psicologia Clínica e Avaliação Psicológica</span>
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
              Sou psicóloga clínica e avaliadora psicológica. Atuo no
              atendimento individual com <strong>Psicologia Breve</strong> e
              na realização de <strong>avaliações psicológicas</strong> para
              questões do neurodesenvolvimento.
            </p>

            <p className={styles.body}>
              Em minha trajetória, passei por ritos transformadores. Migrei, gestei, pari e maternei em tempo integral por 3 anos,
              retornei ao meu País de origem com nova roupagem, abri caminhos profissionais e sigo na construção e reconstrução de
              quem sou e quero me tornar. Essas vivências fortaleceram meu
              propósito: <span className={styles.highlight}>ajudar pessoas em fases de transformação</span> a encontrarem
              clareza, leveza e autonomia.
            </p>
            <p className={styles.body}>
              Com empatia e escuta ativa, ofereço um espaço seguro e
              direcionado, seja no acompanhamento clínico ou na investigação
              diagnóstica rigorosa, onde cada encontro se torna uma
              oportunidade de reconexão consigo.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>🌱</span>
                <span className={styles.statLabel}>Abordagem humanizada</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>💛</span>
                <span className={styles.statLabel}>Escuta ativa</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>🎯</span>
                <span className={styles.statLabel}>Foco no presente</span>
              </div>
            </div>

            <div className={styles.aboutCtas}>
              <Link to="/servicos" className={styles.aboutCtaPrimary}>
                Ver serviços
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/contato" className={styles.aboutCtaGhost}>
                Entrar em contato
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}