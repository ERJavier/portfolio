import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Javier Cepeda</title>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="javascript, developer, html, css, react, nodejs" />
        <meta name="description" content="Personal Portfolio | Javier Cepeda | erjavierc@gmail.com" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <nav>
        <a href='#!'>Logo</a>
        <ul>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </nav>

      <main className={styles.main}>

        <section>
          <h1 className={styles.title}>
            Welcome to my personal portfolio!
          </h1>
        </section>

        <p className={styles.description}>
          My name is
          <code className={styles.code}>Javier Cepeda</code>
        </p>

        <h3><a href="#!">Take a look to my projects</a></h3>
        <h3><a href="#!">Contact Me!</a></h3>

        <h2>Technologies I Use</h2>

        <div>
          <img src="../images/nextjs.svg" alt="next.js logo" />

        </div>

      </main>

      <footer className={styles.footer}>
        <section>
        </section>
      </footer>
    </div>
  )
}
