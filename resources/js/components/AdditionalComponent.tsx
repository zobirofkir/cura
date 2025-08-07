import React from 'react'
import { motion } from 'framer-motion'

const AdditionalComponent = ({ ImageEight }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  }

  const features = [
    {
      icon: "🔬",
      title: "Recherche Avancée",
      titleAr: "بحث متقدم",
      desc: "Laboratoires de pointe"
    },
    {
      icon: "🧪",
      title: "Formules Innovantes",
      titleAr: "تركيبات مبتكرة",
      desc: "Ingrédients naturels"
    },
    {
      icon: "⚡",
      title: "Résultats Rapides",
      titleAr: "نتائج سريعة",
      desc: "Efficacité prouvée"
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)'
        }}
      />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-40"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-xl opacity-30"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1.2, 1, 1.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content Section */}
          <motion.div 
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)" }}
              >
                🚀 Innovation & Excellence
              </motion.div>
              
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-orange-700 to-pink-700 bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                Innovation et Recherche
              </motion.h2>
              
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-purple-600 font-arabic"
                variants={itemVariants}
              >
                الابتكار والبحث العلمي
              </motion.h3>
            </div>
            
            {/* Description */}
            <motion.div 
              className="space-y-4 text-gray-600"
              variants={itemVariants}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Notre équipe de recherche travaille constamment pour développer des formules innovantes qui répondent aux besoins spécifiques de chaque objectif de transformation corporelle.
              </p>
              <p className="text-base sm:text-lg leading-relaxed font-arabic text-right">
                يعمل فريق البحث لدينا باستمرار على تطوير تركيبات مبتكرة تلبي الاحتياجات المحددة لكل هدف من أهداف التحول الجسدي والتنحيف الطبيعي.
              </p>
            </motion.div>
            
            {/* Features Grid */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 text-center group"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-purple-600 font-arabic mb-2">{feature.titleAr}</p>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            variants={imageVariants}
          >
            <motion.div 
              className="relative group"
              whileHover={{ 
                rotateY: -8,
                rotateX: 5,
                scale: 1.02
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              
              {/* Main Image */}
              <motion.div 
                className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={ImageEight} 
                  alt="Innovation et Recherche" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Stats */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-purple-100"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Années R&D</div>
                    <div className="text-xs text-purple-500 font-arabic">سنة بحث</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-orange-100"
                  initial={{ opacity: 0, scale: 0, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Naturel</div>
                    <div className="text-xs text-orange-500 font-arabic">طبيعي</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdditionalComponent