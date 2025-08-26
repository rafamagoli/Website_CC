import Navbar from '../src/assets/components/navbar/Navbar.jsx'
import Home from './sections/home/Home.jsx'
import './index.css'
import './App.css'
import About from './sections/about/About.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  )
}