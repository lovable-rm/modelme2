import { useEffect, useRef, useState } from "react";

interface ScrollingWordsProps {
  words: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ScrollingWords = ({ words, className = "", style }: ScrollingWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        // Disable transition for instant reset
        setTransitionEnabled(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
        
        // Re-enable transition after DOM updates
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const nextIndex = (currentIndex + 1) % words.length;

  return (
    <span 
      className={`relative inline-block overflow-hidden ${className}`} 
      style={{ height: '1.2em', bottom: '-0.05em', left: '0.08em', ...style }}
    >
      <span className="invisible">{words.reduce((a, b) => a.length > b.length ? a : b)}.</span>
      <span 
        className="absolute left-0 flex flex-col transition-transform ease-out"
        style={{
          transform: isAnimating ? 'translateY(-1.1em)' : 'translateY(0)',
          transitionDuration: transitionEnabled ? '400ms' : '0ms',
          top: '0.05em',
        }}
      >
        <span style={{ height: '1.1em', lineHeight: '110%' }}>{words[currentIndex]}.</span>
        <span style={{ height: '1.1em', lineHeight: '110%' }}>{words[nextIndex]}.</span>
      </span>
    </span>
  );
};

export default ScrollingWords;
