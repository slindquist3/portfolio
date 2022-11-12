import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ButtonDemo from "../components/ButtonDemo";

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
            <Link href="/pokedex">Pokedex</Link>
          </li>

        </ul>
      </nav>

      <p>This page was built with React, Next, and styled-components.</p>

      <ButtonDemo />




    </div>
  )
}
