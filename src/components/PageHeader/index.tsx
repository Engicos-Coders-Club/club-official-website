import React from 'react'
import "./styles.css"

function PageHeader({title, desc}:{title:string, desc:string}) {
  return (
    <div className='page-header-overlay'>
        <div className='page-header'>
            <p className='page-header-title'>{title}</p>
            <p className='page-header-description'>{desc}</p>
        </div>
    </div>
  )
}

export { PageHeader }