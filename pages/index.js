import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pequenico online!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image src="/familia.png" alt="Familia Coruja" width={252} height={122} />
        <p className={styles.paragraph}>Peque<strong>Nico</strong> ao vivo na palma da sua mão!</p>

        {/* <img className={styles.video} src="http://bercario3-2.einstein24h.com.br:85/mjpg/video.mjpg"/>
        <img className={styles.video} src="http://bercario3.einstein24h.com.br:83/mjpg/video.mjpg"/> */}

        <iframe className={styles.video} src="http://bercario3-2.einstein24h.com.br:85/mjpg/video.mjpg"></iframe>
        <iframe className={styles.video} src="http://bercario3.einstein24h.com.br:83/mjpg/video.mjpg"></iframe>

      </main>

    </div>
  )
}
