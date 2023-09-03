import styles from './style.module.css';
import Image from 'next/image';
import emailIcon from '../../../public/mail.png';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>
        <p className={styles.text}>Lorem ipsum dolor sit amet...</p>
      </section>
      <section className={styles.buttonSection}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.description}>Description</p>
        <a href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfY24F2SeC1G7SQkKIq9GvUC5-DmIBPZfXPEH7gc096jou8ew/alreadyresponded?usp=send_form" className={styles.formButton}>
          Fill the form <span className={styles.arrow}>&rarr;</span>
        </a>
      </section>
      <section className={styles.twoColumnSection}>
        <div className={styles.addressColumn}>
          <h2 className={styles.addressTitle}>Address</h2>
          <p className={styles.actualAddress}>123 Street, City, Country</p>
        </div>
        <div className={styles.touchColumn}>
          <h2 className={styles.touchTitle}>GET IN TOUCH</h2>
          <button className={styles.copyButton}>
            <Image src={emailIcon} alt="Email" className={styles.emailIcon} width={100} height={100}/>
            codersclub.gec@gmail.com
          </button>
        </div>
      </section>
    </div>
  );
};
