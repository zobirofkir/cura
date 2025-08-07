import { motion } from 'framer-motion'
import React, { useState, useRef, useEffect } from 'react'

interface BeforeAfterProps {
  BeforImage: string
  AfterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

const BeforAfterComponent: React.FC<BeforeAfterProps> = ({
  BeforImage,
  AfterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    }
  }

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    handleMove(clientX)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl my-10 ${className}`}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] cursor-col-resize select-none"
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={AfterImage}
            alt={afterLabel}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-4 right-4 bg-pistachio-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
          >
            {afterLabel}
          </motion.div>
        </div>

        {/* Before Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={BeforImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
          >
            {beforeLabel}
          </motion.div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-150 ease-out"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <motion.div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border-4 border-pistachio-500 cursor-col-resize flex items-center justify-center transition-all duration-200 ${
              isDragging ? 'scale-110 shadow-2xl' : 'hover:scale-105'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
          >
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-pistachio-500 rounded-full"></div>
              <div className="w-0.5 h-4 bg-pistachio-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm hidden sm:block"
        >
          Cliquez et faites glisser pour comparer
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BeforAfterComponent