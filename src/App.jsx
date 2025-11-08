import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'


export default function App(){
  return (
    <div className="min-h-screen text-slate-100 bg-[#0b0f1a]">
    {/* soft glow background */}

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_70%_-10%,rgba(56,189,248,0.14),transparent),radial-gradient(40rem_40rem_at_0%_120%,rgba(59,130,246,0.12),transparent)]" />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}