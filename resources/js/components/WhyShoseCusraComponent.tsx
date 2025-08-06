import React from 'react'

const WhyShoseCusraComponent = ( {ImageFour , ImageFive , ImageThree , ImageSeven} ) => {
  return (
    <>
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
              <img src={ImageThree} alt="Sécurité" className="w-full h-32 object-cover rounded-xl mb-4" />
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

    </>
  )
}

export default WhyShoseCusraComponent