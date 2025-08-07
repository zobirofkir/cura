import React from 'react'
import { motion } from 'framer-motion'

const CtaComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1]
    }
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pistachio-600 via-purple-600 to-orange-500 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
          >
            ✨ Offre Spéciale Limitée
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            variants={itemVariants}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span 
              className="block"
              whileHover={{ rotateX: 5, scale: 1.02 }}
            >
              Transformez votre corps
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
              whileHover={{ rotateX: -5, scale: 1.02 }}
            >
              dès aujourd'hui
            </motion.span>
          </motion.h2>
          
          {/* Arabic Heading */}
          <motion.h3 
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 font-arabic"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            حوّل جسمك وحقق حلمك اليوم
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Rejoignez des milliers de clients satisfaits qui ont découvert la puissance de Cura pour une transformation corporelle naturelle et efficace
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 sm:gap-8 my-8 sm:my-12"
            variants={itemVariants}
          >
            {[
              { number: "2K+", label: "Clients Satisfaits", labelAr: "عميل راضي" },
              { number: "95%", label: "Taux de Réussite", labelAr: "نسبة نجاح" },
              { number: "30j", label: "Garantie", labelAr: "ضمان" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="text-xs text-white/70 font-arabic">{stat.labelAr}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            {/* Primary Button */}
            <motion.button 
              className="relative bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl overflow-hidden group w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span 
                className="relative z-10 flex items-center justify-center space-x-2"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.9 }}
              >
                <span>🚀</span>
                <span>Commander maintenant</span>
              </motion.span>
              
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-pistachio-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shine Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.button>
            
            {/* Secondary Button */}
            <motion.button 
              className="relative border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold backdrop-blur-sm bg-white/10 w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span 
                className="flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>📞</span>
                <span>Nous contacter</span>
              </motion.span>
            </motion.button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12 opacity-80"
            variants={itemVariants}
          >
            {[
              { icon: "🔒", text: "Paiement Sécurisé" },
              { icon: "🚚", text: "Livraison Rapide" },
              { icon: "🌿", text: "100% Naturel" },
              { icon: "✅", text: "Certifié Halal" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2 text-white/90 text-sm sm:text-base"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Glow Effect */}
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white/10 to-transparent blur-xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  )
}

export default CtaComponent