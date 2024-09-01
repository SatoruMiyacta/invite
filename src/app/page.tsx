'use client'

import Head from 'next/head';
import Image from 'next/image';
import styles from './home/page.module.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation';
import PanToolAltRoundedIcon from '@mui/icons-material/PanToolAltRounded';

const TopPage = () => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div style={{ height: '100vh', position: 'relative', backgroundColor: '#fff' }}>
        {/* <div className={styles.header}>
          <Image src="/1.svg" alt="top" width={300} height={200} />
        </div>
        <Typography component="h1" variant="h4" align="center" className={styles.centeredText}>
          招待状が届きました
        </Typography>
        <Image src="/2.svg" alt="top" width={600} height={300} /> */}
        
        <img src="/topTemp.svg" style={{ width: '100%', height: 'auto' }} />
        
        <div style={{ position: 'absolute', bottom: '25px', left: '20px', right: '20px' }}>
          <Button 
            variant="contained" 
            // color="secondary" 
            onClick={() => router.push('/home')}
            size="large"
            endIcon={<PanToolAltRoundedIcon />}
            sx={{ backgroundColor: '#d45ea7', color: '#FFFFFF', padding: '15px 30px', width: '100%', }}
            disableElevation
          >
            ここをクリック !
          </Button>
        </div>      
      </div>
    </>
  );
};

export default TopPage;