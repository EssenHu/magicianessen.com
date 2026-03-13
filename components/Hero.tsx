"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32"
    >
      <div className="bg-gradient-radial absolute inset-0" aria-hidden />
      {/* Soft glowing orbs */}
      <div
        className="magic-orb pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="magic-orb pointer-events-none absolute bottom-1/4 right-1/5 h-48 w-48 sm:h-56 sm:w-56"
        style={{ animationDelay: "-3s" }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl shimmer-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Magician Essen
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-zinc-400 sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Premium magic & entertainment for Bay Area events
        </motion.p>
        <motion.p
          className="mt-2 text-base text-zinc-500 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          Corporate · Private parties · Weddings
        </motion.p>
        <motion.p
          className="mt-1 text-sm text-zinc-600"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          English & Mandarin
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-bg)] shadow-lg shadow-amber-500/20 transition hover:bg-[var(--color-accent-hover)] hover:shadow-amber-500/30"
          >
            Get in Touch
          </a>
          <a
            href="#demo"
            className="rounded-full border border-zinc-600 bg-transparent px-8 py-4 text-base font-semibold text-zinc-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
