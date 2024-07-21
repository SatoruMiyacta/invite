'use client'

import Head from 'next/head';
import Image from 'next/image';
import styles from './home/page.module.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation';

const TopPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className={styles.main} style={{height: '100vh'}}>
        <div className={styles.header}>
          <Image src="/1.svg" alt="top" width={300} height={200} />
        </div>
        <Typography component="h1" variant="h4" align="center" className={styles.centeredText}>
          招待状が届きました
        </Typography>
        <Image src="/2.svg" alt="top" width={600} height={300} />
        <div className={styles.footer}>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}
            onClick={()=>router.push('/home')}
          >
            OPEN
          </Button>
        </div>      
      </div>
    </>
  );
};

export default TopPage;