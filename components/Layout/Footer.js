
import styles from "../../styles/Home.module.css"
import Image from "next/image";

const Footer = () => {

  return (
    <footer>
      <div className={styles.footer}>
        <p>all rights reserved. coders’ club @ 2023.</p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          made with love ♥ at{" "}
          <Image src="/vercel.svg" width={88} height={44} alt="Vercel" className={styles.logo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;