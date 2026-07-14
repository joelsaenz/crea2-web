import { Routes, Route } from 'react-router-dom'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingSocial from './components/FloatingSocial'
import CategoryPage from './pages/CategoryPage'

function HomePage() {
  return (
    <>
      <SEO
        title="Publicidad, Impresión y Branding"
        description="CREA2 — Soluciones integrales de publicidad, impresión digital, vinilos, lonas, rótulos, branding y desarrollo web en El Salvador."
      />
      <FloatingSocial />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categoria/:category" element={<CategoryPage />} />
    </Routes>
  )
}

export default App
