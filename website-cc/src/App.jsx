import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './assets/components/navbar/Navbar.jsx'
import Home from './sections/home/Home.jsx'
import About from './sections/about/About.jsx'
import Sobre from './pages/Sobre.jsx'
import Footer from './sections/footer/Footer.jsx'
import ScrollToTop from './utils/ScrollToTop.jsx'
import './index.css'
import './App.css'

const Interview = lazy(() => import('./sections/interview/Interview.jsx'))
const Servicos = lazy(() => import('./pages/Servicos.jsx'))
const PsicologiaBreve = lazy(() => import('./pages/PsicologiaBreve.jsx'))
const AvaliacaoPsicologica = lazy(() => import('./pages/AvaliacaoPsicologica.jsx'))
const Contato = lazy(() => import('./pages/Contato.jsx'))

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Home />
      <About />
      <Interview />
    </Suspense>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/psicologia-breve" element={<PsicologiaBreve />} />
        <Route path="/servicos/avaliacao-psicologica" element={<AvaliacaoPsicologica />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
