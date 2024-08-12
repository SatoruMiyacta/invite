'use client'

import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.fullscreen}>
          <Image src="/ho2.svg" alt="home2" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/ho3.svg" alt="home3" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/ho4.svg" alt="home4" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/ho5.svg" alt="home5" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/ho6.svg" alt="home6" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/ho7.svg" alt="home7" className={styles.responsiveImage} layout="responsive" width={1920} height={1080} />
        </section>
      </main>
    </>
  )
}

        {/* <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_top.svg" alt="top" fill style={{ objectFit: 'contain', objectPosition: 'top', width: '100%', height: '100%' }} />  
        </section>
        <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_middle.svg" alt="navi" fill style={{ objectFit: 'contain', objectPosition: 'top', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_under.svg" alt="bottom" fill style={{ objectFit: 'contain', objectPosition: 'bottom', width: '100%', height: '100%' }} />
        </section> */}
        {/* <section className={styles.fullscreen}>
          <Image src="/ho1.svg" alt="home1" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section> */}