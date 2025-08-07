import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import React from 'react'

interface PackProps {
  title: string
  price: number
  originalPrice?: number
  features: string[]
  image: string
  popular?: boolean
  description?: string
  duration?: string
  className?: string
}

const PackComponent: React.FC<PackProps> = ({
  title,
  price,
  originalPrice,
  features,
  image,
  popular = false,
  description,
  duration = '30 days',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${popular ? 'ring-4 ring-pistachio-500' : ''} ${className}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-pistachio-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            Plus Populaire
          </div>
        </div>
      )}

      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-pistachio-600">${price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
          <p className="text-sm text-gray-500">Traitement {duration}</p>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 bg-pistachio-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-pistachio-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 ${
            popular
              ? 'bg-pistachio-500 text-white hover:bg-pistachio-600 shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Choisir le Pack
        </motion.button>
      </div>
    </motion.div>
  )
}

export default PackComponent