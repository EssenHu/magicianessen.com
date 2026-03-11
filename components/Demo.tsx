"use client";

import { motion } from "framer-motion";

const DEMO_VIDEO_SRC = "/demo.mp4";
// Optional thumbnail: add public/demo-poster.jpg (e.g. a frame from your video) to show before play
const DEMO_POSTER = "/demo-poster.jpg";

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
          Highlights from past performances and audience reactions—a taste of the
          energy and style you can expect at your event.
        </motion.p>

        <motion.div
          className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <video
            src={DEMO_VIDEO_SRC}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={DEMO_POSTER}
            title="Magician Essen demo"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
