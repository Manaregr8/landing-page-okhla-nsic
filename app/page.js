import Image from 'next/image';
import styles from './page.module.css';
import logo from '../assets/logo.png';
import bg from '../assets/without_line_background.jpeg';

export default function Home() {
  const cards = [
    { id: 1, title: 'Maison Verre', subtitle: 'INTERIORS' },
    { id: 2, title: 'Aureum & Co.', subtitle: 'PRIVATE WEALTH' },
    { id: 3, title: 'Penteli Estates', subtitle: 'REAL ESTATE' },
    { id: 4, title: 'Kalio Cellars', subtitle: 'VINTNERS' },
    { id: 5, title: 'Cassiel Beau', subtitle: 'JEWELLERS' },
    { id: 6, title: 'Halcyon Motors', subtitle: 'AUTOMOBILES' },
    { id: 7, title: 'Beau Rêve', subtitle: 'CHAMPAGNE' },
    { id: 8, title: 'Meridian Watch', subtitle: 'HOROLOGY' },
  ];

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
          <div className={styles.tagline}>
            <span className={styles.taglineLine}></span>
            <span className={styles.taglineText}>THE HOUSE & ITS NEIGHBOURS</span>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="spacetime logo"
              height={30}
              className={styles.logoImage}
              priority
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heading}>
            Sixteen houses of<br />
            <span className={styles.goldItalic}>good taste,</span><br />
            in one quiet room.
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
                {cards.slice(0, 4).concat(cards.slice(0, 4)).map((card, idx) => (
                  <div
                    key={`r1-${card.id}-${idx}`}
                    className={styles.card}
                  >
                    <div className={styles.cardLeft}>
                      <svg viewBox="0 0 24 24" className={styles.cardStar} fill="currentColor">
                        <path d="M12 4Q12 12 20 12Q12 12 12 20Q12 12 4 12Q12 12 12 4Z" />
                      </svg>
                      <div className={styles.cardInfo}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardSubtitle}>{card.subtitle}</p>
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <svg viewBox="0 0 24 24" className={styles.cardArrow} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row: Left to Right */}
            <div className={styles.marqueeContainer}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeRight}`}>
                {cards.slice(4, 8).concat(cards.slice(4, 8)).map((card, idx) => (
                  <div
                    key={`r2-${card.id}-${idx}`}
                    className={styles.card}
                  >
                    <div className={styles.cardLeft}>
                      <svg viewBox="0 0 24 24" className={styles.cardStar} fill="currentColor">
                        <path d="M12 4Q12 12 20 12Q12 12 12 20Q12 12 4 12Q12 12 12 4Z" />
                      </svg>
                      <div className={styles.cardInfo}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardSubtitle}>{card.subtitle}</p>
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <svg viewBox="0 0 24 24" className={styles.cardArrow} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
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
