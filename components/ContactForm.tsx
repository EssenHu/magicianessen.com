"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EVENT_TYPES = [
  "Corporate event",
  "Private party",
  "Wedding",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    location: "",
    guestCount: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setFormData({
        name: "",
        contact: "",
        date: "",
        location: "",
        guestCount: "",
        eventType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.h2
          className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mt-3 text-zinc-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Tell me about your event and I&apos;ll get back to you soon.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-zinc-300">
              How to reach you *
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              value={formData.contact}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="Email, phone number, or WeChat ID"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-zinc-300">
              Event date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-zinc-300">
              Location *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="City or venue"
            />
          </div>
          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-zinc-300">
              Guest count (approx.)
            </label>
            <input
              id="guestCount"
              name="guestCount"
              type="text"
              value={formData.guestCount}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="e.g. 50"
            />
          </div>
          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-zinc-300">
              Event type *
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            >
              <option value="">Select...</option>
              {EVENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white placeholder-zinc-500 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder="Any details about your event..."
            />
          </div>

          {status === "success" && (
            <p className="rounded-xl bg-emerald-500/20 px-4 py-3 text-emerald-400">
              Thanks! I&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-xl bg-red-500/20 px-4 py-3 text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-[var(--color-accent)] py-4 font-semibold text-[var(--color-bg)] transition hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
