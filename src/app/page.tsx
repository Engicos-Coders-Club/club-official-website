import Image from 'next/image'
import styles from './page.module.css'
import { WhatWeBuiltSection, EventCard, WhatWeDoSection, Footer, PageHeader, WordBelt, WhatWeDidSection } from '../components'

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link'  


export default function Home() {
  return (
    <main className={styles.main}>

      <PageHeader title={"GEC Coders' Club"} desc={"for, by & of the students"}/>
      
      <WhatWeDoSection />

      <WordBelt items="Coding" direction="left" />
      <WordBelt items="Coding" direction="right" />
      
      <WhatWeDidSection />

      <WhatWeBuiltSection />
      
    </main>
  )
}
