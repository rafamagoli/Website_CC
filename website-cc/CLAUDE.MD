# Guideline de Alterações — Site Camila Cavaleri
**Stack:** React + CSS Modules · **Hospedagem:** Vercel + Hostinger  
**Versão:** Abril 2026 · Desenvolvido por Lyra Digital Studio

---

## 1. Princípios gerais

- Em nenhum lugar do código usar `—` (em dash). Usar vírgula, ponto ou reescrita de frase.
- Todo texto novo deve ter SEO semântico aplicado (ver seção 5).
- Mobile-first em tudo que for novo. Breakpoints já existentes no projeto devem ser respeitados.

---

## 2. Tipografia: substituição das imagens PNG

### Problema atual
O nome "Camila Cavaleri" é renderizado via dois arquivos de imagem:
- `/assets/CAMILA.png`
- `/assets/CAVALERI.png`

Isso causa: sem indexação no Google, sem responsividade real, impossível de manter.

### Solução
Substituir TODAS AS utilizações dessas imagens por tipografia CSS usando a fonte **HarmonyEmbraceSerifDemo**.

**Setup da fonte:**
```css
@font-face {
  font-family: 'HarmonyEmbrace';
  src: url('/assets/fonts/HarmonyEmbraceSerifDemo.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}
```

**Aplicação no componente Home.jsx:**
Remover os dois `<img>` com `CAMILA.png` e `CAVALERI.png` e substituir por:
```jsx
<div className={styles.logoRow}>
  <span className={styles.logoText}>Camila</span>
  <div className={styles.logoRight}>
    <span className={styles.logoText}>Cavaleri</span>
    <motion.img
      src="/assets/ICONRED.png"
      alt=""
      className={styles.icon}
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    />
  </div>
</div>
```

**CSS para `.logoText`:**
```css
.logoText {
  font-family: 'HarmonyEmbrace', Georgia, serif;
  font-size: clamp(52px, 9vw, 110px);
  color: var(--color-primary-1); /* verde já usado no projeto */
  line-height: 1;
  font-weight: 400;
  display: block;
}
```

Remover `.logoPart` do CSS Module. Manter `.logoRow`, `.logoRight` e `.icon`.

---

## 3. Ajustes gerais de layout (Home existente)

### 3.1 Margens e container
O container hero atualmente tem `max-width: 900px`. Avaliar aumentar para `960px` para respirar melhor em telas largas.

Padding horizontal do `.heroTop` deve seguir:
```css
padding-left: clamp(20px, 5vw, 60px);
padding-right: clamp(20px, 5vw, 60px);
```

### 3.2 Headline
Trocar o copy atual de:
> "Psicologia Breve: clareza e transformação no tempo certo"

Para:
> "Psicóloga clínica e avaliadora psicológica"

Remover o `<mark>` de destaque em amarelo nessa linha, já que o novo título não tem essa estrutura de ênfase.

### 3.3 Subtitle
Trocar:
> "Um espaço seguro, focado e com direção para lidar com o que hoje te incomoda."

Para:
> "Um espaço seguro para lidar com o que hoje te incomoda e entender quem você realmente é."

### 3.4 CTAs da hero
- Botão primário: manter "Agende sua primeira conversa"
- Botão ghost: trocar `href="#services"` para `href="/servicos"` e texto "Conhecer os serviços"

### 3.5 Seção "Sobre"
Tornar a descrição abrangente: cobrir tanto a atuação clínica quanto a avaliação psicológica. Não é necessário detalhar serviços nessa seção, apenas apresentar que Camila atua nas duas frentes. Já existente mas agora precisa abranger também a avaliação clínica e retirar o foco APENAS da psicologia breve.

---

## 4. Nova estrutura de navegação

### Navbar atual
A navbar hoje provavelmente tem links de âncora (`#sobre`, `#servicos`, `#contato`).

### Navbar nova
```
Início  |  Sobre  |  Serviços  |  Contato        [Agendar conversa]
```

- "Início" aponta para `/` (ou âncora `#home`)
- "Sobre" aponta para âncora `#sobre`
- "Serviços" aponta para `/servicos` (nova página)
- "Contato" aponta para âncora `#contato`
- CTA "Agendar conversa" mantém comportamento atual

**Ativo:** a nav-link deve receber classe `active` conforme rota atual (usar `useLocation` do React Router ou lógica equivalente).

---

## 5. Nova página: /servicos

### Rota
```
/servicos
```

### Estrutura da página
```
[Navbar]
[Header da seção: "Como posso te ajudar"]
[Grid de 2 cards]
[Footer]
```

### Header
```jsx
<section className={styles.servicesHeader}>
  <p className={styles.eyebrow}>Serviços</p>
  <h1 className={styles.sectionTitle}>Como posso te ajudar</h1>
  <p className={styles.sectionDesc}>
    Atuo em dois caminhos, cada um com sua abordagem, ritmo e propósito.
  </p>
</section>
```

### Cards
Grid de 2 colunas em desktop, 1 coluna em mobile (abaixo de 640px).

