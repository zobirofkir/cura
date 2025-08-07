import React from 'react'
import { motion } from 'framer-motion'

const CommandComponent = ({ formData, setFormData, ImageThree }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="command" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pistachio-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 183, 77, 0.3) 0%, transparent 50%)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Form Section */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={cardVariants}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
                variants={itemVariants}
              >
                Passez votre commande
              </motion.h2>
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 mb-6 sm:mb-8 font-arabic"
                variants={itemVariants}
              >
                اطلب الآن
              </motion.h3>
              
              <motion.form className="space-y-4 sm:space-y-6" variants={itemVariants}>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet / الاسم الكامل</label>
                  <motion.input 
                    type="text" 
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Votre nom"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone / رقم الهاتف</label>
                  <motion.input 
                    type="tel" 
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="+213 XXX XXX XXX"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message / رسالة</label>
                  <motion.textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pistachio-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none text-sm sm:text-base"
                    placeholder="Votre message..."
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                </motion.div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pistachio-500 via-green-500 to-green-600 text-white py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold shadow-xl relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.span 
                    className="relative z-10"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    Envoyer la commande / إرسال الطلب
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-pistachio-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={cardVariants}
          >
            <motion.div 
              className="relative group"
              whileHover={{ 
                rotateY: -5,
                rotateX: 5,
                scale: 1.05
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pistachio-400 to-purple-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <motion.img 
                src={ImageThree} 
                alt="Commander Cura" 
                className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommandComponent