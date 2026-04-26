import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, FolderGit2, Plus } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "ShopHub",
    description:
      "A modern e-commerce experience with product browsing, cart, and a clean responsive UI built for speed and accessibility.",
    tech: ["React.js", "Vite", "Bootstrap", "Tailwind", "Axios"],
    github: "https://github.com/AmeraKhaled",
    demo: "https://github.com/AmeraKhaled",
  },
  {
    title: "Planora Tracker",
    description:
      "Fullstack habit & task tracker with a calendar UI, REST API, and persistent backend for daily productivity.",
    tech: ["React", "Django", "PostgreSQL", "REST API"],
    github: "https://github.com/AmeraKhaled",
  },
  {
    title: "Colonoscopy AI Diagnosis",
    description:
      "Graduation project (Excellent Degree). Mobile app leveraging machine learning & computer vision to assist medical diagnosis.",
    tech: ["Flutter", "Python", "ML", "Computer Vision"],
    badge: "Graduation Project",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative glass rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-11 h-11 rounded-xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center text-primary-glow group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
        <FolderGit2 size={20} />
      </div>
      {project.badge && (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan/10 text-cyan border border-cyan/30">
          {project.badge}
        </span>
      )}
    </div>

    <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-secondary/70 text-muted-foreground"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="flex items-center gap-2 pt-4 border-t border-border">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
        >
          <Github size={14} /> GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
      {!project.github && !project.demo && (
        <span className="text-xs text-muted-foreground italic">Private project</span>
      )}
    </div>
  </motion.article>
);

export const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Things I've built"
      subtitle="A selection of recent work spanning frontend, fullstack, and AI."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}

        {/* Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border-2 border-dashed border-border p-6 flex flex-col items-center justify-center text-center min-h-[280px] hover:border-primary/40 transition-colors"
        >
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 animate-float">
            <Plus size={22} className="text-primary-glow" />
          </div>
          <p className="font-display font-medium text-foreground mb-1">More coming soon…</p>
          <p className="text-sm text-muted-foreground">New projects in the works</p>
        </motion.div>
      </div>
    </Section>
  );
};
