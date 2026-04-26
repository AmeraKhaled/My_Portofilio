import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean UI", desc: "Pixel-perfect, accessible interfaces" },
  { icon: Zap, label: "Performance", desc: "Fast, optimized web experiences" },
  { icon: Sparkles, label: "UX Focus", desc: "Smooth and intuitive interactions" },
];

export const About = () => {
  return (
    <Section id="about" eyebrow="01 — About" title="A little about me">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            <span className="text-foreground font-medium">Frontend Developer</span> with{" "}
            <span className="text-gradient font-semibold">1+ years</span> of hands-on experience building
            responsive and modern web applications using HTML, CSS, JavaScript, React, and Next.js.
          </p>
          <p>
            Focused on clean UI, great performance, and smooth user experience — I love translating
            design concepts into interactive, accessible products people enjoy using.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-4 flex items-start gap-4 hover:border-primary/50 transition-all glow-border"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <item.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
