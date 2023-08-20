"use client"

import React from 'react'
import "./index.css"
import Image from 'next/image'

function EventCard() {
  return (
    <div className='event-card'> 
        <Image 
            loader={({src})=>src}
            src={`https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            width={0}
            height={300}
            alt="a still from the event"
            className='event-card-img'
        />
        <div className='event-card-content'>
            <div className='event-card-meta'>
                <div>
                    <div className='event-card-tag'>🤝 open source</div>
                    <div className='event-card-tag'>💻 coding</div>
                </div>
                <p className='event-card-date'>28 aug, 2023</p>
            </div>
            <div>
                <p className='event-card-title'>Roadmap to Software Developement</p>
                <p className='event-card-hosts'>Azvern Dias</p>
                <p className='event-card-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
                <input type="checkbox" id="event-card-readmore"/>
                <label htmlFor="event-card-readmore">read more</label>
            </div>
        </div>
    </div>
  )
}

export { EventCard }