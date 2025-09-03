import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.copyright}>
              © {currentYear} Andrei Beliaev. Built with Next.js, TypeScript & Web3 technologies.
            </p>
          </div>

          <div className={styles.powered}>
            <span className={styles.poweredText}>Powered by</span>
            <div className={styles.techStack}>
              <span className={styles.tech}>Next.js</span>
              <span className={styles.tech}>TypeScript</span>
              <span className={styles.tech}>Web3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}