import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const WhyShoseCusraComponent = () => {
  const allReviews = [
    {
      name: "فاطمة أحمد",
      message: "كورا منتج رائع للتنحيف! طبيعي 100% ومعتمد من ONSSA 😍 خسرت 8 كيلو في شهر بطريقة آمنة",
      time: "14:32",
      avatar: "👩🏻",
      rating: 5
    },
    {
      name: "محمد علي",
      message: "جربت منتجات كثيرة للسيش بس كورا فعلاً مختلف! يحرق الدهون ويقلل الشهية بشكل طبيعي ✨",
      time: "15:45",
      avatar: "👨🏻",
      rating: 5
    },
    {
      name: "سارة محمود",
      message: "أنصح كل البنات يجربوه! منتج حلال ومعتمد ISO 💚 ساعدني أنحف وأحصل على جسم مثالي",
      time: "16:20",
      avatar: "👩🏽",
      rating: 5
    },
    {
      name: "أحمد حسن",
      message: "كورا يحترم المعايير الصارمة! منتج آمن وفعال للتخسيس 🔥 النتائج واضحة من الأسبوع الأول",
      time: "17:10",
      avatar: "👨🏽",
      rating: 5
    },
    {
      name: "نور الهدى",
      message: "الحمد لله! كورا ساعدني أخس 12 كيلو في شهرين 🙏 منتج آمن ومضمون النتائج",
      time: "18:15",
      avatar: "👩🏻‍🦱",
      rating: 5
    },
    {
      name: "عبد الرحمن",
      message: "بصراحة كنت متردد بس النتائج فاقت توقعاتي! 💪 كورا منتج ممتاز للتخسيس الصحي",
      time: "19:22",
      avatar: "👨🏽‍🦲",
      rating: 5
    },
    {
      name: "ليلى كريم",
      message: "شكراً كورا! وصلت للوزن المثالي بطريقة طبيعية 🌿 أنصح كل أم تجربه بعد الولادة",
      time: "20:08",
      avatar: "👩🏻",
      rating: 5
    },
    {
      name: "يوسف محمد",
      message: "كورا غير حياتي! خسرت 15 كيلو وحسيت بطاقة وحيوية أكثر ⚡ منتج رهيب فعلاً",
      time: "21:33",
      avatar: "👨🏻",
      rating: 5
    },
    {
      name: "أمينة الزهراء",
      message: "جربت كورا بناء على نصيحة صديقتي والنتيجة مذهلة! 😍 خسرت 6 كيلو في 3 أسابيع",
      time: "22:45",
      avatar: "👩🏽",
      rating: 5
    },
    {
      name: "خالد العلوي",
      message: "منتج موثوق ومعتمد! كورا ساعدني أتخلص من الكرش نهائياً 🔥 النتائج سريعة ومضمونة",
      time: "23:12",
      avatar: "👨🏽",
      rating: 5
    },
    {
      name: "زينب الفاسي",
      message: "الله يبارك! كورا منتج حلال وطبيعي 100% 🌿 خسرت 10 كيلو بدون أي آثار جانبية",
      time: "09:18",
      avatar: "👩🏻‍🦳",
      rating: 5
    },
    {
      name: "عمر بنعلي",
      message: "كورا الأفضل في السوق! جودة عالية ونتائج مضمونة ✅ أنصح الجميع يجربه",
      time: "10:25",
      avatar: "👨🏻‍🦱",
      rating: 5
    },
    {
      name: "حنان الإدريسي",
      message: "شكراً لفريق كورا! المنتج ممتاز والخدمة رائعة 💚 وصلت لهدفي في وقت قياسي",
      time: "11:40",
      avatar: "👩🏽‍🦱",
      rating: 5
    },
    {
      name: "إبراهيم الحسني",
      message: "كورا منتج معجزة! خسرت 20 كيلو في 3 أشهر 🎉 حياتي تغيرت للأفضل تماماً",
      time: "12:55",
      avatar: "👨🏽‍🦳",
      rating: 5
    },
    {
      name: "رقية الأندلسي",
      message: "الحمد لله على كورا! منتج آمن وفعال للغاية 🙏 النتائج ظهرت من الأسبوع الثاني",
      time: "13:30",
      avatar: "👩🏻",
      rating: 5
    }
  ]

  const [visibleReviews, setVisibleReviews] = useState(allReviews.slice(0, 4))
  const [currentIndex, setCurrentIndex] = useState(4)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < allReviews.length) {
        setVisibleReviews(prev => [...prev, allReviews[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      } else {
        setCurrentIndex(0)
        setVisibleReviews(allReviews.slice(0, 4))
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, allReviews])

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

  const messageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pistachio-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🌿 منتجات طبيعية معتمدة
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-pistachio-700 bg-clip-text text-transparent mb-4">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تجارب حقيقية مع منتجات كورا الطبيعية للتنحيف والسيش
          </p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Chat Container */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-pistachio-500/5 rounded-3xl"></div>
              
              {/* Chat Header */}
              <div className="relative flex items-center justify-between bg-gradient-to-r from-green-600 to-green-700 text-white p-4 sm:p-6 rounded-2xl mb-6 shadow-lg">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <motion.div 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    🏥
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg">مجموعة عملاء كورا</h4>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <p className="text-sm opacity-90">متصل الآن</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    💬
                  </motion.div>
                </div>
              </div>
              
              {/* Messages */}
              <MessagesContainer visibleReviews={visibleReviews} messageVariants={messageVariants} />
            </div>
          </motion.div>
          
          {/* Stats Sidebar */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: "⭐", value: "4.9", label: "تقييم", color: "from-yellow-400 to-orange-500" },
              { icon: "👥", value: "2K+", label: "عميل راضي", color: "from-blue-400 to-purple-500" },
              { icon: "🏅", value: "ISO", label: "معتمد", color: "from-green-400 to-emerald-500" },
              { icon: "🌿", value: "100%", label: "طبيعي حلال", color: "from-emerald-400 to-green-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center group"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Memoized Messages Component to prevent unnecessary re-renders
const MessagesContainer = React.memo(({ visibleReviews, messageVariants }) => {
  return (
    <div className="relative space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100">
      {visibleReviews.map((review, index) => (
        <motion.div 
          key={`${review.name}-${review.time}-${index}`}
          className="flex justify-end"
          variants={messageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-sm sm:max-w-md">
            <motion.div 
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-5 rounded-3xl rounded-br-lg shadow-xl relative group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* User Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {review.avatar}
                  </motion.span>
                  <span className="font-bold text-sm">{review.name}</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.span 
                      key={i}
                      className="text-yellow-300 text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Message */}
              <p className="text-sm sm:text-base leading-relaxed text-right font-arabic mb-3">
                {review.message}
              </p>
              
              {/* Time & Status */}
              <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                <span className="text-xs opacity-75">{review.time}</span>
                <div className="flex space-x-1">
                  <motion.svg 
                    className="w-4 h-4 opacity-75" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </motion.svg>
                  <motion.svg 
                    className="w-4 h-4 opacity-75 text-blue-200" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </motion.svg>
                </div>
              </div>
              
              {/* Message Tail */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 transform rotate-45 rounded-br-lg"></div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      {/* Typing Indicator */}
      <motion.div 
        className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-gray-100/80 backdrop-blur-sm rounded-2xl max-w-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-xl">👥</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </motion.div>
    </div>
  )
})

export default WhyShoseCusraComponent