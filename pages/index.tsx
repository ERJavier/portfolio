import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Javier Cepeda</title>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="javascript, developer, html, css, react, nodejs" />
        <meta name="description" content="Personal portfolio | Javier Cepeda | erjavierc@gmail.com" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <nav>
        <a href='#!'>Logo</a>
        <ul>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
