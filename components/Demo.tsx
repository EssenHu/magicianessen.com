"use client";

import { motion } from "framer-motion";

// Placeholder: replace with your real YouTube/Vimeo embed URL
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // example

export default function Demo() {
  return (
    <section id="demo" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Watch Demo
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-zinc-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Shots from different performances—a taste of the energy and style you
          can expect at your event.
        </motion.p>

        <motion.div
          className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <iframe
            src={DEMO_VIDEO_URL}
            title="Magician Essen demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </motion.div>

        <motion.p
          className="mt-6 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Drop your performance reel here—update the video URL in{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-400">
            components/Demo.tsx
          </code>{" "}
          when ready (YouTube or Vimeo).
        </motion.p>
      </div>
    </section>
  );
}
