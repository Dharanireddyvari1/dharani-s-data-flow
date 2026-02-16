import { Download, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const RESUME_URL = "#resume-placeholder";
const LINKEDIN_URL = "#linkedin-placeholder";
const GITHUB_URL = "#github-placeholder";
const EMAIL = "mailto:dharani@example.com";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const stat1 = useCountUp(40000, 1500, isVisible);
  const stat2 = useCountUp(300000, 1500, isVisible);
  const stat3 = useCountUp(95, 1200, isVisible);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 section-gradient-1">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-accent/8 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 rounded-full bg-primary/6 blur-2xl animate-float" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-1/3 right-1/6 h-32 w-32 rounded-full bg-accent/6 blur-2xl animate-float" style={{ animationDelay: "2.2s" }} />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-glow">
            Dharani Reddyvari
          </h1>
          <p className="mb-4 text-lg font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-xl">
            Data Engineer | Production ETL Pipelines | Spark + Airflow + Snowflake
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Data Engineer with 3+ years building Python/SQL ETL pipelines for high-volume e-commerce analytics,
            focused on reliability, data quality, and scalable batch processing.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <a href={RESUME_URL} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground hover-glow hover-lift">
              <Download size={16} /> Download Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Github size={16} /> GitHub
            </a>
            <a href={EMAIL} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Mail size={16} /> Email
            </a>
          </div>

          {/* Location */}
          <p className="mb-10 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={14} /> Fort Collins, CO — Open to US-based roles — Open to relocation
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { value: `25K–${(stat1 / 1000).toFixed(0)}K`, label: "URLs / batch", color: "from-primary to-primary" },
            { value: `~${(stat2 / 1000).toFixed(0)}K`, label: "SKU records / run", color: "from-accent to-primary" },
            { value: `~${stat3}%`, label: "success target", color: "from-primary to-accent" },
          ].map((stat, i) => (
            <div key={i} className="rounded-lg border border-border bg-card/40 backdrop-blur-sm px-4 py-5 hover-lift transition-all duration-300 hover:border-primary/40">
              <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
