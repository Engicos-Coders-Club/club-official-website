import React from 'react'
import { WhatWeDoCard } from '..'
import "./styles.css"

function WhatWeDoSection() {
  return (
    <div className='wwd-section'>
      <p className='wwd-section-title'>WHAT <span>WE DO</span></p>
      <div className='wwd-card-section'>
          <WhatWeDoCard />
          <WhatWeDoCard />
          <WhatWeDoCard />
      </div>
    </div>
  )
}

export { WhatWeDoSection }