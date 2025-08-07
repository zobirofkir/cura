
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutComponent = ({ ImageTwo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -25,
      z: -100
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateZ: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.3
      }
    }
  };

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50 overflow-hidden"
      ref={ref}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={imageVariants}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img 
                src={ImageTwo} 
                alt="À propos de Cura" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6"
              variants={itemVariants}
            >
              À propos du produit
            </motion.h2>
            
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-purple-600 mb-4 font-arabic"
              variants={itemVariants}
            >
              حول المنتج
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-4 lg:mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Cura est une marque leader dans le domaine des soins dermatologiques, offrant des solutions innovantes pour tous types de peau. Nos produits sont formulés avec des ingrédients de haute qualité et testés dermatologiquement.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed font-arabic"
              variants={itemVariants}
            >
              كورا هي علامة تجارية رائدة في مجال العناية بالبشرة، تقدم حلولاً مبتكرة لجميع أنواع البشرة. منتجاتنا مصنوعة من مكونات عالية الجودة ومختبرة من قبل أطباء الجلدية.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center p-3 sm:p-4 bg-gradient-to-br from-pistachio-50 to-pistachio-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-pistachio-600"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Naturel</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-purple-600"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  24h
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Protection</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutComponent