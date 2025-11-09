'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  })

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
    <main className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-[#1A1F71]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#EEC643] to-[#1A1F71] rounded-lg animate-glow"></div>
              <span className="text-xl md:text-2xl font-bold gradient-text">VATSORA STUDIO</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#EEC643] transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-[#EEC643] transition-colors duration-300">About</a>
              <a href="#services" className="hover:text-[#EEC643] transition-colors duration-300">Services</a>
              <a href="#careers" className="hover:text-[#EEC643] transition-colors duration-300">Careers</a>
              <a href="#contact" className="hover:text-[#EEC643] transition-colors duration-300">Contact</a>
            </div>
            <a 
              href="#careers" 
              className="bg-[#EEC643] text-[#0D0D0D] px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-[#1A1F71] hover:text-white transition-all duration-300 text-sm md:text-base"
            >
              Join Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#1A1F71] rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#EEC643] rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 py-12 md:py-0">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-[#1A1F71]/30 rounded-full border border-[#EEC643]/50">
              <span className="text-[#EEC643] text-xs md:text-sm font-semibold">✨ Launching the Future of Digital Expression</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              Building the Future of
              <br />
              <span className="gradient-text">Digital Expression</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Where Ideas Evolve into Impact. A next-generation creative and tech brand redefining innovation, design, and digital evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <a 
                href="#careers" 
                className="bg-[#EEC643] text-[#0D0D0D] px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300 animate-glow"
              >
                Join the Movement
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
                className="bg-gradient-to-br from-[#1A1F71]/50 to-transparent border border-[#EEC643]/30 rounded-xl p-3 md:p-6 hover:border-[#EEC643] transition-all duration-300 hover:scale-105"
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
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EEC643]">Founded by Sourabh Bhatt</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Software Engineer at Truedeal and Founder of VATSORA™. A visionary bridging the gap between technology and creativity, building products that matter.
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
                className="group bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643] hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#EEC643]">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Your Journey <span className="gradient-text">Starts Here</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Join a team that&apos;s building the future of creative technology
            </p>
          </div>

          {/* Current Opening */}
          <div className="bg-gradient-to-br from-[#EEC643]/20 via-[#1A1F71]/20 to-transparent border-2 border-[#EEC643] rounded-3xl p-6 md:p-10 mb-8 md:mb-12 animate-glow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
              <div>
                <div className="inline-block px-3 md:px-4 py-1 md:py-2 bg-[#EEC643] text-[#0D0D0D] rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                  🔥 NOW HIRING
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Video Editor Intern</h3>
                <p className="text-lg md:text-xl text-[#EEC643]">₹5,000/month • Remote</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-[#EEC643] text-lg md:text-xl">✓</span>
                <p className="text-sm md:text-base text-gray-300">Passionate about storytelling, timing, and design</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#EEC643] text-lg md:text-xl">✓</span>
                <p className="text-sm md:text-base text-gray-300">Experience with Adobe Premiere Pro, After Effects, or DaVinci Resolve</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#EEC643] text-lg md:text-xl">✓</span>
                <p className="text-sm md:text-base text-gray-300">Strong portfolio showcasing creative editing skills</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#EEC643] text-lg md:text-xl">✓</span>
                <p className="text-sm md:text-base text-gray-300">Ability to work remotely and meet deadlines</p>
              </div>
            </div>

            <div className="bg-[#1A1F71]/50 rounded-2xl p-4 md:p-6 border border-[#EEC643]/30">
              <p className="text-sm md:text-base text-gray-300">
                <strong className="text-white">What you&apos;ll gain:</strong> Hands-on experience in a fast-growing creative studio, mentorship from industry professionals, and the opportunity to work on real-world projects that make an impact.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm md:text-base font-semibold mb-2">Your Name *</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0D0D0D] border border-[#1A1F71] rounded-lg px-4 py-3 md:py-4 focus:border-[#EEC643] focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-2">Email Address *</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0D0D0D] border border-[#1A1F71] rounded-lg px-4 py-3 md:py-4 focus:border-[#EEC643] focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-2">Portfolio Link *</label>
                <input 
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0D0D0D] border border-[#1A1F71] rounded-lg px-4 py-3 md:py-4 focus:border-[#EEC643] focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="https://yourportfolio.com or YouTube/Vimeo"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold mb-2">Why You&apos;d Like to Join *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0D0D0D] border border-[#1A1F71] rounded-lg px-4 py-3 md:py-4 focus:border-[#EEC643] focus:outline-none transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell us about yourself, your experience, and what excites you about joining Vatsora Studio..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#EEC643] text-[#0D0D0D] py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#1A1F71] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Submit Application
              </button>
            </form>
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

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <a 
              href="mailto:contact@vatsora.com"
              className="group bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643] transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📧</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-[#EEC643] transition-colors">contact@vatsora.com</p>
            </a>

            <a 
              href="#careers"
              className="group bg-gradient-to-br from-[#1A1F71]/30 to-transparent border border-[#EEC643]/20 rounded-2xl p-6 md:p-8 hover:border-[#EEC643] transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">💼</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Join Our Team</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-[#EEC643] transition-colors">View open positions</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: 'LinkedIn', icon: '💼', url: '#' },
              { name: 'GitHub', icon: '🐙', url: '#' },
              { name: 'Twitter', icon: '𝕏', url: '#' },
              { name: 'Hashnode', icon: '📝', url: '#' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                className="flex items-center space-x-2 bg-[#1A1F71]/30 border border-[#EEC643]/20 rounded-lg px-4 md:px-6 py-2 md:py-3 hover:border-[#EEC643] hover:scale-105 transition-all duration-300"
              >
                <span className="text-lg md:text-xl">{social.icon}</span>
                <span className="text-sm md:text-base font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
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
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Built by <span className="text-[#EEC643] font-semibold">Sourabh Bhatt</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#EEC643] to-[#1A1F71] rounded-lg"></div>
              <span className="text-base md:text-lg font-bold gradient-text">VATSORA™</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
