import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript (ES6+)", "React.js", "Next.js"],
  },
  { title: "Databases", skills: ["PostgreSQL", "SQL Server"] },
  { title: "Languages", skills: ["Python", "JavaScript"] },
  { title: "Tools", skills: ["Git", "GitHub"] },
  { title: "Concepts", skills: ["OOP", "Data Structures & Algorithms"] },
];

export const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools I work with"
      subtitle="A focused stack that helps me ship reliable interfaces fast."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-primary" />
              <h3 className="font-display font-semibold text-foreground">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-secondary/60 text-foreground/90 border border-border hover:border-primary/50 hover:text-primary-glow transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
