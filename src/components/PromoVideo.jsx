import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react';
import { trackEvent } from '@/lib/track';

// Autoplays muted (the only way browsers allow autoplay), with a clear
// "tap for sound" prompt. Visitors who prefer reduced motion get a play button
// instead of autoplay.
export default function PromoVideo({ className = 'overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-[hsl(210_100%_12%_/_0.15)] ring-1 ring-[hsl(210_100%_12%_/_0.1)]' }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Native autoplay (rather than calling play()) lets browsers pause the
  // video in background tabs and resume it when the visitor comes back.
  const [autoPlay] = useState(
    () => typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (muted) {
      // First unmute restarts from the top so the voiceover makes sense.
      video.currentTime = 0;
      video.muted = false;
      video.play().catch(() => {});
      setMuted(false);
      trackEvent('promo_video_unmute');
    } else {
      video.muted = true;
      setMuted(true);
    }
  };

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = ended ? 0 : video.currentTime;
    video.play().catch(() => {});
    setEnded(false);
    trackEvent('promo_video_play');
  };

  return (
    <div className={`relative w-full bg-[#f5efe6] ${className}`}>
      <video
        ref={videoRef}
        className="block w-full aspect-video"
        src="/video/trekiq-promo.mp4"
        poster="/video/trekiq-promo-poster.jpg"
        autoPlay={autoPlay}
        muted
        playsInline
        loop={muted}
        preload="metadata"
        aria-label="Trek iQ in 40 seconds: the copilot for accessibility"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setEnded(true); setPlaying(false); trackEvent('promo_video_complete'); }}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))} />

      {!playing &&
      <button
        onClick={play}
        className="absolute inset-0 flex items-center justify-center bg-[hsl(210_100%_12%_/_0.2)] transition hover:bg-[hsl(210_100%_12%_/_0.3)]"
        aria-label={ended ? 'Replay video' : 'Play video'}>
          <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[hsl(var(--primary))] shadow-xl">
            {ended ? <RotateCcw className="w-5 h-5" /> : <Play className="w-5 h-5" fill="currentColor" />}
            {ended ? 'Watch again' : 'Play video'}
          </span>
        </button>
      }

      {playing &&
      <button
        onClick={toggleSound}
        className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[hsl(210_100%_12%_/_0.85)] px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-[hsl(210_100%_12%)]"
        aria-label={muted ? 'Turn sound on' : 'Mute video'}>
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          {muted ? 'Tap for sound' : 'Sound on'}
        </button>
      }

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[hsl(210_100%_12%_/_0.1)]" aria-hidden="true">
        <div className="h-full bg-[hsl(var(--secondary))] transition-[width] duration-200" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
}
