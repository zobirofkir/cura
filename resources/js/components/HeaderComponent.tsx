import React from 'react'

const HeaderComponent = () => {
  return (
    <>
    
    {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-pistachio-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-3xl font-bold bg-gradient-to-r from-pistachio-600 to-purple-600 bg-clip-text text-transparent">
              Cura
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-pistachio-600 transition-colors">Accueil</a>
              <a href="#about" className="text-gray-700 hover:text-pistachio-600 transition-colors">À propos</a>
              <a href="#command" className="text-gray-700 hover:text-pistachio-600 transition-colors">Commander</a>
              <a href="#why-choose" className="text-gray-700 hover:text-pistachio-600 transition-colors">Pourquoi nous</a>
            </div>
            <button className="bg-gradient-to-r from-pistachio-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-pistachio-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200">
              اتصل بنا
            </button>
          </div>
        </div>
      </header>

    </>
  )
}

export default HeaderComponent