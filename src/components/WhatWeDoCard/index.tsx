import "./styles.css"

interface WhatWeDoCardProps {
  title:string,
  description:string
}

function WhatWeDoCard({ title, description }: WhatWeDoCardProps) {
  return (
    <div className='wwd-card'>
      <p className='wwd-card-title'>{title}</p>
      <p className='wwd-card-description'>{description}</p>
    </div>
  )
}

export { WhatWeDoCard }