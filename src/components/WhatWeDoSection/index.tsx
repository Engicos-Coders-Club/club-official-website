import { WhatWeDoCard } from '..'
import "./styles.css"
import { nbsp, breakline } from './htmlCodes';

function WhatWeDoSection() {
  return (
    <div className='wwd-section'>
      <p className='wwd-section-title'>WHAT <span>WE DO</span></p>
      <div className='wwd-card-section'>
        <WhatWeDoCard title="Conduct Workshops" description="We host beginner friendly workshops ranging from learning GitHub and understanding LLMs to personal branding for professional development."/>
        <WhatWeDoCard title="Host Competitions" description="We foster skill development through intra-college competitions, like our monthly coding contests, providing students with a platform to showcase their abilities."/>
        <WhatWeDoCard title="    Build    Projects" description="We collaborate with on campus talents to bring ideas to life. We thrive on open source projects, encouraging collective innovation and skillful contributions."/>
      </div>
    </div>
  )
}

export { WhatWeDoSection }