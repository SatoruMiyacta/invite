'use client'

import Typography from '@mui/material/Typography'
import styles from './page.module.css'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

  return (
    <>
      <main className={styles.main}>
      <div className={styles.imageContainer}>
          <img src="/ho2.svg" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ho3.svg" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ho4.svg" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ho5.svg" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ho6.svg" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ho7.svg" className={styles.image} />
        </div>
        {/* <div className={styles.fullscreen} style={{ height: '40vh' }}>
          <Image src="/web2.svg" alt="navi" fill className={styles.responsiveImage} />
        </div>
        <div className={styles.fullscreen} style={{ height: '30vh' }}>
          <Image src="/web3.svg" alt="bottom" fill className={styles.responsiveImage} />
        </div>
        <div className={styles.fullscreen} style={{ height: '10vh', width: '100px' }}>
          <Image src="/web5.svg" alt="top" fill className={styles.responsiveImage} />
        </div>
        <div className={styles.fullscreen} style={{ height: '60vh' }}>
        <p style={{ color: 'blur' }}>
            {"拝啓　〇〇の候　皆様にはお健やかにお過ごしのこととお慶び申し上げます\n\nこのたび　私たちは沖縄にて結婚式を挙げることとなりました\n\n皆様にはご参列いただけるとのこと心より嬉しく思っております\n\n遠方からのお越しで大変恐縮ではございますが皆様と一緒に楽しいひとときを過ごすことができれば幸いです\n\n沖縄で皆様とお会いできることを楽しみにしております\n\n敬具\n\n２０２４年８月吉日\n宮下 悟　　佐藤 史織"}
          </p>
        </div>
        <div className={styles.fullscreen} style={{ height: '30vh' }}>
          <Image src="/web7.svg" alt="bottom" fill className={styles.responsiveImage} />
        </div> */}
      </main>
    </>
  )
}