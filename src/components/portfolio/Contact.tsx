import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Send, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
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

          <a
            href="https://wa.me/201146529734"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-green-500/50 transition-all group"
          >
            <div className="w-11 h-11 rounded-lg bg-green-500 flex items-center justify-center shrink-0 text-white">
              <WhatsAppIcon />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">WhatsApp</p>
              <p className="font-medium text-foreground truncate group-hover:text-green-400 transition-colors">
                +20 011 4652 9734
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