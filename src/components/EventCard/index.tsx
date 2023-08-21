"use client"

import React from 'react'
import "./index.css"
import Image from 'next/image'


interface EventCardProps  {
    img: string;
    tags: string[];
    date: string;
    title: string;
    hosts: string[];
    description: string;
}

//the component defaults to light mode styles, for dark mode, html tag must have 'dark' the className
function EventCard({ img, tags, date, title, hosts, description }: EventCardProps) {
  return (
    <div className='event-card'> 
        <div className='event-card-img-container'>
            <Image 
                loader={({src})=>src}
                src={img}
                width={0}
                height={300}
                alt="a still from the event"
                className='event-card-img'
            />
        </div>
        <div className='event-card-content'>
            <div className='event-card-meta'>
                <div>
                    { tags.map((tag,i)=>(<div className='event-card-tag' key={i}>{tag}</div>)) }
                </div>
                <p className='event-card-date'>{date}</p>
            </div>
            <div>
                <p className='event-card-title'>{title}</p>
                <p className='event-card-hosts'>
                    { hosts.map((host,i)=>(<span key={i}>{host}</span>)) }
                </p>
                <p className='event-card-description'>{description}</p>
                <input type="checkbox" id="event-card-readmore"/>
                <label htmlFor="event-card-readmore">read more</label>
            </div>
        </div>
    </div>
  )
}

export { EventCard }