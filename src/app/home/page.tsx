'use client'

import Typography from '@mui/material/Typography'
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  
  return (
    <>
      <main className={styles.main}>
        <section className={styles.fullscreen}>
          <Image src="/top.svg" alt="top" layout="fill" objectFit="cover" />
        </section>
        <section className={styles.fullscreen}>
          <Image src="/navi.svg" alt="top" layout="fill" objectFit="cover" />
        </section>
        <section>
          <div className={styles.title}>
            <Typography component="div">
              <Typography component="p">謹啓</Typography>
              <Typography component="p">季夏の候 皆様におかれましては</Typography>
              <Typography component="p">益々ご清祥のことと</Typography>
              <Typography component="p">お慶び申し上げます</Typography>
              <Typography component="p">このたび 私たちは</Typography>
              <Typography component="p">結婚式を挙げることとなりました</Typography>
              <Typography component="p">おいそがしいことと存じますが</Typography>
              <Typography component="p">ぜひご参列いただき</Typography>
              <Typography component="p">日頃お世話になっております</Typography>
              <Typography component="p">皆様と一緒に</Typography>
              <Typography component="p">喜びのひとときを過ごさせていただければ</Typography>
              <Typography component="p">幸いに存じます</Typography>
              <Typography component="p">式後ささやかではございますが</Typography>
              <Typography component="p">小宴を催したく存じますので</Typography>
              <Typography component="p">ぜひご出席賜りますよう</Typography>
              <Typography component="p">お願い申し上げます</Typography>
              <Typography component="p">謹白</Typography>
            </Typography>
          </div>
        </section>
        <section>
          <div className={styles.host}>
            <div>
              <div>Host</div>
              <p>Thank you for always supporting us...</p>
            </div>

            <div>
              <div>
                <div></div>
                <div>
                  <div>
                    <div>Groom</div>
                    <span>悟</span>
                  </div>
                  <div>
                    <p>さとる紹介</p>
                  </div>
                </div>
              </div>

              <div>
                <div></div>
                <div>
                  <div>
                    <div>Bride</div>
                    <span>史織</span>
                  </div>
                  <div>
                    <p>しおり紹介</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.count}>
          <div>
            <h2>Countdown</h2>
            <p>Look forward to the day...</p>
          </div>
          <div>
            <div>
              <span>to</span>
              <span id='js-countdown-date' data-countdown-date='2024/12/01 00:00:00'>
                2024.12.01
              </span>
            </div>
            <div>
              <div>
                <span id='js-countdown-days'>188</span>
                <span>DAYS</span>
              </div>
              <div>
                <span id='js-countdown-hours'>6</span>
                <span>HOURS</span>
              </div>
              <div>
                <span id='js-countdown-minutes'>6</span>
                <span>MINUTES</span>
              </div>
              <div>
                <span id='js-countdown-seconds'>15</span>
                <span>SECONDS</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.title}>
          <div>
            <h2>Information</h2>
            <p>Details of our special day</p>
          </div>
          <div>
            <div>
              <h3>
                <span>Wedding Ceremony</span>
                挙式・披露宴
              </h3>
            </div>
            <div>
              <span>2024.12.01</span>
              <span>Sun</span>
            </div>
            <p>
              <span>挙式/ 10:15</span>
              <span>受付/ 09:30</span>
              <span>披露宴/ 12:15</span>
              <span>お披楽喜/ 14:15</span>
            </p>

            <div>
              <h3>
                <span>Venue Access</span>
                アクセス
              </h3>
            </div>
            <div></div>
            <div>
              <p>
                会場/ ザ・ギノザリゾート 美らの教会
                <br />
                沖縄県国頭郡宜野座村字惣慶1182 <br />
              </p>
            </div>
          </div>
        </section>
        <section className={styles.title}>
          <div>
            <h2>Message</h2>
            <p>TO OUR ESTEEMED FRIENDS</p>
          </div>
          <div>
            <div>
              <p>メッセージ</p>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  )
}