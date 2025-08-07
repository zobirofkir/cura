import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroComponent = ({ ImageOne }) => {
  const [particles, setParticles] = useState([]);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    }));
    
    // Generate floating elements
    const newFloatingElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 3
    }));
    
    setParticles(newParticles);
    setFloatingElements(newFloatingElements);
  }, []);
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
      rotateY: 25,
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
    },
    hover: {
      scale: 1.05,
      rotateY: -5,
      z: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Subliminal Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-pistachio-400/30 to-purple-400/30 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-8 h-8 opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`
            }}
            animate={{
              rotate: [0, 360],
              y: [-30, 30, -30],
              scale: [element.scale, element.scale * 1.5, element.scale]
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {element.id % 3 === 0 ? (
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-full" />
            ) : element.id % 3 === 1 ? (
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400 transform rotate-45" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 clip-triangle" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle Text Shadows */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5"
        animate={{
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-9xl font-bold text-pistachio-600 select-none">
          CURA
        </div>
      </motion.div>
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ perspective: 1000 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
              variants={itemVariants}
            >
              <motion.span 
                className="bg-gradient-to-r from-pistachio-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Cura
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-3 lg:mb-4 font-semibold px-2 lg:px-0"
              variants={itemVariants}
            >
              Produits 100% naturels certifiés
            </motion.h2>
            
            <motion.h3 
              className="text-lg sm:text-xl text-gray-600 mb-4 lg:mb-6 font-arabic px-2 lg:px-0"
              variants={itemVariants}
            >
              منتجات طبيعية 100% معتمدة
            </motion.h3>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed px-2 lg:px-0 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Cura propose des produits 100% naturels, certifiés ONSSA, Halal et ISO, garantissant une qualité optimale pour vos objectifs de sèche.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 px-2 lg:px-0 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-gradient-to-r from-pistachio-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                Commander maintenant
              </motion.button>
              
              <motion.button 
                className="border-2 border-purple-500 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-white/80 backdrop-blur-sm"
                variants={buttonVariants}
                whileHover={{
                  ...buttonVariants.hover,
                  backgroundColor: '#8b5cf6',
                  color: '#ffffff',
                  borderColor: '#8b5cf6'
                }}
                whileTap="tap"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={imageVariants}
            whileHover="hover"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
              }}
            >
              <motion.img 
                src={ImageOne} 
                alt="Produits Cura" 
                className="w-full h-full object-cover rounded-3xl"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-pistachio-500/20 to-purple-500/20 rounded-3xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/60 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Ambient Light Effect */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pistachio-300/10 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-300/10 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  )
}

export default HeroComponent

// Add custom CSS for triangle clip
const style = document.createElement('style');
style.textContent = `
  .clip-triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}