import { WhatWeDoCard } from '..'
import "./styles.css"

function WhatWeDoSection() {
  return (
    <div className='wwd-section'>
      <p className='wwd-section-title'>WHAT <span>WE DO</span></p>
      <div className='wwd-card-section'>
        <WhatWeDoCard title="Conduct Trainings Etc" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"/>
          <WhatWeDoCard title="Conduct Trainings Etc" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"/>
          <WhatWeDoCard title="Conduct Trainings Etc" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"/>
      </div>
    </div>
  )
}

export { WhatWeDoSection }