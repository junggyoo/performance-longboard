import { useEffect } from 'react';

export default function useImgLazyLoading(ref, options = {}) {
  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.disconnect();
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);
}
