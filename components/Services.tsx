"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Corporate Events",
    description:
      "Engage your team and clients with close-up magic and stage performances tailored for conferences, galas, and company celebrations.",
    icon: "◆",
  },
  {
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and special occasions—bring wonder and laughter to your guests with personalized, high-energy magic.",
    icon: "◆",
  },
  {
    title: "Weddings",
    description:
      "Elegant, memorable entertainment for your big day. From cocktail hour walk-around to a featured performance that your guests will remember.",
    icon: "◆",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-zinc-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Professional magic tailored to your event—fun, energetic, and always
          polished.
        </motion.p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-[var(--color-surface)]/50 p-8 transition hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface)]/80"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-2xl text-[var(--color-accent)] opacity-80 group-hover:opacity-100">
                {service.icon}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-zinc-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
