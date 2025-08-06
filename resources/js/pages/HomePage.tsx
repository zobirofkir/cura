import React, { useState } from 'react'
import ImageOne from '@/images/image-1.jpeg';
import ImageTwo from '@/images/image-2.jpeg';
import ImageThree from '@/images/image-3.jpeg';
import ImageFour from '@/images/image-4.jpeg';
import ImageFive from '@/images/image-5.jpeg';
import ImageSex from '@/images/image-6.jpeg';
import ImageSeven from '@/images/image-7.jpeg';
import ImageEight from '@/images/image-8.jpeg';

const HomePage = () => {
  const [formData, setFormData] = useState({ nom: '', telephone: '', message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pistachio-50 to-purple-50">
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

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pistachio-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Cura
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 font-semibold">
                Soins dermatologiques avancés
              </h2>
              <h3 className="text-xl text-gray-600 mb-6 font-arabic">
                العناية المتقدمة بالبشرة والجمال
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Découvrez notre gamme complète de produits dermatologiques de haute qualité pour une peau saine et éclatante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pistachio-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pistachio-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Commander maintenant
                </button>
                <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <img src={ImageOne} alt="Produits Cura" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={ImageTwo} alt="À propos de Cura" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">À propos du produit</h2>
              <h3 className="text-2xl font-bold text-purple-600 mb-4 font-arabic">حول المنتج</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cura est une marque leader dans le domaine des soins dermatologiques, offrant des solutions innovantes pour tous types de peau. Nos produits sont formulés avec des ingrédients de haute qualité et testés dermatologiquement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-arabic">
                كورا هي علامة تجارية رائدة في مجال العناية بالبشرة، تقدم حلولاً مبتكرة لجميع أنواع البشرة. منتجاتنا مصنوعة من مكونات عالية الجودة ومختبرة من قبل أطباء الجلدية.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-pistachio-50 rounded-xl">
                  <div className="text-2xl font-bold text-pistachio-600">100%</div>
                  <div className="text-sm text-gray-600">Naturel</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">24h</div>
                  <div className="text-sm text-gray-600">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command Section */}
      <section id="command" className="py-20 bg-gradient-to-br from-pistachio-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Passez votre commande</h2>
              <h3 className="text-2xl font-bold text-orange-600 mb-8 font-arabic">اطلب الآن</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet / الاسم الكامل</label>
                  <input 
                    type="text" 
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone / رقم الهاتف</label>
                  <input 
                    type="tel" 
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-200"
                    placeholder="+213 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message / رسالة</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pistachio-500 to-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-pistachio-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Envoyer la commande / إرسال الطلب
                </button>
              </form>
            </div>
            <div>
              <img src={ImageThree} alt="Commander Cura" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Liderm */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir Cura ?</h2>
            <h3 className="text-2xl font-bold text-purple-600 mb-8 font-arabic">لماذا تختار كورا؟</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-pistachio-50 to-pistachio-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={ImageFour} alt="Qualité" className="w-full h-32 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Qualité Premium</h4>
              <p className="text-gray-600 mb-2">جودة عالية</p>
              <p className="text-sm text-gray-500">Ingrédients de haute qualité testés cliniquement</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={ImageFive} alt="Efficacité" className="w-full h-32 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Efficacité Prouvée</h4>
              <p className="text-gray-600 mb-2">فعالية مثبتة</p>
              <p className="text-sm text-gray-500">Résultats visibles dès les premières applications</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={ImageSex} alt="Sécurité" className="w-full h-32 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sécurité Garantie</h4>
              <p className="text-gray-600 mb-2">أمان مضمون</p>
              <p className="text-sm text-gray-500">Testé dermatologiquement, sans effets secondaires</p>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={ImageSeven} alt="Support" className="w-full h-32 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Support 24/7</h4>
              <p className="text-gray-600 mb-2">دعم على مدار الساعة</p>
              <p className="text-sm text-gray-500">Assistance client disponible à tout moment</p>
            </div>
          </div>
        </div>
      </section>

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