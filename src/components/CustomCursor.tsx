import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over a link or button
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide the custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  const ringSize = isHovering ? 56 : 28;

  return (
    <>
      {/* Precise dot: tracks instantly, hides on hover since the ring takes over */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[10000] mix-blend-difference bg-white"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.08 }}
      />

      {/* Trailing ring: outlined normally, inverts to a filled disc on hover.
          mix-blend-difference means it self-adjusts contrast over both the
          dark sidebar and the light paper content, no per-section overrides needed. */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference border-2 border-white"
        animate={{
          x: mousePosition.x - ringSize / 2,
          y: mousePosition.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 26, mass: 0.4 }}
      />
    </>
  );
};

export default CustomCursor;
