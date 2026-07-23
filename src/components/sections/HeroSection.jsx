import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Accessibility, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(210_100%_12%)] text-white">
      {/* Gradient mesh background - heavy blurs hidden on mobile for performance */}
      <div className="absolute inset-0">
        <div className="hidden lg:block absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[hsl(206_64%_49%)] opacity-20 blur-[120px]" />
        <div className="hidden lg:block absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[hsl(206_80%_60%)] opacity-15 blur-[100px]" />
        <div className="hidden lg:block absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-[hsl(210_100%_20%)] opacity-30 blur-[80px]" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-[hsl(206_64%_49%)]/15 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}>
              
              


              
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                Help every visitor understand what to expect{' '}
                <span className="bg-gradient-to-r from-[hsl(206_64%_49%)] to-[hsl(206_80%_65%)] bg-clip-text text-transparent">
                  before they arrive.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
                Trek iQ helps organizations confidently document, improve, and communicate the accessibility of their physical spaces, replacing fragmented reporting with photo-backed profiles that build trust and drive participation.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}>
              
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-xl text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.03] shadow-lg shadow-[hsl(206_64%_49%)]/30"
                style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
                <Link to="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-xl bg-white/5 text-white border border-white/15 hover:bg-white/10 backdrop-blur-sm transition-transform hover:scale-[1.03]">
                <Link to="/sample-audit">
                  See an Accessibility Profile
                </Link>
              </Button>
            </motion.div>

            {/* Key Stat */}
            <motion.div
              className="flex items-center gap-5 pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease }}>
              
              <div className="text-5xl font-bold bg-gradient-to-br from-[hsl(206_64%_49%)] to-[hsl(206_80%_65%)] bg-clip-text text-transparent">
                86%
              </div>
              <p className="text-sm text-white/60 leading-snug max-w-xs">
                of people with disabilities avoided a new venue last year due to lack of accessible information.
              </p>
            </motion.div>
          </div>

          {/* Right: Map-centric visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}>
            
            <MapVisual />
          </motion.div>
        </div>
      </div>
    </section>);

}

function MapVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Glass map container */}
      <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
        {/* Stylized map SVG */}
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(206 64% 49%)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="hsl(210 100% 12%)" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="road" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(206 64% 49%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(206 64% 49%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <rect width="400" height="400" fill="url(#mapBg)" />

          {/* Water body */}
          <path
            d="M 0 280 Q 100 260 200 290 T 400 270 L 400 400 L 0 400 Z"
            fill="hsl(206 64% 49%)"
            fillOpacity="0.08" />
          

          {/* Roads */}
          <path d="M 50 0 L 80 400" stroke="url(#road)" strokeWidth="3" fill="none" />
          <path d="M 0 120 L 400 100" stroke="url(#road)" strokeWidth="3" fill="none" />
          <path d="M 150 0 L 180 250 L 160 400" stroke="url(#road)" strokeWidth="2" fill="none" />
          <path d="M 0 200 Q 200 180 400 210" stroke="url(#road)" strokeWidth="2" fill="none" />
          <path d="M 280 0 L 300 400" stroke="url(#road)" strokeWidth="2.5" fill="none" />

          {/* Blocks */}
          {[
          [100, 30, 40, 35], [100, 80, 40, 30], [100, 140, 40, 30],
          [200, 30, 60, 40], [200, 90, 60, 40], [200, 145, 60, 30],
          [330, 30, 50, 35], [330, 85, 50, 35], [330, 145, 50, 30],
          [100, 225, 50, 40], [100, 280, 50, 40],
          [200, 230, 60, 35], [200, 285, 60, 35],
          [330, 225, 50, 35], [330, 285, 50, 35]].
          map((b, i) =>
          <rect
            key={i}
            x={b[0]} y={b[1]} width={b[2]} height={b[3]}
            fill="white" fillOpacity="0.04"
            rx="3" />

          )}

          {/* Accessibility markers */}
          {[
          { x: 120, y: 100, delay: 0 },
          { x: 230, y: 70, delay: 0.3 },
          { x: 350, y: 110, delay: 0.6 },
          { x: 120, y: 260, delay: 0.9 },
          { x: 230, y: 300, delay: 1.2 },
          { x: 350, y: 260, delay: 1.5 }].
          map((pin, i) =>
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + pin.delay * 0.15, ease }}>
            
              <circle
              cx={pin.x} cy={pin.y} r="14"
              fill="hsl(206 64% 49%)" fillOpacity="0.2" />
            
              <circle cx={pin.x} cy={pin.y} r="8" fill="hsl(206 64% 49%)" />
              <circle cx={pin.x} cy={pin.y} r="3" fill="white" />
            </motion.g>
          )}
        </svg>
      </div>

      {/* Floating glassmorphism profile card 1 */}
      <motion.div
        className="absolute -top-6 -left-6 w-56 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease }}>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[hsl(206_64%_49%)] flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Harbour Hotel</span>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) =>
          <Star key={s} className="w-3 h-3 text-[hsl(206_64%_49%)]" fill="currentColor" />
          )}
          <span className="text-xs text-white/60 ml-1">Accessible</span>
        </div>
        <p className="text-xs text-white/60">Step-free entry · Accessible parking · Audio loops</p>
      </motion.div>

      {/* Floating glassmorphism profile card 2 */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-52 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease }}>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[hsl(206_64%_49%)] flex items-center justify-center">
            <Accessibility className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Waterfront Park</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/60">Mobility</span>
            <span className="text-xs font-semibold text-[hsl(206_80%_65%)]">98%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/60">Sensory</span>
            <span className="text-xs font-semibold text-[hsl(206_80%_65%)]">94%</span>
          </div>
        </div>
      </motion.div>
    </div>);

}