**Card 1: Psicologia Breve**
- Tag: "Psicologia Clínica"
- Título: "Psicologia Breve"
- Descrição: "Atendimento focado e com direção. Para quem quer lidar com o que hoje incomoda, com clareza e movimento real."
- Link: "Ver detalhes" aponta para `/servicos/psicologia-breve`
- Acento visual: verde (mesma paleta primária do site)

**Card 2: Avaliação Psicológica**
- Tag: "Avaliação Psicológica"
- Título: "Avaliação Psicológica"
- Descrição: "Um percurso investigativo rigoroso para entender questões do neurodesenvolvimento, com testes validados e critérios diagnósticos."
- Link: "Ver detalhes" aponta para `/servicos/avaliacao-psicologica`
- Acento visual: âmbar sutil (diferenciação visual do card verde)

### CSS do grid
```css
.servicesGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 40px 60px;
  max-width: 860px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .servicesGrid {
    grid-template-columns: 1fr;
    padding: 0 20px 48px;
  }
}
```

---

## 6. Nova página: /servicos/avaliacao-psicologica

### Rota
```
/servicos/avaliacao-psicologica
```

### SEO (CRÍTICO)
Essa página precisa aparecer no Google para buscas como:
- "avaliação psicológica autismo Vitória ES"
- "laudo psicológico TDAH Vitória"
- "avaliação neuropsicológica Espírito Santo"
- "psicóloga avaliação burnout"
- "laudo para autismo adulto"
- "avaliação psicológica neurodesenvolvimento"

**Meta tags obrigatórias (via React Helmet ou equivalente):**
```jsx
<title>Avaliação Psicológica | Camila Cavaleri Psicóloga | Vitória, ES</title>
<meta
  name="description"
  content="Avaliação psicológica para TDAH, autismo, burnout e questões do neurodesenvolvimento em Vitória, ES. Laudos elaborados com base nos critérios do DSM-5. Online e presencial."
/>
<meta name="keywords" content="avaliação psicológica Vitória ES, laudo psicológico TDAH, avaliação autismo adulto, psicóloga avaliação neurodesenvolvimento, laudo burnout, avaliação psicológica Espírito Santo" />
```

**Uso semântico de headings na página:**
- `<h1>`: "Avaliação Psicológica" (uma vez, no topo)
- `<h2>`: Títulos de cada seção (Para quem é, Como funciona, Para profissionais)
- `<h3>`: Subtítulos dentro de seções, se necessário

### Estrutura da página

#### 6.1 Hero da página
```
[Breadcrumb: Serviços > Avaliação Psicológica]
[H1: Avaliação Psicológica]
[Lead: copy abaixo]
[Dois botões CTA]
```

**Copy do lead:**
> Uma investigação clínica rigorosa, conduzida com qualidade e critério, para quem quer se entender melhor ou confirmar uma hipótese diagnóstica.

**CTAs:**
- Primário: "Entrar em contato"
- Secundário: "Indicado por médico? Fale comigo"

#### 6.2 Seção: Para quem é

**H2:** "Para quem é"

**Texto introdutório:**
> Algumas pessoas chegam com dúvidas. Outras chegam com suspeitas. Outras chegam encaminhadas por um psiquiatra. Todas chegam querendo respostas.

**Pills de queixas (tags visuais):**
- Suspeita de autismo
- Suspeita de TDAH
- Questões do neurodesenvolvimento
- Encaminhamento psiquiátrico
- Burnout
- Autoconhecimento clínico

**Texto de apoio:**
> Muitos chegam pensando "algo não encaixa" e a avaliação é o espaço para investigar isso com seriedade, sem pressa e sem rótulos apressados. A avaliação não é simplesmente receber um diagnóstico. É um caminho investigativo construído com você.

#### 6.3 Seção: O que a avaliação envolve

**H2:** "O que a avaliação envolve"

**Texto introdutório:**
> Cada processo é construído de acordo com as necessidades da pessoa. De forma geral, a avaliação é composta por:

**Lista de elementos (sem números, sem ordem fixa visualmente):**
- **Testes psicológicos validados** — instrumentos padronizados e reconhecidos pela literatura científica
- **Ferramentas de rastreio** — estruturas que auxiliam no levantamento de hipóteses clínicas
- **Entrevistas clínicas estruturadas** — conversas conduzidas com critério e direção
- **Assessments com informantes** — quando necessário, ouvir pessoas próximas contribui para um olhar mais completo do histórico

> O processo não tem um tempo fixo. A duração é definida pela complexidade do caso e pelas perguntas que precisam ser respondidas.

#### 6.4 Seção: O que o laudo traz

**H2:** "O que o laudo traz"

**Copy:**
> Ao final do processo, é elaborado um laudo criterioso, com devolutiva cuidadosa e humanizada.

> Um laudo bem feito não é um rótulo. É um documento que ajuda a pessoa a se entender dentro de uma perspectiva clínica. Muitas vezes, é a resposta para anos de "algo não funciona do jeito que deveria."

