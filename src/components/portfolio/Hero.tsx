import { motion } from "framer-motion";
import { Github, Mail, ArrowRight, Sparkles, Download } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-cyan/20 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8"
        >
          <Sparkles size={14} className="text-primary-glow" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
        >
          Amera Khaled<br />
          <span className="text-gradient">Ismail</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl text-muted-foreground mb-3 font-medium"
        >
          Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Turning ideas into functional, user-friendly interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-primary/50 transition-all"
          >
            Contact Me
          </a>
          <a
            href="/Amera_Khaled_CV.pdf"
            download="Amera_Khaled_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-cyan/50 hover:text-cyan transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/AmeraKhaled"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full glass hover:text-primary-glow hover:border-primary/50 transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:amerak280@gmail.com"
            aria-label="Email"
            className="p-3 rounded-full glass hover:text-cyan hover:border-cyan/50 transition-all"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/201146529734"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-3 rounded-full glass hover:text-green-400 hover:border-green-500/50 transition-all"
          >
            <WhatsAppIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};