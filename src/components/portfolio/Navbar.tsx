import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollToSection("home")}
          className="font-display font-bold text-lg tracking-tight"
        >
          <span className="text-gradient">Amera</span>
          <span className="text-foreground">.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
        >
          Let's Talk
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => { scrollToSection(link.href); setOpen(false); }}
                  className="block w-full text-left px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};