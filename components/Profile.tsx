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
              Essen is a Bay Area magician known for interactive performances
              that combine modern magic with humor and audience participation. His
              goal is simple: to create a show where people relax, laugh, and
              genuinely enjoy the experience together.
            </p>
            <p className="leading-relaxed">
              He performs in English and Mandarin, and customizes each show for
              the audience — from adults-only events and corporate gatherings to
              family celebrations, children&apos;s parties, weddings, and
              birthdays.
            </p>
            <p className="leading-relaxed">
              Essen also adapts his performance to the venue, whether it&apos;s
              an intimate close-up setting, a private event space, or a large
              theater stage. Each show is tailored to fit the atmosphere, the
              audience, and the occasion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
