import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Send, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    // Open mail client with prefilled body
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:amerak280@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast({ title: "Opening your email client…", description: "Thanks for reaching out!" });
  };

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's build something together"
      subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          <a
            href="mailto:amerak280@gmail.com"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition-all group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
              <Mail size={18} className="text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Email</p>
              <p className="font-medium text-foreground truncate group-hover:text-primary-glow transition-colors">
                amerak280@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/AmeraKhaled"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-cyan/50 transition-all group"
          >
            <div className="w-11 h-11 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
              <Github size={18} className="text-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">GitHub</p>
              <p className="font-medium text-foreground truncate group-hover:text-cyan transition-colors">
                @AmeraKhaled
              </p>
            </div>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
              placeholder="Tell me about your project…"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
          >
            {submitted ? <Check size={18} /> : <Send size={16} />}
            {submitted ? "Sent" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
};
