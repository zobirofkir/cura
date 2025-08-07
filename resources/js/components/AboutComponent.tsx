
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AboutComponent = ({ ImageTwo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

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
      y: isMobile ? 80 : 50,
      rotateX: isMobile ? -25 : -15,
      scale: isMobile ? 0.9 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 1 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: isMobile ? 80 : 100
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      rotateY: isMobile ? -45 : -25,
      rotateX: isMobile ? 20 : 0,
      z: -150
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      transition: {
        duration: isMobile ? 1.2 : 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateZ: isMobile ? -20 : -10,
      rotateY: isMobile ? 45 : 0,
      z: isMobile ? -50 : 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      rotateY: 0,
      z: 0,
      transition: {
        duration: isMobile ? 0.8 : 0.6,
        ease: "backOut",
        delay: 0.3,
        type: "spring",
        stiffness: isMobile ? 150 : 100
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
            style={{ perspective: isMobile ? 1500 : 1000 }}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
          >
            <motion.div
              className="relative group"
              style={!isMobile ? { rotateX, rotateY } : {}}
              whileHover={!isMobile ? { 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              } : {}}
              whileTap={isMobile ? {
                scale: 0.95,
                rotateY: 10,
                rotateX: -5,
                transition: { duration: 0.2 }
              } : {}}
              animate={isMobile ? {
                rotateY: [0, 3, -3, 0],
                rotateX: [0, -2, 2, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              } : {}}
            >
              <motion.img 
                src={ImageTwo} 
                alt="À propos de Cura" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                whileHover={!isMobile ? { 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                } : {}}
                style={{
                  filter: isMobile ? 'drop-shadow(0 20px 25px rgba(147, 51, 234, 0.15))' : 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isMobile && (
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-2xl opacity-20 blur-lg"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
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
              animate={isMobile ? {
                textShadow: [
                  "0 0 0px rgba(147, 51, 234, 0)",
                  "0 0 10px rgba(147, 51, 234, 0.3)",
                  "0 0 0px rgba(147, 51, 234, 0)"
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              } : {}}
            >
              Notre Histoire
            </motion.h2>
            
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-purple-600 mb-4 font-arabic"
              variants={itemVariants}
            >
              قصتنا
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-4 lg:mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Cura propose des produits 100% naturels, certifiés ONSSA, Halal et ISO, garantissant une qualité optimale pour vos objectifs de sèche. Nos formules sont spécialement conçues pour brûler les graisses, réduire l'appétit et affiner votre silhouette de manière efficace.
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed font-arabic"
              variants={itemVariants}
            >
              كورا تقدم منتجات طبيعية 100%، معتمدة من ONSSA وحلال وISO، مما يضمن جودة مثلى لأهداف التنحيف. تركيباتنا مصممة خصيصاً لحرق الدهون وتقليل الشهية وتنحيف القوام بفعالية.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0"
              variants={containerVariants}
              style={{ perspective: isMobile ? 800 : 'none' }}
            >
              <motion.div 
                className="text-center p-3 sm:p-4 bg-gradient-to-br from-pistachio-50 to-pistachio-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                variants={statsVariants}
                whileHover={!isMobile ? { 
                  scale: 1.05,
                  rotateZ: 2,
                  transition: { duration: 0.2 }
                } : {}}
                whileTap={{ 
                  scale: 0.9,
                  rotateY: isMobile ? 15 : 0,
                  rotateX: isMobile ? -10 : 0,
                  transition: { duration: 0.15 }
                }}
                animate={isMobile ? {
                  rotateY: [0, 5, -5, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                } : {}}
              >
                {isMobile && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-pistachio-200/30 to-transparent"
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                )}
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-pistachio-600 relative z-10"
                  initial={{ scale: 0, rotateY: isMobile ? 90 : 0 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: isMobile ? 90 : 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium relative z-10">Naturel</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                variants={statsVariants}
                whileHover={!isMobile ? { 
                  scale: 1.05,
                  rotateZ: -2,
                  transition: { duration: 0.2 }
                } : {}}
                whileTap={{ 
                  scale: 0.9,
                  rotateY: isMobile ? -15 : 0,
                  rotateX: isMobile ? -10 : 0,
                  transition: { duration: 0.15 }
                }}
                animate={isMobile ? {
                  rotateY: [0, -5, 5, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }
                } : {}}
              >
                {isMobile && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-l from-purple-200/30 to-transparent"
                    animate={{
                      x: [100, -100],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3
                    }}
                  />
                )}
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-purple-600 relative z-10"
                  initial={{ scale: 0, rotateY: isMobile ? -90 : 0 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: isMobile ? -90 : 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  ISO
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium relative z-10">Certifié</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutComponent