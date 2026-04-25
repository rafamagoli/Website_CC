# Guideline Fase 2 — Correções Visuais e Redesign
**Site:** Camila Cavaleri · **Stack:** React + CSS Modules · **Vercel**
**Referências visuais:** julesstudio.co · theangrytherapist.com · kindly-2e8okmvk.peachworlds.com

---

## PROBLEMA 1 — Wrapper com borda que não alcança as extremidades do viewport

### O que está errado
Em todo o site, seções com fundo colorido (verde escuro, âmbar, etc.) não ocupam 100% da largura do viewport. Elas aparecem com uma margem/padding lateral indesejada, deixando os cantos verticais expostos em desktop e mobile. O resultado parece incompleto e "barato".

### Referência correta
**julesstudio.co** — observe como cada seção ocupa 100% da largura da tela. Quando há um card/wrapper interno com borda arredondada, ele tem margem lateral consistente (aprox. `16px` a `24px` em mobile, `32px` a `40px` em desktop), com `border-radius` generoso (aprox. `20px` a `24px`) e a borda é parte do design, não um acidente.

### Como corrigir

**Regra global:** qualquer elemento que use `background-color` diferente do fundo da página deve ser uma das duas situações:

**Situação A — Section full-bleed (mais comum):**
A section ocupa 100% do viewport. O conteúdo interno tem `max-width` e `margin: 0 auto`. A section nunca tem `margin` lateral.
```css
.sectionVerde {
  width: 100%;
  background-color: var(--color-dark-green); /* ou a cor que for */
  padding: 80px 0;
}

.sectionVerde .container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 640px) {
  .sectionVerde .container {
    padding: 0 20px;
  }
}
```

**Situação B — Card wrapper com borda arredondada (estilo Jules Studio):**
O card tem margem lateral explícita e `border-radius` generoso. Nunca fica "colado" nas extremidades mas também nunca fica com margem pequena demais.
```css
.cardWrapper {
  margin: 0 32px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--color-dark-green);
}

@media (max-width: 640px) {
  .cardWrapper {
    margin: 0 16px;
    border-radius: 16px;
  }
}
```

### O que fazer na prática
1. Identificar todos os componentes/sections do site que têm background diferente do fundo da página.
2. Para cada um: verificar se é full-bleed (Situação A) ou card wrapper (Situação B).
3. Se for full-bleed: remover qualquer `margin` lateral da section, garantir `width: 100%`.
4. Se for card wrapper: aplicar `margin: 0 32px` em desktop e `margin: 0 16px` em mobile com `border-radius: 20px`.
5. Nunca misturar: uma section não pode ser full-bleed em desktop e card wrapper em mobile sem decisão explícita de design.

---

## PROBLEMA 2 — Navbar mobile outdated

### O que está errado
A navbar mobile atual usa um hamburguer simples que abre um menu sem personalidade visual. É genérico, sem animação elegante, sem hierarquia clara, sem o estilo do site.

### Referência correta
**julesstudio.co mobile menu** — overlay fullscreen com fundo de cor, links grandes em tipografia serif/display, CTA destacado, transição suave de entrada. O menu vira uma experiência de marca, não só uma lista de links.

### Como implementar

**Estrutura do novo menu mobile:**

O menu mobile deve:
- Ser um overlay que cobre 100% da tela (`position: fixed; inset: 0`)
- Ter o mesmo fundo da marca (exemplo: `#f9f5ef` ou o creme do site)
- Links grandes, em tipografia serif, com `font-size: clamp(32px, 8vw, 48px)`
- CTA "Agendar conversa" em botão com a cor âmbar, no final da lista
- Animação de entrada: `transform: translateY(-100%)` para `translateY(0)` com `transition: 0.4s ease`
- Botão de fechar (X) no canto superior direito, mesmo posição do hamburguer

```jsx
// MobileMenu.jsx — estrutura sugerida
{menuOpen && (
  <div className={styles.mobileOverlay}>
    <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
      ✕
    </button>
    <nav className={styles.mobileNav}>
      <a href="/" className={styles.mobileLink}>Início</a>
      <a href="/sobre" className={styles.mobileLink}>Sobre</a>
      <a href="/servicos" className={styles.mobileLink}>Serviços</a>
      <a href="/contato" className={styles.mobileLink}>Contato</a>
    </nav>
    <a href="#contato" className={styles.mobileCta}>Agendar conversa</a>
  </div>
)}
```

```css
.mobileOverlay {
  position: fixed;
  inset: 0;
  background: #f9f5ef; /* fundo creme do site */
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 32px;
  animation: slideDown 0.35s ease forwards;
}

@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
}

.mobileNav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.mobileLink {
  font-family: var(--font-primary); /* a serif do site */
  font-size: clamp(36px, 9vw, 52px);
  color: var(--color-primary-1); /* verde */
  text-decoration: none;
  line-height: 1.1;
  transition: opacity 0.2s;
}

.mobileLink:hover { opacity: 0.65; }

.mobileCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  background: var(--color-primary-2); /* âmbar */
  color: #1a1a0e;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  font-family: var(--font-secondary);
  width: 100%;
}

.closeBtn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-primary-1);
  cursor: pointer;
}
```

