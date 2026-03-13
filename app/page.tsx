import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Demo />
      <Profile />
      <Services />
      <ContactForm />
      <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Magician Essen. Bay Area, CA.</p>
      </footer>
    </main>
  );
}
