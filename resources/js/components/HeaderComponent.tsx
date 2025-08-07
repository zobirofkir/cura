import React from 'react'
import Logo from '@/images/logo/logo.jpeg'

const HeaderComponent = () => {
  return (
    <>
    
    {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-pistachio-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-pistachio-600 transition-colors">Accueil</a>
              <a href="#about" className="text-gray-700 hover:text-pistachio-600 transition-colors">À propos</a>
              <a href="#command" className="text-gray-700 hover:text-pistachio-600 transition-colors">Commander</a>
              <a href="#why-choose" className="text-gray-700 hover:text-pistachio-600 transition-colors">Pourquoi nous</a>
            </div>
            <a href='#command' className="bg-gradient-to-r from-pistachio-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-pistachio-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200">
              اتصل بنا
            </a>
          </div>
        </div>
      </header>

    </>
  )
}

export default HeaderComponent