import ImageTwo from '@/images/image-2.jpeg';

const AboutComponent = () => {
  return (
    <>
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
    </>
  )
}

export default AboutComponent