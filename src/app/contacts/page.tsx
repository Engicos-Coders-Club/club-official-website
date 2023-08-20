import Image from 'next/image'
import styles from '../page.module.css'

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link'  

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Contacts</code>
        </p>
        <div>
          <Link href="/">
            By{' '}
            <Image
              src="/logo.jpg"
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
          href="/"
          >
          
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Home page</p>
        </Link>
        <a
          href="https://linktr.ee/codersclub"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linktree <span>-&gt;</span>
          </h2>
          <p>Find all our Links &nbsp;</p>
        </a>
      </div>
    </main>
  )
}
