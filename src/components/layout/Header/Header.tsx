'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button } from '@/components/common';
import styles from './Header.module.scss';

const navigation = [
  { name: 'Portfolio', href: '/' },
  { name: 'Ethereum', href: '/ethereum' },
  { name: 'Solana', href: '/solana' },
  { name: 'TON', href: '/ton' },
];

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:belyaev.andrey.hr@gmail.com',
    icon: FiMail,
  },
  {
    name: 'GitHub', 
    href: 'https://github.com/lesocheck',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/beliaev-andrei/',
    icon: FiLinkedin,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>Web3 Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={mobileMenuOpen ? <FiX /> : <FiMenu />}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileNav}
          >
            <div className={styles.mobileNavContent}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className={styles.mobileSocialLinks}>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={styles.mobileSocialLink}
                      aria-label={link.name}
                    >
                      <Icon className={styles.mobileSocialIcon} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}