import React, { useEffect, useRef } from 'react';

// CSS-only device mockups for showing the product and promo video.

export function Laptop({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-t-[1.25rem] bg-[#1d2127] p-[2.2%] pb-[2.6%] shadow-2xl shadow-black/30 ring-1 ring-white/10">
        <div className="mx-auto mb-[1.2%] h-1.5 w-1.5 rounded-full bg-white/20" aria-hidden="true" />
        <div className="overflow-hidden rounded-[0.35rem] bg-black">{children}</div>
      </div>
      <div className="relative -mx-[6%] h-3 sm:h-4 rounded-b-[1.5rem] bg-gradient-to-b from-[#d9dce1] to-[#a9adb4] shadow-xl" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-lg bg-[#9da1a8]" />
      </div>
    </div>);
}

export function Phone({ children, className = '' }) {
  return (
    <div className={`relative rounded-[2.6rem] bg-[#1d2127] p-2.5 shadow-2xl shadow-black/30 ring-1 ring-white/10 ${className}`}>
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1d2127]" aria-hidden="true" />
      <div className="overflow-hidden rounded-[2.1rem] bg-white aspect-[9/16]">{children}</div>
    </div>);
}

// Muted looping video that only plays while on screen. `startAt` skips an
// intro so the loop stays on the product footage.
export function InViewVideo({ src, poster, label, startAt = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});else video.pause();
    }, { threshold: 0.4 });
    io.observe(video);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className="block h-full w-full object-cover"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      onTimeUpdate={(e) => { if (e.currentTarget.currentTime < startAt) e.currentTarget.currentTime = startAt; }}
      aria-label={label} />);
}
