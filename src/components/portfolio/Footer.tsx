import { Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          © {new Date().getFullYear()} Amera Khaled Ismail · Built with{" "}
          <Heart size={12} className="text-primary-glow fill-primary-glow" /> & React
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/AmeraKhaled"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:amerak280@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
