"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,43,36,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,43,36,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-kogrix-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            L&apos;IA qui fait tourner{" "}
            <span className="text-gradient">votre entreprise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl"
          >
            Diagnostic gratuit, implémentation sur mesure et accompagnement stratégique pour les PME qui veulent passer a la vitesse supérieure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#diagnostic"
              className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover"
            >
              Diagnostic gratuit
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all group"
            >
              Voir la demo
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex gap-8 sm:gap-12"
          >
            {[
              { value: 45, suffix: "min", label: "diagnostic offert" },
              { value: 10, suffix: "h/sem", label: "gagnées en moyenne" },
              { value: 3, suffix: "x", label: "ROI moyen" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side — Big Logo with 3D orbital effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            {/* Orbital rings behind logo */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full border border-kogrix-400/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] rounded-full border border-kogrix-400/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[280px] h-[280px] rounded-full border border-kogrix-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting dots on the rings */}
            {[
              { size: 420, duration: 30, delay: 0, dotSize: "w-2.5 h-2.5" },
              { size: 420, duration: 30, delay: 15, dotSize: "w-2 h-2" },
              { size: 350, duration: 25, delay: 5, dotSize: "w-2 h-2" },
              { size: 350, duration: 25, delay: 18, dotSize: "w-1.5 h-1.5" },
              { size: 280, duration: 20, delay: 3, dotSize: "w-3 h-3" },
              { size: 280, duration: 20, delay: 13, dotSize: "w-2 h-2" },
            ].map((orbit, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ width: orbit.size, height: orbit.size }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: orbit.delay,
                }}
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${orbit.dotSize} bg-kogrix-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)]`}
                />
              </motion.div>
            ))}

            {/* Glow behind logo */}
            <div className="absolute w-64 h-64 bg-kogrix-400/15 rounded-full blur-[80px]" />
            <div className="absolute w-40 h-40 bg-emerald-400/10 rounded-full blur-[50px]" />

            {/* THE LOGO — big and prominent */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Kogrix"
                width={260}
                height={260}
                className="drop-shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                priority
              />
            </motion.div>

            {/* Connection lines from logo to edges */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
              {[
                { x1: 250, y1: 250, x2: 40, y2: 80 },
                { x1: 250, y1: 250, x2: 460, y2: 120 },
                { x1: 250, y1: 250, x2: 450, y2: 400 },
                { x1: 250, y1: 250, x2: 60, y2: 420 },
                { x1: 250, y1: 250, x2: 130, y2: 50 },
                { x1: 250, y1: 250, x2: 380, y2: 460 },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#10B981"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
                />
              ))}
              {/* Endpoint dots */}
              {[
                { cx: 40, cy: 80 },
                { cx: 460, cy: 120 },
                { cx: 450, cy: 400 },
                { cx: 60, cy: 420 },
                { cx: 130, cy: 50 },
                { cx: 380, cy: 460 },
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="3"
                  fill="#10B981"
                  fillOpacity="0.4"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
