import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';
import styles from './Card.module.scss';
// todo explain next line
type Merge<M, N> = Omit<M, keyof N> & N;

interface CardProps extends Merge<React.HTMLAttributes<HTMLDivElement>, MotionProps> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  border?: boolean;
  loading?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  title,
  subtitle,
  hover = false,
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  border = true,
  loading = false,
  className,
  ...props
}, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -2 } : {}}
      className={clsx(
        styles.card,
        styles[`card--padding-${padding}`],
        styles[`card--shadow-${shadow}`],
        styles[`card--rounded-${rounded}`],
        {
          [styles['card--hover']]: hover,
          [styles['card--border']]: border,
          [styles['card--loading']]: loading,
        },
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && (
            <h3 className={styles.title}>
              {loading ? <div className={styles.skeleton} /> : title}
            </h3>
          )}
          {subtitle && (
            <p className={styles.subtitle}>
              {loading ? <div className={styles.skeleton} /> : subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={clsx(styles.content, { [styles.contentWithHeader]: title || subtitle })}>
        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
          </div>
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
});
// todo explain next line
Card.displayName = 'Card';