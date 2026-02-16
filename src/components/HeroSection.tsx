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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-primary/4 blur-2xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Dharani Reddyvari
          </h1>
          <p className="mb-4 text-lg font-medium text-primary sm:text-xl">
            Data Engineer | Production ETL Pipelines | Spark + Airflow + Snowflake
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Data Engineer with 3+ years building Python/SQL ETL pipelines for high-volume e-commerce analytics,
            focused on reliability, data quality, and scalable batch processing.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <a href={RESUME_URL} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover-glow hover-lift">
              <Download size={16} /> Download Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
              <Github size={16} /> GitHub
            </a>
            <a href={EMAIL} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover-glow hover-lift">
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
            { value: `25K–${(stat1 / 1000).toFixed(0)}K`, label: "URLs / batch" },
            { value: `~${(stat2 / 1000).toFixed(0)}K`, label: "SKU records / run" },
            { value: `~${stat3}%`, label: "success target" },
          ].map((stat, i) => (
            <div key={i} className="rounded-lg border border-border bg-card/50 px-4 py-5 backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
