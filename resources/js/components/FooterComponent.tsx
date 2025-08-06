import React from 'react'

const FooterComponent = () => {
  return (
    <>
    
    {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-pistachio-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Cura
              </div>
              <p className="text-gray-400 mb-4">
                Votre partenaire de confiance pour des soins dermatologiques de qualité supérieure.
              </p>
              <p className="text-gray-400 mb-6 font-arabic">
                شريكك الموثوق للعناية الجلدية عالية الجودة.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pistachio-400 transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-pistachio-400 transition-colors">Produits</a></li>
                <li><a href="#" className="hover:text-pistachio-400 transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-pistachio-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@cura.com</li>
                <li>+213 XXX XXX XXX</li>
                <li>Alger, Algérie</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cura. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default FooterComponent