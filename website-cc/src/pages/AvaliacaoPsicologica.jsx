import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/AvaliacaoPsicologica.module.css'
import IconGreen from '../assets/ICONGREEN.png'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'PsychologicalTreatment',
  name: 'Avaliação Psicológica',
  provider: {
    '@type': 'Person',
    name: 'Camila Cavaleri',
    jobTitle: 'Psicóloga',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vitória',
      addressRegion: 'ES',
      addressCountry: 'BR',
    },
  },
  description:
    'Avaliação psicológica para TDAH, autismo, burnout e questões do neurodesenvolvimento. Laudos com base no DSM-5.',
}

const processItems = [
  {
    index: '01',
    title: 'Testes psicológicos validados',
    desc: 'Instrumentos padronizados e reconhecidos pela literatura científica, aplicados conforme protocolo.',
  },
  {
    index: '02',
    title: 'Ferramentas de rastreio',
    desc: 'Estruturas que auxiliam no levantamento e refinamento de hipóteses clínicas ao longo do processo.',
  },
  {
    index: '03',
    title: 'Entrevistas clínicas estruturadas',
    desc: 'Conversas conduzidas com critério, direção e escuta ativa para mapear o histórico da pessoa.',
  },
  {
    index: '04',
    title: 'Assessments com informantes',
    desc: 'Quando indicado, ouvir pessoas próximas contribui para um olhar mais completo do histórico.',
  },
]