> O laudo segue os critérios diagnósticos estabelecidos pelo DSM-5 (Manual Diagnóstico e Estatístico de Transtornos Mentais, 5ª edição), referência mundial para diagnóstico psicológico e psiquiátrico. Nenhuma conclusão diagnóstica é emitida sem que todos os critérios relevantes sejam investigados e documentados com rigor.

#### 6.5 Seção: Para profissionais de saúde

**H2:** "Para profissionais de saúde"

**Copy (tom técnico, voltado para psiquiatras e outros encaminhadores):**
> Realizo avaliações psicológicas com critério, rigor clínico e raciocínio diagnóstico embasado nos critérios do DSM-5.

> Cada avaliação é conduzida com instrumentos reconhecidos, entrevistas estruturadas e, quando indicado, assessments com informantes. O laudo final documenta o processo investigativo de forma clara e fundamentada, servindo como base para condutas terapêuticas ou psiquiátricas.

> Encaminhamentos podem ser feitos diretamente por contato.

**CTA específico:** "Encaminhar paciente" (abre contato)

#### 6.6 CTA final

```
[Box de CTA]
Tem dúvidas sobre o processo?
Antes de qualquer compromisso, podemos conversar sobre o que faz sentido para o seu caso.
[Botão: Agendar uma conversa]
```

---

## 7. SEO estrutural — regras para toda página nova

### 7.1 Headings
Nunca pular níveis (h1 > h2 > h3). Cada página tem exatamente um `<h1>`.

### 7.2 Texto alternativo em imagens
Todos os `<img>` devem ter `alt` descritivo. Ícones decorativos: `alt=""`.

### 7.3 Schema markup recomendado (JSON-LD)
Adicionar na página `/servicos/avaliacao-psicologica`:
```json
{
  "@context": "https://schema.org",
  "@type": "PsychologicalTreatment",
  "name": "Avaliação Psicológica",
  "provider": {
    "@type": "Person",
    "name": "Camila Cavaleri",
    "jobTitle": "Psicóloga",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vitória",
      "addressRegion": "ES",
      "addressCountry": "BR"
    }
  },
  "description": "Avaliação psicológica para TDAH, autismo, burnout e questões do neurodesenvolvimento. Laudos com base no DSM-5."
}
```

### 7.4 URLs semânticas
```
/servicos                            (página de serviços)
/servicos/avaliacao-psicologica      (página de avaliação)
/servicos/psicologia-breve           (futura página de clínica)
```

### 7.5 Open Graph (para compartilhamento nas redes)
```jsx
<meta property="og:title" content="Avaliação Psicológica | Camila Cavaleri" />
<meta property="og:description" content="Avaliação psicológica criteriosa para TDAH, autismo e neurodesenvolvimento. Vitória, ES." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://camilacavaleri.com/servicos/avaliacao-psicologica" />
```

---

## 8. Responsividade mobile

Todas as páginas novas seguem mobile-first. Regras:

| Elemento | Desktop | Mobile (< 640px) |
|---|---|---|
| Grid de cards | 2 colunas | 1 coluna |
| Padding lateral | 40px | 20px |
| Fonte do H1 | 40px | clamp(28px, 7vw, 36px) |
| Fonte do lead | 17px | 16px |
| Pills | flex-wrap | flex-wrap (igual) |
| CTAs | lado a lado | empilhados, 100% largura |
| Navbar | links visíveis | hamburger (manter comportamento atual) |

---

## 9. Arquivos a criar / modificar

| Arquivo | Ação |
|---|---|
| `src/pages/Home.jsx` | Modificar: substituir img PNGs por span com fonte, ajustar headline, subtitle e CTA ghost |
| `src/styles/Home.module.css` | Modificar: remover `.logoPart`, adicionar `.logoText` |
| `src/components/Navbar.jsx` | Modificar: adicionar link "Serviços" apontando para `/servicos` |
| `src/pages/Servicos.jsx` | Criar: página de serviços com grid de cards |
| `src/pages/AvaliacaoPsicologica.jsx` | Criar: página de avaliação com todo o copy e SEO |
| `src/styles/Servicos.module.css` | Criar: estilos da página de serviços |
| `src/styles/AvaliacaoPsicologica.module.css` | Criar: estilos da página de avaliação |
| `public/assets/fonts/HarmonyEmbraceSerifDemo.ttf` | Adicionar: fonte no diretório de assets |
| `src/App.jsx` (ou router) | Modificar: adicionar rotas `/servicos` e `/servicos/avaliacao-psicologica` |

---

## 10. O que NÃO alterar

- Paleta de cores existente (verde primário, âmbar dos CTAs)
- Efeito de ícones flutuantes no mouse (floatingIcon)
- Ícone animado (ICONRED.png com rotação)
- Animações de entrada com Framer Motion
- Seções existentes de Sobre e Contato
- Comportamento do botão "Agende sua primeira conversa"
- Qualquer CSS de breakpoint existente no projeto (apenas adicionar, nunca sobrescrever)
