import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './assets/components/navbar/Navbar.jsx'
import Home from './sections/home/Home.jsx'
import Footer from './sections/footer/Footer.jsx'
import ScrollToTop from './utils/ScrollToTop.jsx'
import './index.css'
import './App.css'

const Interview = lazy(() => import('./sections/interview/Interview.jsx'))
const FAQ = lazy(() => import('./sections/faq/FAQ.jsx'))
const Sobre = lazy(() => import('./pages/Sobre.jsx'))
const Servicos = lazy(() => import('./pages/Servicos.jsx'))
const PsicologiaBreve = lazy(() => import('./pages/PsicologiaBreve.jsx'))
const AvaliacaoPsicologica = lazy(() => import('./pages/AvaliacaoPsicologica.jsx'))
const Contato = lazy(() => import('./pages/Contato.jsx'))

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Interview />
      <FAQ />
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/psicologia-breve" element={<PsicologiaBreve />} />
            <Route path="/servicos/avaliacao-psicologica" element={<AvaliacaoPsicologica />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