---

## PROBLEMA 3 — Página de Serviços e página de Avaliação sem impacto visual

### O que está errado
As páginas novas ficaram funcionais mas "sem sal": sem tipografia com impacto, sem hierarquia visual forte, sem elementos que criam desejo e curiosidade. A página de avaliação em especial precisa impressionar dois públicos muito diferentes (pacientes e médicos).

### Referências de impacto visual

**theangrytherapist.com:**
- Tipografia display enorme, quase agressiva no bom sentido
- Contraste forte entre peso de fonte leve e bold
- Espaço em branco generoso que dá respiro e faz o conteúdo "respirar"
- Elementos que "quebram a grade" (textos que cruzam colunas, imagens que sangram)

**kindly-2e8okmvk.peachworlds.com (Anima):**
- Hero com headline em itálico serif como declaração emocional
- Transição suave entre seções com fundo diferente
- Cards de serviço com ícones significativos, não decorativos
- Copy curto por bloco, muita respiração entre elementos

### Correções específicas

#### 3.1 Página /servicos — Hero com impacto

Substituir o header simples por uma hero com peso visual. A headline deve ser grande e assertiva.

```
[Eyebrow pequeno: SERVIÇOS]

[H1 grande, serif, 2 linhas:]
"Como posso
te ajudar"

[Linha decorativa fina em âmbar: 60px wide, 2px height]

[Subtítulo pequeno, muted:]
"Atuo em dois caminhos distintos."
```

CSS para o H1 da página de serviços:
```css
.pageTitle {
  font-family: var(--font-primary); /* serif */
  font-size: clamp(48px, 7vw, 80px);
  line-height: 1.0;
  color: var(--color-primary-1);
  font-weight: 400; /* deixar a tipografia fazer o trabalho */
  margin-bottom: 20px;
}

/* Palavra em itálico dentro do título — efeito theangrytherapist */
.pageTitle em {
  font-style: italic;
  color: var(--color-primary-2); /* âmbar */
}
```

Reescrever o H1 como: `Como posso te <em>ajudar</em>` para criar contraste visual.

#### 3.2 Cards de serviço — redesign completo

Os cards atuais parecem tabela. Precisam virar algo que dá vontade de clicar.

**Novo layout dos cards:**
- Fundo diferenciado: card de Clínica com fundo verde escuro (`var(--color-dark-green)`), texto claro. Card de Avaliação com fundo creme/âmbar muito suave, texto escuro.
- Nenhum dos dois tem borda fina de 0.5px. São sólidos.
- Número grande decorativo no canto (`01`, `02`) em tipografia display, opacidade 8%, funciona como elemento de design
- Título do card em `font-size: clamp(28px, 4vw, 40px)`, serif
- Link "Ver detalhes" com seta que se move no hover (`transform: translateX(4px)`)
- Height mínima: `360px` em desktop para dar substância visual

```css
.serviceCard {
  border-radius: 20px;
  padding: 48px 40px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.serviceCard:hover {
  transform: translateY(-4px);
}

.serviceCardDark {
  background: var(--color-primary-1); /* verde escuro */
  color: #f9f5ef;
}

.serviceCardLight {
  background: #f0e8d8; /* âmbar muito claro */
  color: var(--color-primary-1);
}

.cardNumber {
  position: absolute;
  top: 24px;
  right: 32px;
  font-family: var(--font-primary);
  font-size: 100px;
  line-height: 1;
  opacity: 0.07;
  font-weight: 700;
  color: inherit;
  pointer-events: none;
  user-select: none;
}

.cardTitle {
  font-family: var(--font-primary);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 16px;
}

.cardArrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-secondary);
  font-size: 14px;
  font-weight: 600;
  transition: gap 0.2s ease;
}

.serviceCard:hover .cardArrow {
  gap: 14px;
}
```

#### 3.3 Página /servicos/avaliacao-psicologica — redesign completo

A página atual está estruturalmente correta mas visualmente apagada. Precisa de:

**Hero da página de avaliação:**

Remover o layout simples e aplicar um split layout:
- Coluna esquerda (60%): headline grande + lead + CTAs
- Coluna direita (40%): bloco decorativo com citação técnica em destaque ou elemento visual da paleta

```
[Breadcrumb]

[Grid: 60% / 40%]

COLUNA ESQUERDA:
  [H1 enorme, serif, 2 linhas:]
  "Avaliação
  Psicológica"

  [Lead:]
  "Uma investigação clínica rigorosa,
  conduzida com qualidade e critério."

  [CTAs]

COLUNA DIREITA:
  [Card verde escuro:]
  "Critério. Rigor.
  Raciocínio clínico."
  [linha fina âmbar]
  "Avaliação baseada nos critérios
  do DSM-5"
```

