import styles from './style.module.css';
import Image from 'next/image';

const ContactPageSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>
        <p className={styles.loremText}>Lorem ipsum dolor sit amet...</p>
      </section>
      <section className={styles.buttonSection}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.description}>Description</p>
        <a href="#" className={styles.formButton}>
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
            <Image src="/email-icon.png" alt="Email" className={styles.emailIcon} width={100} height={100}/>
            codersclub.gec@gmail.com
          </button>
        </div>
      </section>
    </div>
  );
};

export { ContactPageSection };
