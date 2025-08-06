import React from 'react'

const CtaComponent = () => {
  return (
    <>
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
    </>
  )
}

export default CtaComponent