export default function AvaliacaoPsicologica() {
  useEffect(() => {
    document.title = 'Avaliação Psicológica | Camila Cavaleri Psicóloga | Vitória, ES'

    const setMeta = (name, content, prop) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', 'Avaliação psicológica para TDAH, autismo, burnout e questões do neurodesenvolvimento em Vitória, ES. Laudos elaborados com base nos critérios do DSM-5. Online e presencial.')
    setMeta('keywords', 'avaliação psicológica Vitória ES, laudo psicológico TDAH, avaliação autismo adulto, psicóloga avaliação neurodesenvolvimento, laudo burnout, avaliação psicológica Espírito Santo')
    setMeta('og:title', 'Avaliação Psicológica | Camila Cavaleri', null, true)
    setMeta('og:description', 'Avaliação psicológica criteriosa para TDAH, autismo e neurodesenvolvimento. Vitória, ES.', null, true)
    setMeta('og:type', 'website', null, true)
    setMeta('og:url', 'https://camilacavaleri.com/servicos/avaliacao-psicologica', null, true)

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-avaliacao'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)

    return () => {
      document.title = 'Camila Cavaleri'
      document.getElementById('schema-avaliacao')?.remove()
    }
  }, [])

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.avalHeroGrid}>
          <div className={styles.heroLeft}>
            <nav className={styles.breadcrumb} aria-label="Navegação estrutural">
              <Link to="/servicos">Serviços</Link>
              <span aria-hidden="true">›</span>
              <span>Avaliação Psicológica</span>
            </nav>

            <h1 className={styles.avalH1}>
              Avaliação<br />
              <em>Psicológica</em>
            </h1>

            <p className={styles.heroLead}>
              Processo avaliativo conduzido com rigor clínico, instrumentos validados e fundamentação nos critérios diagnósticos do DSM-5. Atendimento presencial e online em Vitória, ES.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/contato" className={styles.ctaPrimary}>
                Fale comigo
              </Link>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img
              src="/assets/CamilaPhoto2.webp"
              alt="Camila Cavaleri em retrato profissional"
              className={styles.avalHeroPhoto}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PARA QUEM E */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>INDICAÇÕES</p>
          <h2 className={styles.sectionH2}>Para quem é</h2>

          <p className={styles.sectionIntro}>
            Pessoas que chegam à avaliação psicológica geralmente trazem uma hipótese, uma suspeita ou um encaminhamento. Em todos os casos, o objetivo é o mesmo: investigar com seriedade e chegar a respostas fundamentadas.
          </p>

          <ul className={styles.pills} aria-label="Principais queixas">
            {[
              'Suspeita de autismo',
              'Suspeita de TDAH',
              'Questões do neurodesenvolvimento',
              'Encaminhamento psiquiátrico',
              'Burnout',
              'Autoconhecimento clínico',
            ].map((pill) => (
              <li key={pill} className={styles.pill}>{pill}</li>
            ))}
          </ul>

          <p className={styles.sectionBody}>
            A avaliação não parte de conclusões antecipadas. É um processo investigativo que respeita a complexidade de cada caso e documenta apenas o que os critérios diagnósticos sustentam.
          </p>
        </div>
      </section>

      {/* PARA PROFISSIONAIS DE SAUDE */}
      <section className={styles.profSection}>
        <div className={styles.container}>
          <p className={styles.eyebrowLight}>PARA ENCAMINHADORES</p>
          <h2 className={styles.sectionH2Light}>Para profissionais de saúde</h2>

          <p className={styles.sectionBodyLight}>
            Realizo avaliações psicológicas com critério clínico e raciocínio diagnóstico estruturado, utilizando instrumentos reconhecidos pela literatura científica e embasados nos critérios do DSM-5 e CID-11.
          </p>

          <p className={styles.sectionBodyLight}>
            O processo inclui testes psicológicos validados, ferramentas de rastreio, entrevistas clínicas estruturadas e, quando indicado, assessments com informantes. O laudo final documenta o percurso investigativo de forma clara, fundamentada e adequada para embasar condutas terapêuticas ou psiquiátricas.
          </p>

          <p className={styles.sectionBodyLight}>
            Encaminhamentos podem ser feitos diretamente por contato.
          </p>

          <Link to="/contato" className={styles.ctaLight}>
            Fale comigo
          </Link>
        </div>
      </section>

      {/* O QUE ENVOLVE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>METODOLOGIA</p>
          <h2 className={styles.sectionH2}>O que a avaliação envolve</h2>

          <p className={styles.sectionIntro}>
            Cada processo é construído de acordo com as necessidades da pessoa.
            De forma geral, a avaliação é composta por:
          </p>

          <div className={styles.processGrid}>
            {processItems.map((item) => (
              <div key={item.title} className={styles.processCard}>
                <img src={IconGreen} alt="" className={styles.processCardIcon} aria-hidden="true" />
                <strong className={styles.processCardTitle}>{item.title}</strong>
                <p className={styles.processCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.sectionBodySpaced}>
            A avaliação psicológica acontece ao longo de 8 sessões, organizadas
            para investigar com profundidade as perguntas clínicas de cada caso.
          </p>
        </div>
      </section>

      {/* O QUE O LAUDO TRAZ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>RESULTADO</p>
          <h2 className={styles.sectionH2}>O que o laudo traz</h2>

          <p className={styles.sectionBody}>
            Ao final do processo, é elaborado um laudo criterioso, com devolutiva
            cuidadosa e humanizada.
          </p>

          <p className={styles.sectionBody}>
            Um laudo bem feito não é um rótulo. É um documento que ajuda a pessoa
            a se entender dentro de uma perspectiva clínica. Muitas vezes, é a
            resposta para anos de "algo não funciona do jeito que deveria."
          </p>

          <blockquote className={styles.blockquote}>
            O laudo segue os critérios diagnósticos estabelecidos pelo{' '}
            <strong>DSM-5</strong> (Manual Diagnóstico e Estatístico de Transtornos
            Mentais, 5ª edição), referência mundial para diagnóstico psicológico e
            psiquiátrico. Nenhuma conclusão diagnóstica é emitida sem que todos os
            critérios relevantes sejam investigados e documentados com rigor.
          </blockquote>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <p className={styles.eyebrowCta}>PRÓXIMO PASSO</p>
            <h2 className={styles.ctaTitle}>Pronto para encaminhar ou iniciar uma avaliação?</h2>
            <p className={styles.ctaDesc}>
              Entre em contato para entender como o processo funciona para o seu caso específico.
            </p>
            <Link to="/contato" className={styles.ctaPrimary}>
              Agendar uma conversa
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
