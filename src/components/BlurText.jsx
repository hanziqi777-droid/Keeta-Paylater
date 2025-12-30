import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const BlurText = ({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible && onAnimationComplete) {
      // 估算动画完成时间：每个单词约 100ms + delay
      const words = text.split(' ');
      const animationDuration = delay + words.length * 100 + 500; // 500ms 为额外缓冲
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, text, delay, onAnimationComplete]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'top':
        return 'translate-y-[-20px]';
      case 'bottom':
        return 'translate-y-[20px]';
      case 'left':
        return 'translate-x-[-20px]';
      case 'right':
        return 'translate-x-[20px]';
      default:
        return 'translate-y-[-20px]';
    }
  };

  if (animateBy === 'words') {
    const words = text.split(' ');
    return (
      <span className={cn('inline-block', className)} {...props}>
        {words.map((word, index) => (
          <span
            key={index}
            className={cn(
              'inline-block transition-all duration-700 ease-out',
              isVisible
                ? 'opacity-100 blur-0 translate-x-0 translate-y-0'
                : `opacity-0 blur-md ${getDirectionClass()}`
            )}
            style={{
              transitionDelay: `${delay + index * 100}ms`,
            }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        ))}
      </span>
    );
  }

  // 如果 animateBy 不是 'words'，则整个文本一起动画
  return (
    <span
      className={cn(
        'inline-block transition-all duration-500 ease-out',
        isVisible
          ? 'opacity-100 blur-0 translate-x-0 translate-y-0'
          : `opacity-0 blur-md ${getDirectionClass()}`,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {text}
    </span>
  );
};

export default BlurText;

