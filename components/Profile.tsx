"use client";

import { motion } from "framer-motion";

// Cut-out portrait: public/essen-portrait.png
const PORTRAIT_SRC = "/essen-portrait.png";

export default function Profile() {
  return (
    <section id="profile" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Meet Magician Essen
        </motion.h2>
        <motion.p
          className="mt-1 text-lg text-zinc-500 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          魔术师泽皮
        </motion.p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center">
          <motion.div
            className="relative flex min-h-[380px] w-full items-end justify-center lg:min-h-[480px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={PORTRAIT_SRC}
              alt="Magician Essen"
              className="max-h-[420px] w-auto max-w-full object-contain object-bottom lg:max-h-[520px]"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-lg leading-relaxed">
              Essen is a Bay Area magician known for highly interactive
              performances where the audience becomes part of the magic. Rather
              than simply watching from their seats, guests are invited to
              participate, laugh, and share in the moments of surprise together.
            </p>
            <p className="leading-relaxed">
              Blending modern magic with humor and audience participation, his
              shows are designed to create a lively and engaging atmosphere for
              every event.
            </p>
            <p className="leading-relaxed">
              Essen performs in{" "}
              <span className="font-semibold text-[var(--color-accent)]">
                English and Mandarin
              </span>
              , and tailors each show to the audience — from corporate events
              and adult gatherings to family celebrations, children&apos;s
              parties, weddings, and birthdays.
            </p>
            <p className="leading-relaxed">
              His performances adapt to any venue, from intimate close-up magic
              to full stage shows, always maintaining the same focus:{" "}
              <span className="font-semibold text-[var(--color-accent)]">
                bringing the audience into the magic and making them part of the
                experience.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
