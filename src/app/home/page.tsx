'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import { Courgette } from 'next/font/google'
import CircularProgress from '@mui/material/CircularProgress'

const Font = Courgette({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    if (!loading) {
      const weddingDate = new Date('2024-12-01T10:15:00') // 結婚式の日付を設定
      const timer = setInterval(() => {
        const now = new Date()
        const difference = weddingDate.getTime() - now.getTime()

        if (difference <= 0) {
          clearInterval(timer)
          setTimeLeft('結婚式の日です！')
        } else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          )
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)
          setTimeLeft(`${days} ${hours} ${minutes} ${seconds}`)
        }
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [loading])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className={styles.main}>
        {loading ? (
          <div className={styles.center}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className={styles.imageContainer}>
              <Image
                src='/2.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/3.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/4.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/5.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/6.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src='/7.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
            </div>
            <div className={styles.imageContainer} style={{ position: 'relative' }}>
              <Image
                src='/8.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
              <div className={styles.linkContainer}>
                <Link
                  target='_blank'
                  href='https://maps.app.goo.gl/Ho8ksuGVb414jxy86'
                  passHref
                >
                  <Button
                    variant='contained'
                    size='large'
                    color='success'
                    endIcon={<ArrowForwardIcon />}
                  >
                    Googleマップを表示
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer} style={{ position: 'relative' }}>
              <Image
                src='/9.svg'
                className={styles.image}
                alt={''}
                width={100}
                height={100}
                loading='lazy'
              />
              <h1
                className={`${Font.className} ${styles.head}`}
                style={{ fontSize: '4rem' }}
              >
                Count Down
              </h1>
              <div className={styles.countdown}>
                <div
                  className={`${Font.className} ${styles.countdownItem}`}
                  style={{ fontSize: '32px' }}
                >
                  <span className={styles.countdownValue} style={{ fontSize: '4rem' }}>
                    {timeLeft.split(' ')[0]}
                  </span>
                  <span className={styles.countdownLabel}>DAYS</span>
                </div>
                <div className={styles.flex}>
                  <div className={`${Font.className} ${styles.countdownItem}`}>
                    <span className={styles.countdownValue}>
                      {timeLeft.split(' ')[1]}
                    </span>
                    <span className={styles.countdownLabel}>HOURS</span>
                  </div>
                  <div className={`${Font.className} ${styles.countdownItem}`}>
                    <span className={styles.countdownValue}>
                      {timeLeft.split(' ')[2]}
                    </span>
                    <span className={styles.countdownLabel}>MINUTES</span>
                  </div>
                  <div className={`${Font.className} ${styles.countdownItem}`}>
                    <span className={styles.countdownValue}>
                      {timeLeft.split(' ')[3]}
                    </span>
                    <span className={styles.countdownLabel}>SECONDS</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  )
}
