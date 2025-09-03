import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';
import styles from './Button.module.scss';

// Merge HTML button props with motion props
// todo explain
type Merge<M, N> = Omit<M, keyof N> & N;

interface ButtonProps
  extends Merge<React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      ref={ref}
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.1 }}
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles['button--loading']]: loading,
          [styles['button--full-width']]: fullWidth,
          [styles['button--disabled']]: isDisabled,
        },
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <div className={styles.spinner} aria-hidden="true">
          <div className={styles.spinnerIcon} />
        </div>
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className={styles.iconLeft} aria-hidden="true">
          {icon}
        </span>
      )}
      
      {children && (
        <span className={clsx(styles.content, { [styles.contentHidden]: loading })}>
          {children}
        </span>
      )}
      
      {!loading && icon && iconPosition === 'right' && (
        <span className={styles.iconRight} aria-hidden="true">
          {icon}
        </span>
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';