import React from 'react'

const CommandComponent = ( {formData, setFormData, ImageThree} ) => {
  return (
    <>
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
    </>
  )
}

export default CommandComponent