CSS:
```css
.avalHeroGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 60px 40px 80px;
  max-width: 1080px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .avalHeroGrid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px 60px;
  }
}

.avalH1 {
  font-family: var(--font-primary);
  font-size: clamp(48px, 7vw, 76px);
  line-height: 1.0;
  color: var(--color-primary-1);
  font-weight: 400;
  margin-bottom: 24px;
}

.avalH1 em {
  font-style: italic;
}

.avalSideCard {
  background: var(--color-primary-1);
  color: #f9f5ef;
  border-radius: 20px;
  padding: 40px 36px;
}

.avalSideCardTitle {
  font-family: var(--font-primary);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 12px;
}

.avalSideCardAccent {
  width: 48px;
  height: 2px;
  background: var(--color-primary-2); /* âmbar */
  margin-bottom: 16px;
}

.avalSideCardSub {
  font-family: var(--font-secondary);
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.75;
}
```

**Seções internas — tipografia com impacto:**

Cada H2 das seções internas precisa de peso visual. Não pode ser o mesmo tamanho do corpo.

```css
.sectionH2 {
  font-family: var(--font-primary);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 400;
  color: var(--color-primary-1);
  line-height: 1.1;
  margin-bottom: 24px;
}

/* Para as seções com fundo escuro (verde), inverter */
.sectionDark .sectionH2 {
  color: #f9f5ef;
}
```

**Seção "O que envolve" — mudar de lista para grid de cards com ícone:**

Ao invés de lista com bullets ou steps simples, usar um grid 2x2 em desktop com cards pequenos:

```
[Grid 2x2]
[Testes psicológicos]    [Ferramentas de rastreio]
[Entrevistas clínicas]   [Assessments com informantes]
```

Cada card: fundo branco, borda sutil, ícone minimalista (pode ser SVG simples inline), título em serif, descrição pequena.

**Seção "Para profissionais" — destacar visualmente como seção separada:**

Essa seção deve ter fundo diferente do resto da página (usar o verde escuro do site) para sinalizar que é um conteúdo de outra audiência. Isso é tanto um gatilho visual quanto um recurso de usabilidade para os médicos que chegam via link direto.

```css
.profSection {
  background: var(--color-primary-1); /* verde escuro */
  color: #f9f5ef;
  padding: 80px 0;
  width: 100%;
}
```

**CTA final — não pode ser discreto:**

O botão final precisa de peso. Fundo âmbar, padding generoso, tipografia bold.

---

## PROBLEMA 4 — Espaçamento vertical insuficiente em todo o site

### O que está errado
O site tem pouco espaço entre seções. Sites de referência como Anima e Jules Studio usam espaçamento vertical generoso que cria ritmo e respiro.

### Regra global a aplicar

Adicionar a um arquivo global (ex: `globals.css` ou equivalente):

```css
:root {
  --section-gap: 120px;
  --section-gap-mobile: 72px;
}

.section {
  padding-top: var(--section-gap);
  padding-bottom: var(--section-gap);
}

@media (max-width: 640px) {
  .section {
    padding-top: var(--section-gap-mobile);
    padding-bottom: var(--section-gap-mobile);
  }
}
```

Aplicar essa variável em todas as seções novas. Rever as seções existentes para usar o mesmo padrão.

---

## Resumo de prioridade de execução

| Prioridade | Tarefa |
|---|---|
| 1 | Corrigir wrapper/borda em todo o site (Problema 1) |
| 2 | Redesign navbar mobile com overlay fullscreen (Problema 2) |
| 3 | Redesign hero e cards da página /servicos (Problema 3.1 e 3.2) |
| 4 | Redesign completo da página /servicos/avaliacao-psicologica (Problema 3.3) |
| 5 | Aplicar espaçamento vertical global (Problema 4) |

---

## Checklist de QA após implementação

- [ ] Verde (ou qualquer cor de seção) alcança 100% do viewport sem margens laterais acidentais
- [ ] Se houver card wrapper com borda arredondada, tem `margin: 0 32px` desktop e `0 16px` mobile com `border-radius: 20px`
- [ ] Menu mobile abre como overlay fullscreen com links grandes e CTA âmbar
- [ ] Página /servicos tem H1 com `font-size` mínimo de 48px e cards com `min-height: 360px`
- [ ] Página /avaliacao-psicologica tem split layout na hero em desktop
- [ ] Seção "Para profissionais" tem fundo verde escuro distinto
- [ ] Espaçamento entre seções de no mínimo 80px em mobile e 120px em desktop
- [ ] Todos os hovers nos cards e links têm `transition` suave (0.2s a 0.3s ease)
- [ ] Nenhum `—` (em dash) em nenhum texto do site
- [ ] Tudo responsivo e testado em 375px (iPhone SE), 390px (iPhone 14) e 768px (iPad)