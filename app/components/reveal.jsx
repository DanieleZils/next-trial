'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function useInView(options) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -12% 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, shown] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function RevealImage({
  src,
  alt,
  className = '',
  ratio = 'aspect-[4/3]',
  delay = 0,
  sizes,
  quality = 85,
  priority = false,
}) {
  const [ref, shown] = useInView({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative ${ratio} w-full overflow-hidden border border-border bg-muted transition-opacity duration-700 ease-out ${
        shown ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        sizes={sizes}
        priority={priority}
        className={`object-cover object-center transition-transform duration-[1400ms] ease-out will-change-transform ${
          shown ? 'scale-100' : 'scale-[1.06]'
        }`}
      />
    </div>
  );
}
