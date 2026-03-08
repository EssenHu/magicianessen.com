"use client";

const COUNT = 24;
const sparkles = Array.from({ length: COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 7 + 13) % 100}%`,
  top: `${(i * 11 + 5) % 100}%`,
  delay: `${(i * 0.3) % 4}s`,
  duration: `${4 + (i % 3)}s`,
  size: 2 + (i % 3),
  opacity: 0.15 + (i % 4) * 0.1,
}));

export default function Sparkles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="magic-sparkle absolute rounded-full bg-[var(--color-accent)]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `sparkle-float ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
