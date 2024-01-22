import { EventCard, PageHeader, UpcomingEventCard } from '@/components'
import Event from "../../../public/event.webp"

import React from 'react'


const events = [
    {
        img:Event.src,
        tags:["🤝 open source", "💻 coding"],
        date:"28 aug, 2023",
        title:"Roadmap to Software Developement",
        hosts:["Azvern Dias"],
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img:Event.src,
        tags:["🤝 open source", "💻 coding"],
        date:"28 aug, 2023",
        title:"Roadmap to Software Developement",
        hosts:["Azvern Dias"],
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img:Event.src,
        tags:["🤝 open source", "💻 coding"],
        date:"28 aug, 2023",
        title:"Roadmap to Software Developement",
        hosts:["Azvern Dias"],
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img:Event.src,
        tags:["🤝 open source", "💻 coding"],
        date:"28 aug, 2023",
        title:"Roadmap to Software Developement",
        hosts:["Azvern Dias"],
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img:Event.src,
        tags:["🤝 open source", "💻 coding"],
        date:"28 aug, 2023",
        title:"Roadmap to Software Developement",
        hosts:["Azvern Dias"],
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    
]
function Events() {
  return (
    <div className="page">
        <PageHeader title={"EVENTS"} desc="what we did"/>
        <p className='event-page-past-events'>UPCOMING EVENTS</p>
        <div className='events-page-upcoming-events'>
            <UpcomingEventCard img={Event.src} title='Getting Started with Programming'/>
            <UpcomingEventCard img={Event.src} title='Getting Started with Programming'/>
            <UpcomingEventCard img={Event.src} title='Getting Started with Programming'/>
            <UpcomingEventCard img={Event.src} title='Getting Started with Programming'/>
        </div>
        <p className="events-page-scroll-text">Scroll ➡️</p>
       
        <div className='events-page-section-divider'/>

        <p className='event-page-past-events'>PAST EVENTS</p>
        <div className='event-grid'>
        {
            events.map((event,i)=>(
                <EventCard 
                    key={i}
                    img={event.img}
                    tags={event.tags}
                    date={event.date}
                    title={event.title}
                    hosts={event.hosts}
                    description={event.description}
                />
            ))
        }
        <div className='event-collaboration'>
            <p>Interested in collaborating with us? 👀</p>
            <p>Drop us a message at <br/><span>codersclub.gec@gmail.com</span></p>
        </div>

      </div>
    </div>
  )
}

export default Events
