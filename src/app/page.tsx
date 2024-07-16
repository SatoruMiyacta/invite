'use client'

import Head from 'next/head';
import Image from 'next/image';
import styles from './home/page.module.css'

const TopPage = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className={styles.main} style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/top.svg" alt="top" width={720} height={1200} layout="responsive" objectFit="cover" />
      </div>
    </>
  );
};

export default TopPage;
