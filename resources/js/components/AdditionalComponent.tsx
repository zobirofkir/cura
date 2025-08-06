import React from 'react'

const AdditionalComponent = ( {ImageEight} ) => {
  return (
    <>
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

    </>
  )
}

export default AdditionalComponent