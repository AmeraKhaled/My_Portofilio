import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <p className="text-sm font-mono uppercase tracking-wider text-primary-glow mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
