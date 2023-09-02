import Image from 'next/image'
import styles from './page.module.css'
import { HomepageProjectSection, EventCard, WhatWeDoSection } from '../components'
import Event from "../../public/event.webp"

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link

export default function Home() {
  return (
    <main className={styles.main}>
      
      <HomepageProjectSection/>
      <div className='event-grid'>
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
      </div>
      <WhatWeDoSection />
      
    </main>
  )
}
