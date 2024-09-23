'use client'

import Head from 'next/head'
import Image from 'next/image'
import styles from './home/page.module.css'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import PanToolAltRoundedIcon from '@mui/icons-material/PanToolAltRounded'

const TopPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>招待状</title>
        <meta name='description' content='結婚式当日の招待状です。' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div style={{ height: '100vh', position: 'relative', backgroundColor: '#fff' }}>
        <Image
          src='/1.svg'
          className={styles.image}
          alt={''}
          width={100}
          height={100}
          priority
        />

        <div
          style={{ position: 'absolute', bottom: '25px', left: '20px', right: '20px' }}
        >
          <Button
            variant='contained'
            onClick={() => router.push('/home')}
            size='large'
            endIcon={<PanToolAltRoundedIcon />}
            sx={{
              backgroundColor: '#d45ea7',
              color: '#FFFFFF',
              padding: '15px 30px',
              width: '100%',
            }}
            disableElevation
          >
            ここをクリック !
          </Button>
        </div>
      </div>
    </>
  )
}

export default TopPage
