// App.jsx — temporary: run without Home.jsx until the file exists
import Navbar from './assets/components/navbar/Navbar.jsx'
import Home from './sections/Home.jsx'
import './index.css'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h2>Camila Cavaleri</h2>
            <p>Psicóloga Breve</p>
          </div>
        </section>
      </main>
    </>
  )
}