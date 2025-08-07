import React from 'react'
import { motion } from 'framer-motion'

const FooterComponent = () => {
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
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialLinks = [
    { icon: "📱", name: "WhatsApp", href: "#" },
    { icon: "📧", name: "Email", href: "#" },
    { icon: "📞", name: "Téléphone", href: "#" },
    { icon: "📍", name: "Localisation", href: "#" }
  ]

  const quickLinks = [
    { name: "Accueil", nameAr: "الرئيسية", href: "#" },
    { name: "Produits", nameAr: "المنتجات", href: "#" },
    { name: "À propos", nameAr: "عنا", href: "#" },
    { name: "Contact", nameAr: "اتصل بنا", href: "#" }
  ]

  return (
    <footer className="relative bg-white text-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)'
        }}
      />
      
      {/* Floating Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-green-200 rounded-full opacity-20"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-2 space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
                  whileHover={{ rotateY: 5, scale: 1.05 }}
                >
                  Cura
                </motion.div>
                
                <motion.p 
                  className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md"
                  variants={itemVariants}
                >
                  Votre partenaire de confiance pour une transformation corporelle naturelle et des résultats durables.
                </motion.p>
                
                <motion.p 
                  className="text-gray-700 text-base sm:text-lg leading-relaxed font-arabic text-right max-w-md"
                  variants={itemVariants}
                >
                  شريكك الموثوق للتحول الجسدي الطبيعي والنتائج المستدامة.
                </motion.p>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex flex-wrap gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg border border-gray-200 group"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-xl sm:text-2xl font-bold text-gray-900 relative"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Liens rapides
                <motion.div 
                  className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.h4>
              
              <motion.ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="group flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl hover:bg-green-50"
                      whileHover={{ 
                        scale: 1.05,
                        x: 5,
                        rotateY: 2
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <span className="text-base sm:text-lg font-medium">{link.name}</span>
                      <span className="text-sm text-gray-500 font-arabic">{link.nameAr}</span>
                      <motion.span 
                        className="opacity-0 group-hover:opacity-100 text-green-500"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-xl sm:text-2xl font-bold text-gray-900 relative"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Contact
                <motion.div 
                  className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.h4>
              
              <motion.div className="space-y-3 sm:space-y-4">
                {[
                  { icon: "📧", text: "contact@cura.com", type: "email" },
                  { icon: "📞", text: "+213 XXX XXX XXX", type: "phone" },
                  { icon: "📍", text: "Alger, Algérie", type: "location" },
                  { icon: "⏰", text: "24/7 Support", type: "support" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-xl hover:bg-gray-50 group"
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      rotateY: 2
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-xl sm:text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {contact.icon}
                    </motion.span>
                    <span className="text-gray-700 text-base sm:text-lg font-medium group-hover:text-green-600 transition-colors">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-200 mt-12 sm:mt-16 pt-6 sm:pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.p 
                className="text-gray-600 text-sm sm:text-base text-center sm:text-left"
                whileHover={{ scale: 1.02 }}
              >
                &copy; 2025 Cura. Tous droits réservés. | جميع الحقوق محفوظة
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 rtl:space-x-reverse"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: "🌿", text: "100% Naturel" },
                  { icon: "✅", text: "Certifié Halal" },
                  { icon: "🏅", text: "ISO" }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-1 rtl:space-x-reverse text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterComponent