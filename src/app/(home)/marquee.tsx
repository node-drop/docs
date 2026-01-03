'use client';

import type { ComponentProps, ReactNode } from 'react';

interface MarqueeProps extends ComponentProps<'div'> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const baseClasses = 'group flex overflow-hidden p-2 gap-4';
  const directionClasses = vertical ? 'flex-col' : 'flex-row';
  
  return (
    <div
      {...props}
      className={`${baseClasses} ${directionClasses} ${className}`}
      style={{
        ['--duration' as string]: '40s',
        ['--gap' as string]: '1rem',
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around gap-4 ${
              vertical ? 'flex-col' : 'flex-row'
            } ${vertical ? 'animate-marquee-vertical' : 'animate-marquee'} ${
              pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
            } ${reverse ? '[animation-direction:reverse]' : ''}`}
            style={{
              animation: vertical
                ? 'marquee-vertical var(--duration) linear infinite'
                : 'marquee var(--duration) linear infinite',
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
