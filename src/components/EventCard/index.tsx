"use client"

import { useState } from 'react'
import Image from 'next/image'
import "./index.css"

/*
    Sample Usage

    <EventCard 
          img={Event.src}
          tags={["🤝 open source", "💻 coding"]}
          date="28 aug, 2023"
          title="Roadmap to Software Developement"
          hosts={["Azvern Dias"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    />

    To be used in grid or flex layout

*/

interface EventCardProps  {
    shouldGap:boolean;
    img: string;
    tags: string[];
    date: string;
    title: string;
    hosts: string[];
    description: string;
}

//the component defaults to light mode styles, for dark mode, html tag must have 'dark' the className
function EventCard({ shouldGap, img, tags, date, title, hosts, description }: EventCardProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={`event-card ${shouldGap && "event-card-margin"}`}> 
        <div className='event-card-img-container'>
            <Image 
                src={img}
                width={0}
                height={400}
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
                <div onClick={()=>setShowMore((prev)=>!prev)}>
                    <p className={`event-card-description ${showMore && "event-card-description-full"}`}>{description}</p>
                    <p className='event-card-readmore'>{showMore ? "read less " : "read more "}<span>{showMore ? "↑"  : "↓"}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export { EventCard }