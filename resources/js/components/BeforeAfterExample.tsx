import React from 'react'
import BeforAfterComponent from './BeforAfterComponent'

const BeforeAfterExample = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Treatment Results</h2>
      
      {/* Simple Usage */}
      <BeforAfterComponent
        beforeImage="/resources/js/images/image-1.jpeg"
        afterImage="/resources/js/images/image-2.jpeg"
      />
      
      {/* With Custom Labels */}
      <div className="mt-12">
        <BeforAfterComponent
          beforeImage="/resources/js/images/image-3.jpeg"
          afterImage="/resources/js/images/image-4.jpeg"
          beforeLabel="Day 1"
          afterLabel="Day 30"
          className="max-w-2xl"
        />
      </div>
    </div>
  )
}

export default BeforeAfterExample