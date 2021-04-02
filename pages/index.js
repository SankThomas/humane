import Head from "next/head"
import Header from "../components/Header"
import Showcase from "../components/Showcase"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Humane | Humanity's Reference Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Showcase />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
