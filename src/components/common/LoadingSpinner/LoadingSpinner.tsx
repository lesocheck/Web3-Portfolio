import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  centered?: boolean;
  overlay?: boolean;
}

export const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(({
  size = 'md',
  color = 'primary',
  text,
  centered = false,
  overlay = false,
  className,
  ...props
}, ref) => {
  const content = (
    <div
      ref={ref}
      className={clsx(
        styles.container,
        {
          [styles.centered]: centered,
          [styles.overlay]: overlay,
        },
        className
      )}
      {...props}
    >
      <div
        className={clsx(
          styles.spinner,
          styles[`spinner--${size}`],
          styles[`spinner--${color}`]
        )}
        aria-label={text || 'Loading'}
        role="status"
      >
        <div className={styles.circle} />
      </div>
      
      {text && (
        <p className={styles.text} aria-live="polite">
          {text}
        </p>
      )}
    </div>
  );

  return overlay ? (
    <div className={styles.overlayWrapper}>
      {content}
    </div>
  ) : (
    content
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';