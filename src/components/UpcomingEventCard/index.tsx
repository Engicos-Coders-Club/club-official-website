"use client"
import React from 'react'
import "./styles.css"
import Image from 'next/image'


interface UpcomingEventCardProps {
    img:string,
    title:string
}
function UpcomingEventCard({img,title}:UpcomingEventCardProps) {
  return (
    <div className='upcoming-event-card'>
        <div className='event-card-img-container'>
            
            <Image 
                src={img}
                width={0}
                height={400}
                alt="a still from the event"
                className='upcoming-event-card-img'
            />
        </div>
        <p className='upcoming-event-card-title'>{title}</p>
        <button className='upcoming-event-card-button'>Fill the form {"->"}</button>
    </div>
  )
}

export { UpcomingEventCard }