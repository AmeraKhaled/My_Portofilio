import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Freelance Frontend Developer",
    period: "06/2025 — 01/2026",
    summary:
      "Worked in a cross-functional team with Backend & AI engineers on a RAG-based architecture. Implemented polished UI animations and reusable components.",
    points: [
      "RAG-based product collaboration with backend & AI",
      "Smooth UI animations and micro-interactions",
      "Component-driven, reusable frontend architecture",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    period: "05/2025 — 06/2025",
    summary:
      "Built the taqat_shabab project — a responsive React app with pagination, filtering, and a mobile-first UI from the ground up.",
    points: [
      "React-based responsive interface",
      "Pagination & filtering logic",
      "Mobile-first UI implementation",
    ],
  },
];

export const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="Where I've worked"
      subtitle="Hands-on freelance work shipping real frontends."
    >
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-cyan to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <Briefcase size={16} className="text-primary-foreground" />
              </div>

              <div className="glass rounded-xl p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-xs font-mono text-primary-glow px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">{job.summary}</p>
                <ul className="space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-cyan mt-1.5 w-1 h-1 rounded-full bg-cyan shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
