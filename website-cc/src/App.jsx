import Navbar from './assets/components/navbar/Navbar.jsx'
import Home from './sections/home/Home.jsx'
import About from './sections/about/About.jsx'
import Services from './sections/services/Services.jsx'
import Contact from './sections/contact/Contact.jsx'
import FAQ from './sections/faq/FAQ.jsx'   
import Footer from './sections/footer/Footer.jsx'
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
        <Contact />
        <FAQ /> 
        <Footer /> 
      </main>
      <Footer /> 
    </>
  )
}