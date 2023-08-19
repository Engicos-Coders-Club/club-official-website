import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/Home.module.css"

export default function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.HeaderBody}>
        <Header />
      </div>

      <div className={styles.homebody}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>

      <div className={styles.footerbody}>
        <Footer />
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
