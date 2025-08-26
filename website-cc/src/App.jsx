// App.jsx — main composition
import Navbar from './assets/components/navbar/Navbar.jsx'
import Home from './sections/home/Home.jsx'
import About from './sections/about/About.jsx'
import Services from './sections/services/Services.jsx'
import './index.css'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
      </main>
    </>
  )
}