import React, { useState } from 'react'
import ImageThree from '@/images/image-3.jpeg';
import ImageFour from '@/images/image-4.jpeg';
import ImageFive from '@/images/image-5.jpeg';
import ImageSex from '@/images/image-6.jpeg';
import ImageSeven from '@/images/image-7.jpeg';
import ImageEight from '@/images/image-8.jpeg';
import HeaderComponent from '@/components/HeaderComponent';
import HeroComponent from '@/components/HeroComponent';
import AboutComponent from '@/components/AboutComponent';
import CommandComponent from '@/components/CommandComponent';
import WhyShoseCusraComponent from '@/components/WhyShoseCusraComponent';

const HomePage = () => {
  const [formData, setFormData] = useState({ nom: '', telephone: '', message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pistachio-50 to-purple-50">
      <HeaderComponent />

      <HeroComponent />

      <AboutComponent />

      <CommandComponent formData={formData} setFormData={setFormData} ImageThree={ImageThree}/>

      <WhyShoseCusraComponent ImageFour={ImageFour} ImageFive={ImageFive} ImageSex={ImageSex} ImageSeven={ImageSeven}/>

      {/* Additional Sections */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovation et Recherche</h2>
              <h3 className="text-xl font-bold text-purple-600 mb-4 font-arabic">الابتكار والبحث</h3>
              <p className="text-gray-600 mb-6">Notre équipe de recherche travaille constamment pour développer des formules innovantes qui répondent aux besoins spécifiques de chaque type de peau.</p>
              <p className="text-gray-600 font-arabic">يعمل فريق البحث لدينا باستمرار على تطوير تركيبات مبتكرة تلبي الاحتياجات المحددة لكل نوع من أنواع البشرة.</p>
            </div>
            <div>
              <img src={ImageEight} alt="Innovation" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pistachio-600 via-purple-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformez votre peau dès aujourd'hui
          </h2>
          <h3 className="text-2xl font-bold text-white/90 mb-8 font-arabic">
            حوّل بشرتك اليوم
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de clients satisfaits qui ont découvert la puissance de Cura
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Commander maintenant
          </button>
        </div>
      </section>

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
    </div>
  )
}

export default HomePage