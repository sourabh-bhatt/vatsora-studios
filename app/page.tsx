'use client'

import { useState, useEffect, useRef } from 'react'
import VatsoraLogo from './components/VatsoraLogo'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const cursorTrailRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for parallax and cursor trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Cursor trail effect
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }))
    setParticles(newParticles)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will get back to you soon.')
    setFormData({ name: '', email: '', portfolio: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
      {/* Custom Cursor Trail */}
      <div 
        ref={cursorTrailRef}
        className="cursor-trail pointer-events-none fixed w-8 h-8 rounded-full border-2 border-[#EEC643]/50 z-50 transition-transform duration-100 ease-out"
        style={{ left: '-16px', top: '-16px' }}
      />

      {/* Floating Particles */}
      <div className="particles-container fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-[#EEC643]/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-[#1A1F71]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-3">
              <VatsoraLogo className="w-10 h-10 md:w-14 md:h-14 animate-glow" />
              <span className="text-xl md:text-2xl font-bold gradient-text">VATSORA STUDIO</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#EEC643] transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-[#EEC643] transition-colors duration-300">About</a>
              <a href="#services" className="hover:text-[#EEC643] transition-colors duration-300">Services</a>
              <a href="#contact" className="hover:text-[#EEC643] transition-colors duration-300">Contact</a>
            </div>
            <a 
              href="#contact" 
              className="bg-[#EEC643] text-[#0D0D0D] px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-[#1A1F71] hover:text-white transition-all duration-300 text-sm md:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-[#1A1F71] rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse transition-transform duration-300"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-[#EEC643] rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-1000 transition-transform duration-300"
            style={{
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 py-12 md:py-0">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-[#1A1F71]/30 rounded-full border border-[#EEC643]/50">
              <span className="text-[#EEC643] text-xs md:text-sm font-semibold">✨ Launching the Future of Digital Expression</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-2">
              <span className="block text-white mb-2">Building the Future of</span>
              <span className="block gradient-text italic font-extrabold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Digital Expression
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Where Ideas Evolve into Impact. A next-generation creative and tech brand redefining innovation, design, and digital evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <a 
                href="#contact" 
                className="bg-[#EEC643] text-[#0D0D0D] px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300 animate-glow"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="border-2 border-[#1A1F71] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#1A1F71] transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            {['Creative Studio', 'AI-Driven', 'Tech Focused', 'Innovation First'].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#1A1F71]/50 to-transparent border border-[#EEC643]/30 rounded-xl p-3 md:p-6 hover:border-[#EEC643] transition-all duration-300 hover:scale-105 card-tilt cursor-pointer"
              >
                <p className="text-xs md:text-base font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              The <span className="gradient-text">Vatsora Universe</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              A movement connecting tech, creativity, AI, spirituality, and human design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643]/50 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EEC643]">Our Mission</h3>
                <p className="text-sm md:text-base text-gray-300">
                  VATSORA™ is a visionary brand bridging the gap between technology and creativity, building products and experiences that matter in the digital age.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643]/50 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EEC643]">Our Vision</h3>
                <p className="text-sm md:text-base text-gray-300">
                  To empower the next generation of creators with technology and purpose. We believe in creating meaningful digital experiences that drive real impact.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-[#EEC643]/20 to-transparent border border-[#1A1F71]/30 rounded-2xl p-6 md:p-8 hover:border-[#1A1F71] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">The Brand Ecosystem</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  <strong className="text-[#EEC643]">VATSORA™</strong> - The parent brand focused on innovation, design, and digital evolution across multiple verticals.
                </p>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  <strong className="text-[#EEC643]">VATSORA STUDIO</strong> - The creative division bringing stories to life through cutting-edge media production.
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  <strong className="text-[#EEC643]">Mauvin</strong> - Our creative daughter brand specializing in distinctive visual storytelling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl md:text-4xl">🚀</div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-[#EEC643]">Registered & Growing</p>
                    <p className="text-sm md:text-base text-gray-400">A legitimate media-tech company built for scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1A1F71]/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end creative and technical solutions for modern brands
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🎬',
                title: 'Video Editing & Post Production',
                description: 'Professional editing, color grading, VFX, and motion graphics that bring your stories to life with cinematic quality.'
              },
              {
                icon: '🎨',
                title: 'Branding & Motion Design',
                description: 'Create memorable brand identities with stunning logos, visual systems, and dynamic motion graphics.'
              },
              {
                icon: '💻',
                title: 'Web Design & Development',
                description: 'Modern, responsive websites built with cutting-edge technology and conversion-focused design.'
              },
              {
                icon: '🤖',
                title: 'AI Media Automation',
                description: 'Leverage artificial intelligence to streamline content creation, editing workflows, and production pipelines.'
              },
              {
                icon: '💡',
                title: 'Creative Consulting',
                description: 'Strategic guidance on content strategy, brand positioning, and creative direction for maximum impact.'
              },
              {
                icon: '⚡',
                title: 'Digital Innovation',
                description: 'Stay ahead with emerging technologies, interactive experiences, and next-generation digital solutions.'
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643] hover:scale-105 transition-all duration-300 card-tilt reveal-on-scroll cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EEC643]">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1A1F71]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Let&apos;s <span className="gradient-text">Create Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
            Have a project in mind? Let&apos;s build something extraordinary.
          </p>

          

          {/* Social Links */}
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1F71]/30 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-gray-400">
                © 2025 Vatsora Studio. A Vision of the Vatsora Universe.
              </p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <VatsoraLogo className="w-8 h-8 md:w-12 md:h-12" />
              <span className="text-base md:text-lg font-bold gradient-text">VATSORA™</span>
            </div>
          </div>
        </div>
      </footer>
      {/* Decorative animated section below the footer */}
      <div className="footer-animation" aria-hidden="true">
        <div className="gradient-bg" />
        <svg className="wave" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96 C240,160 480,32 720,96 C960,160 1200,32 1440,96 L1440,200 L0,200 Z" />
        </svg>
      </div>
    </main>
  )
}
