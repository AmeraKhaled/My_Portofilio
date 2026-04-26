import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.Sc. Scientific Computing",
    org: "Ain Shams University",
    period: "2020 — 2024",
  },
  {
    icon: BookOpen,
    title: "Frontend Diploma",
    org: "Route Academy",
    period: "09/2025 — 02/2026",
  },
  {
    icon: Award,
    title: "Full Stack with Python",
    org: "ITI — Information Technology Institute",
    period: "12/2024 — 04/2025",
  },
];

export const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="05 — Education"
      title="Education & Courses"
      subtitle="Continuous learning shapes how I build."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <item.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.org}</p>
            <span className="text-xs font-mono text-primary-glow">{item.period}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
