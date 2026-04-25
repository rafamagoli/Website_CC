import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/AvaliacaoPsicologica.module.css'

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
    title: 'Testes psicológicos validados',
    desc: 'Instrumentos padronizados e reconhecidos pela literatura científica.',
  },
  {
    title: 'Ferramentas de rastreio',
    desc: 'Estruturas que auxiliam no levantamento de hipóteses clínicas.',
  },
  {
    title: 'Entrevistas clínicas estruturadas',
    desc: 'Conversas conduzidas com critério e direção.',
  },
  {
    title: 'Assessments com informantes',
    desc: 'Quando necessário, ouvir pessoas próximas contribui para um olhar mais completo.',
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
      {/* ─── HERO split layout ────────────────────────────────── */}
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
              Uma investigação clínica rigorosa, conduzida com qualidade e critério,
              para quem quer se entender melhor ou confirmar uma hipótese diagnóstica.
            </p>

            <div className={styles.heroCtas}>
              <a href="/contato" className={styles.ctaPrimary}>
                Entrar em contato
              </a>
              <a href="/contato" className={styles.ctaSecondary}>
                Indicado por médico? Fale comigo
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.avalSideCard}>
              <p className={styles.avalSideCardTitle}>
                Critério. Rigor.<br />Raciocínio clínico.
              </p>
              <div className={styles.avalSideCardAccent} aria-hidden="true" />
              <p className={styles.avalSideCardSub}>
                Avaliação baseada nos critérios do DSM-5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARA QUEM É ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionH2}>Para quem é</h2>

          <p className={styles.sectionIntro}>
            Algumas pessoas chegam com dúvidas. Outras chegam com suspeitas.
            Outras chegam encaminhadas por um psiquiatra. Todas chegam querendo respostas.
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
            Muitos chegam pensando "algo não encaixa" e a avaliação é o espaço
            para investigar isso com seriedade, sem pressa e sem rótulos apressados.
            A avaliação não é simplesmente receber um diagnóstico. É um caminho
            investigativo construído com você.
          </p>
        </div>
      </section>

      {/* ─── O QUE ENVOLVE: grid 2x2 ─────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionH2}>O que a avaliação envolve</h2>

          <p className={styles.sectionIntro}>
            Cada processo é construído de acordo com as necessidades da pessoa.
            De forma geral, a avaliação é composta por:
          </p>

          <div className={styles.processGrid}>
            {processItems.map((item) => (
              <div key={item.title} className={styles.processCard}>
                <strong className={styles.processCardTitle}>{item.title}</strong>
                <p className={styles.processCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.sectionBodySpaced}>
            O processo não tem um tempo fixo. A duração é definida pela
            complexidade do caso e pelas perguntas que precisam ser respondidas.
          </p>
        </div>
      </section>

      {/* ─── O QUE O LAUDO TRAZ ───────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
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

      {/* ─── PARA PROFISSIONAIS: full-bleed verde escuro ────────── */}
      <section className={styles.profSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionH2Light}>Para profissionais de saúde</h2>

          <p className={styles.sectionBodyLight}>
            Realizo avaliações psicológicas com critério, rigor clínico e
            raciocínio diagnóstico embasado nos critérios do DSM-5.
          </p>

          <p className={styles.sectionBodyLight}>
            Cada avaliação é conduzida com instrumentos reconhecidos, entrevistas
            estruturadas e, quando indicado, assessments com informantes. O laudo
            final documenta o processo investigativo de forma clara e fundamentada,
            servindo como base para condutas terapêuticas ou psiquiátricas.
          </p>

          <p className={styles.sectionBodyLight}>
            Encaminhamentos podem ser feitos diretamente por contato.
          </p>

          <a href="/contato" className={styles.ctaLight}>
            Encaminhar paciente
          </a>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Tem dúvidas sobre o processo?</h2>
            <p className={styles.ctaDesc}>
              Antes de qualquer compromisso, podemos conversar sobre o que faz
              sentido para o seu caso.
            </p>
            <a href="/contato" className={styles.ctaPrimary}>
              Agendar uma conversa
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
