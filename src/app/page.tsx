import Image from 'next/image'
import styles from './page.module.css'
import { HomepageProjectSection, EventCard, WhatWeDoSection, Footer, PageHeader } from '../components'

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link'  


export default function Home() {
  return (
    <main className={styles.main}>

      <PageHeader title={"GEC CODERS' CLUB"} desc={"for, by & of the students."}/>
      <HomepageProjectSection/>
      
      <WhatWeDoSection />
      
    </main>
  )
}
