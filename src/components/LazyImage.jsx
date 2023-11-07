import React, { useRef } from 'react';
import { useEffect } from 'react';

export default function LazyImage({
  src,
  alt = 'img',
  className,
  width,
  height,
  options = {
    root: null,
    rootMargin: '20px',
  },
}) {
  const imgRef = useRef(null);

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
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [options]);

  return (
    <img
      className={className}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
      ref={imgRef}
    />
  );
}
