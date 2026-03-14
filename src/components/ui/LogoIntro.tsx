"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogoIntroProps {
  onComplete: () => void;
}

// Easing curves for cinematic feel
const EASE_FILM  = [0.22, 1, 0.36, 1]   as const;
const EASE_SOFT  = [0.4,  0, 0.2,  1]   as const;
// Smooth ease-out for the zoom — no sudden acceleration
const EASE_ZOOM  = [0.25, 0.1, 0.0, 1]  as const;

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [phase, setPhase] = useState<
    "black" | "draw" | "hold" | "breathe" | "zoom" | "done"
  >("black");
  const [recVisible,  setRecVisible]  = useState(false);
  const [signalBars,  setSignalBars]  = useState(0);

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];

    t.push(setTimeout(() => setRecVisible(true),  300));
    t.push(setTimeout(() => setSignalBars(1),      500));
    t.push(setTimeout(() => setSignalBars(2),      750));
    t.push(setTimeout(() => setSignalBars(3),     1000));
    t.push(setTimeout(() => setPhase("draw"),      600));
    t.push(setTimeout(() => setPhase("hold"),     3400));
    t.push(setTimeout(() => setPhase("breathe"),  4600));
    t.push(setTimeout(() => setPhase("zoom"),     5400));
    t.push(setTimeout(() => { setPhase("done"); onComplete(); }, 7600));

    return () => t.forEach(clearTimeout);
  }, [onComplete]);

  const isVisible = phase !== "done";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000000" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
        >
          {/* ── FILM GRAIN ─────────────────────────────────── */}
          <FilmGrain />

          {/* ── SCANLINES ──────────────────────────────────── */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 4px)",
            }}
          />

          {/* ── VIGNETTE ───────────────────────────────────── */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.82) 100%)",
            }}
          />

          {/* ── AMBIENT RADIAL GLOW ────────────────────────── */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-5"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(242,10,10,0.04) 0%, transparent 70%)",
            }}
            animate={
              phase === "hold" || phase === "breathe"
                ? { opacity: [0.4, 1, 0.4] }
                : { opacity: 0.4 }
            }
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── REC INDICATOR ──────────────────────────────── */}
          <AnimatePresence>
            {recVisible && (
              <motion.div
                className="absolute top-7 right-8 flex items-center gap-2 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-[7px] h-[7px] rounded-full"
                  style={{ backgroundColor: "#F20A0A" }}
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "0.2em",
                  }}
                >
                  REC
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SIGNAL STRENGTH BARS ───────────────────────── */}
          <motion.div
            className="absolute top-7 left-8 flex items-end gap-[3px] z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: recVisible ? 0.4 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {[1, 2, 3].map((bar) => (
              <motion.div
                key={bar}
                style={{
                  width: "3px",
                  height: `${6 + bar * 4}px`,
                  backgroundColor: signalBars >= bar ? "#F20A0A" : "rgba(255,255,255,0.2)",
                  borderRadius: "1px",
                }}
                animate={{
                  backgroundColor:
                    signalBars >= bar ? "#F20A0A" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {/* ── CORNER TIMESTAMPS ──────────────────────────── */}
          <motion.div
            className="absolute bottom-7 left-8 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "draw" || phase === "hold" || phase === "breathe" ? 0.3 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "8px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.15em",
              }}
            >
              EST. 2011
            </span>
          </motion.div>
          <motion.div
            className="absolute bottom-7 right-8 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "draw" || phase === "hold" || phase === "breathe" ? 0.3 : 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "8px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.15em",
              }}
            >
              MUMBAI · IN
            </span>
          </motion.div>

          {/* ── OUTER PULSE RINGS ──────────────────────────── */}
          {[280, 340, 400].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                border: "1px solid rgba(242,10,10,0.12)",
                willChange: "transform, opacity",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={
                phase === "hold" || phase === "breathe"
                  ? {
                      opacity: [0, 0.35 - i * 0.08, 0],
                      scale:   [0.9, 1.06 + i * 0.02, 1.12 + i * 0.02],
                    }
                  : { opacity: 0, scale: 0.9 }
                // Deliberately idle during zoom — reduces GPU layer count
              }
              transition={{
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* ── MAIN LOGO CONTAINER ────────────────────────── */}
          {/*
            Smoothness rules:
            - Only scale + opacity animated (GPU composited, zero paint cost)
            - NO filter/blur during scale (causes per-frame repaint = jank)
            - will-change hoists layer to GPU before animation starts
            - White flash overlay below hides any final-frame aliasing
            - Gentle ease-out so browser pre-renders frames predictably
          */}
          <motion.div
            className="relative flex items-center justify-center z-20"
            style={{ willChange: "transform, opacity" }}
            animate={
              phase === "zoom"
                ? { scale: 18, opacity: 0 }
                : phase === "breathe"
                ? { scale: 1.018 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              phase === "zoom"
                ? {
                    scale:   { duration: 2.0, ease: [0.25, 0.1, 0.0, 1] },
                    opacity: { duration: 0.5, ease: "easeIn", delay: 1.3 },
                  }
                : phase === "breathe"
                ? { duration: 0.8, ease: EASE_SOFT }
                : { duration: 0 }
            }
          >
            {/* Glow behind logo */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 220,
                height: 220,
                background:
                  "radial-gradient(circle, rgba(242,10,10,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              animate={
                phase === "hold" || phase === "breathe"
                  ? { opacity: [0.5, 1, 0.5] }
                  : { opacity: 0.3 }
              }
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* SVG Logo */}
            <motion.div
              className="relative"
              style={{ width: 220, height: 220 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: phase !== "black" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                viewBox="0 0 1600 1600"
                width="100%"
                height="100%"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F20A0A" />
                    <stop offset="50%" stopColor="#FF6666" />
                    <stop offset="100%" stopColor="#F20A0A" />
                  </linearGradient>
                  <linearGradient id="accentGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#ffcccc" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="12" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glowStrong" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="20" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g transform="translate(0,1600) scale(0.1,-0.1)">
                  {/* Outer circle ring */}
                  <DrawPath
                    d="M7740 15803 c-387 -20 -589 -39 -884 -84 -1326 -201 -2590 -758 -3641 -1603 -502 -403 -986 -903 -1362 -1407 -906 -1214 -1420 -2588 -1545 -4124 -17 -213 -17 -957 0 -1170 125 -1534 643 -2918 1543 -4120 736 -984 1699 -1783 2794 -2320 1277 -625 2665 -879 4095 -749 1261 114 2478 546 3545 1257 440 294 794 585 1180 971 302 302 492 520 738 848 608 809 1067 1772 1317 2763 505 1999 204 4141 -831 5900 -1205 2051 -3251 3434 -5564 3764 -450 64 -1011 94 -1385 74z m795 -274 c1512 -102 2957 -668 4145 -1623 222 -179 360 -304 610 -555 457 -458 776 -862 1117 -1416 258 -419 524 -991 690 -1480 210 -623 317 -1142 385 -1880 20 -219 17 -970 -5 -1210 -97 -1036 -342 -1901 -793 -2795 -238 -473 -521 -913 -848 -1320 -224 -278 -648 -722 -906 -947 -1646 -1436 -3791 -2078 -5945 -1777 -888 123 -1762 416 -2555 854 -911 503 -1729 1217 -2367 2063 -863 1146 -1368 2484 -1495 3957 -17 207 -18 1002 0 1200 62 694 197 1333 406 1922 337 947 807 1745 1480 2513 139 158 475 494 641 641 1400 1237 3190 1900 5040 1868 138 -2 318 -9 400 -15z"
                    strokeColor="url(#accentGrad)"
                    strokeWidth={50}
                    duration={2.2}
                    delay={0}
                    active={phase !== "black"}
                    glowFilter="url(#glow)"
                    phase={phase}
                  />

                  {/* Detective figure */}
                  <DrawPath
                    d="M7685 11740 c-373 -11 -557 -30 -752 -79 -97 -24 -219 -88 -263 -137 -136 -156 -208 -575 -246 -1448 -14 -337 -14 -350 4 -385 12 -23 35 -44 63 -58 54 -27 247 -63 343 -63 79 0 106 -9 83 -28 -14 -12 -185 -65 -327 -101 -47 -12 -111 -31 -143 -42 -31 -10 -80 -19 -107 -19 -58 0 -61 8 -30 70 11 22 20 51 20 65 0 35 -40 72 -86 81 -94 18 -496 -44 -728 -111 -264 -76 -392 -198 -332 -313 52 -99 276 -247 681 -450 175 -88 333 -154 580 -243 133 -48 157 -66 175 -137 6 -26 26 -74 43 -106 22 -40 28 -60 20 -63 -38 -14 -161 -160 -255 -304 -100 -154 -143 -289 -119 -371 20 -67 20 -66 334 -406 48 -52 97 -112 108 -134 11 -21 31 -87 44 -146 13 -59 38 -147 55 -197 18 -49 40 -117 50 -150 36 -121 151 -410 170 -430 18 -17 36 -20 141 -23 131 -4 159 0 183 24 24 24 19 61 -19 139 -49 98 -52 146 -25 318 30 183 30 182 -99 278 -114 86 -291 264 -331 334 -43 76 -55 134 -95 480 -26 224 -54 418 -69 480 -9 33 -15 66 -16 73 0 17 67 16 120 -3 96 -34 247 -57 403 -62 l158 -6 75 37 c67 34 79 44 122 108 57 85 80 104 107 85 17 -13 17 -22 7 -133 -6 -65 -21 -202 -32 -304 -12 -102 -18 -200 -15 -219 4 -19 19 -47 35 -63 24 -24 36 -28 83 -28 53 0 87 -18 87 -47 0 -25 -43 -61 -86 -73 -38 -11 -49 -19 -61 -47 -17 -43 -8 -98 20 -118 14 -10 46 -15 94 -15 86 0 94 -13 33 -54 -59 -39 -58 -72 6 -131 l44 -41 0 -82 c0 -77 -2 -83 -31 -116 -23 -27 -48 -41 -98 -56 -37 -11 -75 -28 -85 -39 -21 -23 -13 -60 19 -91 22 -21 24 -21 105 -6 45 9 91 16 101 16 46 0 10 -32 -102 -91 -140 -74 -182 -110 -220 -194 -26 -59 -59 -207 -59 -268 0 -43 50 -89 92 -85 58 6 78 53 103 250 7 54 56 133 95 154 14 7 73 35 131 62 193 90 365 216 880 646 52 43 130 108 174 145 44 36 116 100 160 142 44 42 117 107 161 145 45 38 126 108 180 155 102 89 138 113 156 107 13 -5 -129 -160 -253 -274 -199 -185 -323 -291 -554 -474 -55 -44 -134 -107 -175 -140 -41 -34 -106 -82 -145 -107 -38 -26 -88 -63 -110 -82 -22 -20 -76 -62 -120 -94 -44 -32 -109 -79 -144 -105 -35 -26 -98 -72 -141 -102 -80 -57 -180 -153 -180 -173 0 -7 -16 -44 -35 -82 -47 -96 -53 -127 -26 -154 l20 -20 1429 -1 1429 0 26 24 27 25 0 286 c0 250 -2 291 -17 315 -10 18 -52 48 -108 79 -51 28 -95 51 -98 51 -7 0 -181 97 -314 175 -91 53 -126 56 -181 16 -15 -10 -55 -34 -87 -52 -33 -17 -127 -72 -208 -121 -82 -49 -150 -88 -151 -86 -2 2 64 66 147 143 83 77 168 166 190 197 l40 57 -12 103 c-6 57 -16 126 -22 153 -5 28 -14 84 -19 125 -20 169 -50 373 -61 414 -23 92 -88 106 -154 34 -22 -24 -69 -68 -105 -98 -36 -30 -104 -90 -152 -132 -47 -43 -91 -78 -97 -78 -21 0 -11 28 35 95 56 82 134 237 164 324 34 103 57 233 75 426 19 205 30 241 77 258 69 25 298 142 418 213 232 138 385 297 412 427 12 54 11 61 -11 103 -67 126 -316 265 -617 343 -117 31 -294 66 -384 76 -114 13 -116 23 -17 61 84 32 127 70 127 111 0 82 -138 620 -265 1038 -19 61 -41 137 -50 170 -58 207 -119 354 -158 379 -36 24 -192 53 -347 65 -195 15 -783 20 -1115 11z"
                    strokeColor="url(#accentGrad)"
                    strokeWidth={35}
                    duration={2.0}
                    delay={0.3}
                    active={phase !== "black"}
                    glowFilter="url(#glow)"
                    phase={phase}
                  />

                  {/* HS Text box */}
                  <DrawPath
                    d="M2847 4643 c-4 -3 -7 -426 -7 -940 l0 -933 5200 0 5200 0 0 940 0 940 -5193 0 c-2857 0 -5197 -3 -5200 -7z"
                    strokeColor="url(#accentGradWhite)"
                    strokeWidth={35}
                    duration={1.6}
                    delay={0.6}
                    active={phase !== "black"}
                    glowFilter="url(#glow)"
                    phase={phase}
                  />

                  {/* Top arc / bracket */}
                  <DrawPath
                    d="M7929 13041 c-34 -35 -38 -77 -10 -112 l19 -24 1960 -5 c1640 -4 1962 -7 1975 -19 16 -12 17 -152 17 -1821 0 -1796 0 -1807 20 -1833 11 -14 33 -28 49 -32 34 -7 85 15 95 41 3 9 6 864 6 1901 0 1388 -3 1889 -11 1899 -6 8 -28 18 -48 24 -24 6 -719 10 -2039 10 l-2004 0 -29 -29z"
                    strokeColor="url(#accentGradWhite)"
                    strokeWidth={35}
                    duration={1.6}
                    delay={0.85}
                    active={phase !== "black"}
                    glowFilter="url(#glow)"
                    phase={phase}
                  />

                  {/* Left panel bracket */}
                  <DrawPath
                    d="M3850 8953 c-8 -3 -23 -12 -32 -21 -17 -14 -18 -126 -18 -2092 0 -2060 0 -2077 20 -2095 19 -17 109 -18 2046 -17 l2027 1 23 22 c32 30 32 79 0 116 l-24 28 -1024 2 c-562 2 -1437 3 -1943 3 -562 0 -926 4 -935 10 -13 8 -16 246 -20 2011 l-5 2001 -24 19 c-22 18 -60 23 -91 12z"
                    strokeColor="url(#accentGradWhite)"
                    strokeWidth={35}
                    duration={1.8}
                    delay={1.05}
                    active={phase !== "black"}
                    glowFilter="url(#glow)"
                    phase={phase}
                  />
                </g>
              </svg>

              {/* Glowing center eye — appears in hold */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#F20A0A",
                  boxShadow: "0 0 12px 6px rgba(242,10,10,0.6)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  phase === "hold" || phase === "breathe" || phase === "zoom"
                    ? { opacity: [0, 1, 0.8], scale: [0, 1.3, 1] }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </motion.div>
          </motion.div>

          {/* ── AGENCY NAME ────────────────────────────────── */}
          <motion.div
            className="absolute z-20"
            style={{ bottom: "18%" }}
            initial={{ opacity: 0, y: 14 }}
            animate={
              phase === "hold" || phase === "breathe"
                ? { opacity: 1, y: 0 }
                : phase === "zoom"
                ? { opacity: 0, y: -8 }
                : { opacity: 0, y: 14 }
            }
            transition={{ duration: 1.0, ease: EASE_FILM }}
          >
            <motion.p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                color: "#ffffff",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "8px",
              }}
              animate={
                phase === "hold" || phase === "breathe"
                  ? { opacity: [0.85, 1, 0.85] }
                  : { opacity: 1 }
              }
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              H S Detectives
            </motion.p>
            <motion.p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(8px, 1vw, 10px)",
                color: "rgba(242,10,10,0.75)",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Est. 2011 · Licensed · Confidential
            </motion.p>
          </motion.div>

          {/* ── HORIZONTAL SCAN LINE (sweeps during draw) ──── */}
          <ScanSweep active={phase === "draw"} />

          {/* ── BOTTOM PROGRESS BAR ────────────────────────── */}
          <motion.div
            className="absolute bottom-0 left-0 z-30"
            style={{ height: "1.5px", backgroundColor: "rgba(242,10,10,0.6)" }}
            initial={{ width: "0%" }}
            animate={{
              width:
                phase === "draw"
                  ? "45%"
                  : phase === "hold"
                  ? "78%"
                  : phase === "breathe"
                  ? "92%"
                  : phase === "zoom"
                  ? "100%"
                  : "0%",
            }}
            transition={{ duration: 1.2, ease: EASE_SOFT }}
          />

          {/* ── ZOOM FLASH + CURTAIN ───────────────────────── */}
          {/*
            Two-layer exit strategy:
            Layer 1 — White flash fires at delay:0.8s (while scale is ~3-4x,
              still looks clean). Jumps to full opacity then immediately
              fades — this completely hides the ugly large-scale frames.
            Layer 2 — Black curtain wipes up from bottom behind the flash,
              so when the flash fades the site is already revealed cleanly.
            Result: user sees zoom → white burst → website. Zero jank visible.
          */}
          <AnimatePresence>
            {phase === "zoom" && (
              <>
                {/* White flash — fires early, masks large-scale frames */}
                <motion.div
                  key="flash"
                  className="absolute inset-0 z-60"
                  style={{
                    backgroundColor: "#ffffff",
                    willChange: "opacity",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    duration: 1.0,
                    delay: 0.85,
                    times: [0, 0.01, 0.15, 0.35, 1],
                    ease: "easeOut",
                  }}
                />

                {/* Black curtain — wipes upward behind the flash */}
                <motion.div
                  key="curtain"
                  className="absolute inset-0 z-55"
                  style={{
                    backgroundColor: "#000000",
                    willChange: "clip-path",
                  }}
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{
                    duration: 0.7,
                    delay: 1.15,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── DrawPath: animates SVG path with stroke draw-on ─────────
interface DrawPathProps {
  d: string;
  strokeColor: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  active: boolean;
  glowFilter?: string;
  phase: string;
}

function DrawPath({
  d,
  strokeColor,
  strokeWidth,
  duration,
  delay,
  active,
  glowFilter,
  phase,
}: DrawPathProps) {
  const isHold = phase === "hold" || phase === "breathe" || phase === "zoom";

  // Drop the SVG glow filter during zoom — feGaussianBlur forces
  // a full offscreen rasterise on every scale frame which causes
  // significant jank. The white flash hides this anyway.
  const activeFilter = phase === "zoom" ? undefined : glowFilter;

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      filter={activeFilter}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ willChange: "opacity" }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        active
          ? {
              pathLength: 1,
              opacity: isHold ? [0.75, 1, 0.75] : 1,
            }
          : { pathLength: 0, opacity: 0 }
      }
      transition={
        isHold
          ? {
              pathLength: { duration, ease: [0.22, 1, 0.36, 1], delay },
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5,
              },
            }
          : {
              pathLength: { duration, ease: [0.22, 1, 0.36, 1], delay },
              opacity:    { duration: 0.4, delay },
            }
      }
    />
  );
}

// ─── FilmGrain: pure CSS noise — zero JS overhead ─────────────
function FilmGrain() {
  return (
    <>
      <style>{`
        @keyframes grain-flicker {
          0%,100% { opacity: 0.030; }
          50%      { opacity: 0.055; }
        }
        .film-grain {
          animation: grain-flicker 0.12s linear infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
      `}</style>
      <div
        className="film-grain absolute inset-0 pointer-events-none z-8"
      />
    </>
  );
}

// ─── ScanSweep: horizontal line that sweeps down ──────────────
function ScanSweep({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute left-0 right-0 pointer-events-none z-30"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(242,10,10,0.5) 30%, rgba(255,255,255,0.8) 50%, rgba(242,10,10,0.5) 70%, transparent 100%)",
          }}
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: ["0%", "100%"], opacity: [0, 0.8, 0.8, 0] }}
          transition={{
            duration: 2.4,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
}