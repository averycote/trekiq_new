import React, { useEffect, useState } from 'react';
import DemoCTA from '@/components/DemoCTA';

// Mobile-only bar that keeps the demo button in reach once the hero has
// scrolled away.
export default function StickyDemoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-[hsl(var(--border))] bg-white/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!visible}>
      <DemoCTA location="sticky_mobile" className="w-full" />
    </div>);
}
