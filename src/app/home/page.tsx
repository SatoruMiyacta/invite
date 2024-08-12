'use client'

import Typography from '@mui/material/Typography'
import styles from './page.module.css'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        {/* <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_top.svg" alt="top" fill style={{ objectFit: 'contain', objectPosition: 'top', width: '100%', height: '100%' }} />  
        </section>
        <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_middle.svg" alt="navi" fill style={{ objectFit: 'contain', objectPosition: 'top', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen} style={{ position: 'relative', height: '33.33vh', width: '100vw', overflow: 'hidden' }}>
          <Image src="/home_under.svg" alt="bottom" fill style={{ objectFit: 'contain', objectPosition: 'bottom', width: '100%', height: '100%' }} />
        </section> */}
        <section className={styles.fullscreen}>
          <Image src="/home1.jpg" alt="home1" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/home2.jpg" alt="home2" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/home3.jpg" alt="home3" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/home4.jpg" alt="home4" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/home5.jpg" alt="home5" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/home7.jpg" alt="home7" fill style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </section>
      </main>
    </>
  )
}