import Image from 'next/image'
import styles from './page.module.css'
import { HomepageProjectSection, EventCard, ContactPageSection } from '../components'
import Event from "../../public/event.webp"
// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link'  


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Hello Coders</code>
        </p>
        <div>
          <Link href="/">
            By{' '}
            <Image
              src="/logo.svg"
              alt="GEC Coders CLub Logo"
              className={styles.gecLogo}
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
      <Link
          className={styles.card}
          href="/contacts"

        >
          
          <h2>
            Contacts <span>-&gt;</span>
          </h2>
          <p>Reach us</p>
        </Link>
        
        <Link
          className={styles.card}
          href="/foss"

        >
          
          <h2>
            Foss <span>-&gt;</span>
          </h2>
          <p>Foss club</p>
        </Link>
        
        <Link
          className={styles.card}
          href="/contact-page"

        >
          
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Contacts Page</p>
        </Link>
      </div>
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
      <ContactPageSection/>
    </main>
  )
}