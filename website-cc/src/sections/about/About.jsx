import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Photo */}
          <div className={styles.photoCol}>
            <div className={styles.photoCircle}>
              <img
                src="/assets/CamilaPhoto.png"
                alt="Camila Cavaleri"
                className={styles.photo}
                decoding="async"
              />
            </div>
          </div>

          {/* Text */}
          <div className={styles.textCol}>
            <h2 className={styles.title}>Sobre mim</h2>
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
          </div>
        </div>
      </div>
    </section>
  )
}