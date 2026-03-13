"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Corporate Events & Galas",
    description:
      "High-impact magic for corporate events, gala shows, and VIP evenings—ideal for receptions, award nights, and team celebrations.",
    icon: "◆",
  },
  {
    title: "Private Parties & Weddings",
    description:
      "Interactive magic for private parties, weddings, and adult gatherings—bringing your guests together with shared moments of surprise and laughter.",
    icon: "◆",
  },
  {
    title: "Family & Public Shows",
    description:
      "Family-friendly performances for kids’ birthday parties, art festivals, community events, and store promotions—visual, playful magic that entertains all ages.",
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
          Professional, interactive magic tailored to your event—from kids&apos;
          birthdays and private parties to gala shows and corporate celebrations.
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
