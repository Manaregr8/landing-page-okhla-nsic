import Image from 'next/image';
import styles from './page.module.css';
import logo from '../assets/logo.png';
import bg from '../assets/without_line_background.jpeg';

// Import banner logos
import artLogo from '../assets/bannerLogo/art.png';
import betterCollectiveLogo from '../assets/bannerLogo/bettercollective.svg';
import boltLogo from '../assets/bannerLogo/bolt.png';
import energiaLogo from '../assets/bannerLogo/energia.png';
import hoccoLogo from '../assets/bannerLogo/hocco.svg';
import kraftshalaLogo from '../assets/bannerLogo/kraftshala.svg';
import kudratLogo from '../assets/bannerLogo/kudrat.svg';
import lenskartLogo from '../assets/bannerLogo/lenskartlogo.svg';
import norvicLogo from '../assets/bannerLogo/norvic.svg';

import onPurposeLogo from '../assets/bannerLogo/on purpose.png';
import redbusLogo from '../assets/bannerLogo/redbus.png';
import renewablesLogo from '../assets/bannerLogo/renewables.png';
import smWebpLogo from '../assets/bannerLogo/sm.webp';
import ukindiaLogo from '../assets/bannerLogo/ukindia.svg';
import vitrayaLogo from '../assets/bannerLogo/vitraya.svg';
import waareeLogo from '../assets/bannerLogo/waaree.png';
import wisemonkLogo from '../assets/bannerLogo/wisemonk.svg';
import wndlaLogo from '../assets/bannerLogo/wndla.png';

export default function Home() {
  const logosRow1 = [
    { id: 'art', src: artLogo, alt: 'Art Logo' },
    { id: 'bettercollective', src: betterCollectiveLogo, alt: 'Better Collective Logo' },
    { id: 'bolt', src: boltLogo, alt: 'Bolt Logo' },
    { id: 'energia', src: energiaLogo, alt: 'Energia Logo' },
    { id: 'hocco', src: hoccoLogo, alt: 'Hocco Logo' },
    { id: 'kraftshala', src: kraftshalaLogo, alt: 'Kraftshala Logo' },
    { id: 'kudrat', src: kudratLogo, alt: 'Kudrat Logo' },
    { id: 'lenskart', src: lenskartLogo, alt: 'Lenskart Logo' },
    { id: 'norvic', src: norvicLogo, alt: 'Norvic Logo' },
  ];

  const logosRow2 = [
    { id: 'onpurpose', src: onPurposeLogo, alt: 'On Purpose Logo' },
    { id: 'redbus', src: redbusLogo, alt: 'Redbus Logo' },
    { id: 'renewables', src: renewablesLogo, alt: 'Renewables Logo' },
    { id: 'smwebp', src: smWebpLogo, alt: 'SM Logo Webp' },
    { id: 'ukindia', src: ukindiaLogo, alt: 'UK India Logo' },
    { id: 'vitraya', src: vitrayaLogo, alt: 'Vitraya Logo' },
    { id: 'waaree', src: waareeLogo, alt: 'Waaree Logo' },
    { id: 'wisemonk', src: wisemonkLogo, alt: 'Wisemonk Logo' },
    { id: 'wndla', src: wndlaLogo, alt: 'Wndla Logo' },
  ];

  // Repeat logos to ensure a seamless infinite marquee effect
  const marqueeRow1 = [...logosRow1, ...logosRow1, ...logosRow1];
  const marqueeRow2 = [...logosRow2, ...logosRow2, ...logosRow2];

  return (
    <main className={styles.main}>
      {/* Background Image Container */}
      <div className={styles.bgContainer}>
        <Image
          src={bg}
          alt="Luxury interior background"
          fill
          priority
          placeholder="blur"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay}></div>
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="spacetime logo"
              height={40}
              className={styles.logoImage}
              priority
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heading}>
            An address for those who’ve<br />
            <span className={styles.goldItalic}> outgrown the ordinary.</span><br />
          </h1>

          {/* Decorative Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.starWrapper}>
              <svg viewBox="0 0 24 24" className={styles.starIcon} fill="currentColor">
                <path d="M12 2Q12 12 22 12Q12 12 12 22Q12 12 2 12Q12 12 12 2Z" />
              </svg>
            </div>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Infinite Marquee Rows */}
          <div className={styles.marqueeSection}>
            {/* First Row: Right to Left */}
            <div className={styles.marqueeContainer}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeLeft}`}>
                {marqueeRow1.map((logo, idx) => (
                  <div
                    key={`r1-${logo.id}-${idx}`}
                    className={styles.logoCard}
                  >
                    <div className={styles.logoImageWrapper}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 180px, 220px"
                        className={styles.logoImageInside}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row: Left to Right */}
            <div className={styles.marqueeContainer}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeRight}`}>
                {marqueeRow2.map((logo, idx) => (
                  <div
                    key={`r2-${logo.id}-${idx}`}
                    className={styles.logoCard}
                  >
                    <div className={styles.logoImageWrapper}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 180px, 220px"
                        className={styles.logoImageInside}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
