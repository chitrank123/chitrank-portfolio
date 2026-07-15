import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Explicit `behavior: 'instant'` bypasses the global `scroll-behavior: smooth`,
    // which otherwise animates this reset and can leave it stuck mid-scroll.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
