import { Mail, Linkedin, Github, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RESUME_URL = "/public/DataEngineer_resume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/dharani-reddyvari-9952951b2/";
const GITHUB_URL = "https://github.com/Dharanireddyvari1/Profile";
const EMAIL = "mailto:reddyvaridharani05@gmail.com";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="contact" className="py-20 section-gradient-3 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div ref={ref} className="mx-auto max-w-2xl px-4 text-center relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="mb-3 text-3xl font-bold text-foreground">Let's Connect</h2>
          <p className="mb-8 text-lg text-primary">
            Open to US-based Data Engineering roles · Open to relocation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={EMAIL} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover-glow hover-lift">
              <Mail size={16} /> Email
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Github size={16} /> GitHub
            </a>
            <a href={RESUME_URL} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
