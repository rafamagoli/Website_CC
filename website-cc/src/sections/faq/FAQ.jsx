import { useState } from 'react'
import styles from './FAQ.module.css'

const questions = [
  {
    q: 'O que é Psicologia Breve?',
    a: 'A Psicologia Breve é uma abordagem focada e com começo-meio-fim. Olha para o que te incomoda hoje, dentro do seu contexto de vida, relações e ciclos. É um processo direcionado, com objetivos claros e resultados práticos.'
  },
  {
    q: 'Como funciona a primeira conversa?',
    a: 'É um encontro acolhedor para entender o que está te incomodando hoje, mapear objetivos e alinhar expectativas. Ao final, combinamos um plano de cuidado com frequência e foco.'
  },
  {
    q: 'Qual a frequência dos atendimentos?',
    a: 'Na maioria dos casos, semanal. Em algumas fases pode ser quinzenal, de acordo com objetivos e disponibilidade. Decidimos juntas(o) o que faz mais sentido.'
  },
  {
    q: 'Atende online ou presencial?',
    a: 'Atendimento online por vídeo chamada. Assim, posso cuidar de você onde quer que esteja, com mais flexibilidade e conforto.'
  },
  {
    q: 'Como saber se a Psicologia Breve é para mim?',
    a: 'Se você busca clareza para um tema específico e deseja um processo estruturado, com direção e metas realistas, a Psicologia Breve é um bom caminho.'
  },
  {
    q: 'O que posso esperar entre as sessões?',
    a: 'Convites de reflexão e pequenas práticas de autocuidado que ajudam a levar o que acontece no consultório para a vida. Sem cobranças excessivas: consciência e gentileza com o seu tempo.'
  },
  {
    q: 'Como são definidos objetivos e resultados?',
    a: 'Juntas(os), traduzimos o que te incomoda hoje em objetivos claros e alcançáveis. Ao longo do processo, revisitamos esses objetivos para acompanhar o que já ganhou leveza e o que ainda precisa de cuidado.'
  },
  {
    q: 'Sigilo e ética são garantidos?',
    a: 'Sim. O atendimento segue as diretrizes do Conselho Regional de Psicologia e o compromisso de confidencialidade. CRP 16/11890.'
  },
  {
    q: 'E se eu precisar de um acompanhamento mais longo?',
    a: 'Quando necessário, podemos estender o cuidado, manter pausas estratégicas ou encaminhar para outros recursos. O importante é que o plano continue fazendo sentido para você naquele momento.'
  },
  {
    q: 'Política de cancelamento e remarcação',
    a: 'Para reorganizarmos agendas e mantermos o cuidado com todas as pessoas atendidas, pedimos aviso com 24 horas de antecedência para cancelamentos e remarcações.'
  },
  {
    q: 'Como agendar?',
    a: 'Clique em “Agende sua primeira conversa” e me envie uma mensagem. Vou te retornar com as próximas disponibilidades e os passos simples para começarmos.'
  }
]

export default function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.subtitle}>
            Dúvidas mais comuns sobre Psicologia Breve e meus atendimentos 💡
          </p>
        </header>

        <ul className={styles.list}>
          {questions.map((item, idx) => (
            <li key={idx} className={`${styles.item} ${active === idx ? styles.active : ''}`}>
              <button
                className={styles.question}
                onClick={() => setActive(active === idx ? null : idx)}
              >
                <span>{item.q}</span>
                <span className={styles.symbol}>{active === idx ? '−' : '+'}</span>
              </button>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}