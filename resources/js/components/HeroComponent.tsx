import ImageOne from '@/images/image-1.jpeg';

const HeroComponent = () => {
  return (
    <>
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
    </>
  )
}

export default HeroComponent