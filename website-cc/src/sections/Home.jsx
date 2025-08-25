export default function Home() {
  return (
    <section id="home" className="section section--hero">
      <div className="container">
        <h1 className="hero__title">Build a clean, modern website</h1>
        <p className="hero__subtitle">
          Reusable components, semantic markup, and a professional Git workflow.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#about">Learn more</a>
          <a className="btn btn--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  )
}