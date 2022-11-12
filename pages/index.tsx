import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scott Lindquist</title>
        <meta name="description" content="My portfolio" />
      </Head>

      Scott Lindquist
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}
