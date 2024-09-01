'use client'

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import CircularWithValueLabel from '@/ui/CircularProgressWithLabel';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const images = [
      "/ho2.svg",
      "/ho3.svg",
      "/ho4.svg",
      "/ho5.svg",
      "/ho6.svg",
      "/ho7.svg"
    ];

    let loadedImages = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        {loading ? (
          <div className={styles.center}>
            <CircularWithValueLabel progress={progress} />
          </div>
        ) : (
          imagesLoaded && (
            <>
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
              <div className={styles.imageContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5867219024108!2d127.96559471179587!3d26.46904748522975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e500b0103496c7%3A0x1cae532607091d3f!2z44K244O744Ku44OO44K244Oq44K-44O844OIIOe-juOCieOBruaVmeS8mg!5e0!3m2!1sja!2sjp!4v1725155081257!5m2!1sja!2sjp"
                  width="100%"
                  height="300px"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </>
          )
        )}
      </main>
    </>
  );
}