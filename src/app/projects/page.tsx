
import { EventCard, PageHeader, UpcomingEventCard } from '@/components'
import Event from "../../../public/event.webp"

import React from 'react'


const events = [
    {
        img: Event.src,
        tags: ["🤝 open source", "💻 coding"],
        date: "28 aug, 2023",
        title: "Roadmap to Software Developement",
        hosts: ["Azvern Dias"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img: Event.src,
        tags: ["🤝 open source", "💻 coding"],
        date: "28 aug, 2023",
        title: "Roadmap to Software Developement",
        hosts: ["Azvern Dias"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img: Event.src,
        tags: ["🤝 open source", "💻 coding"],
        date: "28 aug, 2023",
        title: "Roadmap to Software Developement",
        hosts: ["Azvern Dias"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img: Event.src,
        tags: ["🤝 open source", "💻 coding"],
        date: "28 aug, 2023",
        title: "Roadmap to Software Developement",
        hosts: ["Azvern Dias"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },
    {
        img: Event.src,
        tags: ["🤝 open source", "💻 coding"],
        date: "28 aug, 2023",
        title: "Roadmap to Software Developement",
        hosts: ["Azvern Dias"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad`
    },

]

function Projects() {
    return (
        <div className="page">
            <PageHeader title={"Projects"} desc="Our FOSS Showcase" />
            <p className='event-page-past-events'>About the FOSS Philosophy</p>

            <p>We Believe that Innovation rises from Collaboration.<br></br>
            All the Projects under the Club are FOSS. Which means that Anyone is
            able to Contribute and Drive the Change.<br></br>
            We are Passionate about Technology and feel that the Freedom of
            Computing is essential. We Invite you to Participate in the Projects and
            Embrace the Growth.</p>

            <div className='events-page-section-divider' />

            <p className='event-page-past-events'>Recent Projects</p>

            <div className='event-grid'>
                {
                    events.map((event, i) => (
                        <EventCard
                            key={i}
                            shouldGap={i >= (events.length / 2)}
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
                    <p>Drop us a message at <br /><span>codersclub.gec@gmail.com</span></p>
                </div>

            </div>
        </div>
    )
}

export default Projects