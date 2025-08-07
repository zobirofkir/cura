import React from 'react'
import PackComponent from './PackComponent'

const PackExample = () => {
  const pack = {
    title: 'Premium Skin Care',
    price: 299,
    originalPrice: 399,
    features: [
      'Deep cleansing treatment',
      'Anti-aging serum application',
      'Moisturizing therapy',
      'UV protection consultation',
      'Follow-up session included'
    ],
    image: '/resources/js/images/image-1.jpeg',
    popular: true,
    description: 'Complete skincare transformation package',
    duration: '30 days'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pistachio-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Treatment Package
        </h2>
        
        <PackComponent {...pack} />
      </div>
    </div>
  )
}

export default PackExample