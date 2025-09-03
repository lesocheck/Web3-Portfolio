import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  outlined?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  variant = 'default',
  size = 'md',
  rounded = true,
  outlined = false,
  className,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      className={clsx(
        styles.badge,
        styles[`badge--${variant}`],
        styles[`badge--${size}`],
        {
          [styles['badge--rounded']]: rounded,
          [styles['badge--outlined']]: outlined,
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';