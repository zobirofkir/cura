import { motion } from 'framer-motion'
import React from 'react'
import BeforAfterComponent from '../components/BeforAfterComponent'

const BeforeAfterDemo = () => {
  const comparisons = [
    {
      id: 1,
      beforeImage: '/resources/js/images/image-1.jpeg',
      afterImage: '/resources/js/images/image-2.jpeg',
      beforeLabel: 'Before Treatment',
      afterLabel: 'After Treatment',
      title: 'Skin Transformation',
      description: 'Professional skincare treatment results'
    },
    {
      id: 2,
      beforeImage: '/resources/js/images/image-3.jpeg',
      afterImage: '/resources/js/images/image-4.jpeg',
      beforeLabel: 'Original',
      afterLabel: 'Enhanced',
      title: 'Beauty Enhancement',
      description: 'Advanced cosmetic procedures'
    },
    {
      id: 3,
      beforeImage: '/resources/js/images/image-5.jpeg',
      afterImage: '/resources/js/images/image-7.jpeg',
      beforeLabel: 'Day 1',
      afterLabel: 'Day 30',
      title: 'Treatment Progress',
      description: '30-day transformation journey'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pistachio-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Before & After
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations with our professional treatments
          </p>
        </motion.div>

        {/* Comparisons Grid */}
        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {comparison.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {comparison.description}
                </p>
              </div>
              
              <BeforAfterComponent
                beforeImage={comparison.beforeImage}
                afterImage={comparison.afterImage}
                beforeLabel={comparison.beforeLabel}
                afterLabel={comparison.afterLabel}
                className="mb-6"
              />
              
              {/* Stats or additional info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-pistachio-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-pistachio-600">30</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-pistachio-600">Safe</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-pistachio-600">Pro</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-pistachio-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Book your consultation today and start your journey
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pistachio-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default BeforeAfterDemo