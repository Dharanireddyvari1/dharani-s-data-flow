import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

interface Role {
  company: string;
  title: string;
  period: string;
  tags: string[];
  bullets: string[];
  defaultOpen?: boolean;
}

const roles: Role[] = [
  {
    company: "Dentsu Global Services",
    title: "Software Data Engineer",
    period: "Dec 2022 – Jul 2024",
    tags: ["Python", "SQL", "Snowflake", "Jenkins", "ETL"],
    defaultOpen: true,
    bullets: [
      "Built Python + SQL ETL pipelines loading data into Snowflake; improved data readiness by ~30% and reduced manual effort by 60%",
      "Implemented data quality validation: null checks, schema validation, and variant consistency checks across ~300K SKU records per run",
      "Managed CI/CD delivery with Jenkins + Git/Bitbucket for reliable production deployments",
      "Troubleshot production issues including bot detection (403s), request timeouts, and recrawls; maintained ~95% success target",
      "Coordinated with cross-functional teams to align data pipelines with downstream analytics and reporting needs",
    ],
  },
  {
    company: "Dentsu",
    title: "Data Analyst",
    period: "Jan 2022 – Dec 2022",
    tags: ["SQL", "Python", "Analytics", "Reporting"],
    bullets: [
      "Developed SQL-based reporting pipelines for e-commerce brand analytics across multiple client accounts",
      "Automated recurring data extractions reducing manual reporting time by 40%",
      "Performed data profiling and quality assessments on large-scale pricing and product datasets",
      "Collaborated with engineering to translate analytical requirements into scalable data models",
    ],
  },
  {
    company: "Roots Industries",
    title: "Data Analyst Intern",
    period: "Dec 2020 – Jun 2021",
    tags: ["Excel", "SQL", "Data Analysis"],
    bullets: [
      "Analyzed manufacturing process data to identify efficiency improvements and cost reduction opportunities",
      "Built dashboards and automated reports for production line performance metrics",
      "Cleaned and standardized legacy datasets for migration to centralized data systems",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className="mx-auto max-w-4xl px-4">
        <h2 className={`mb-12 text-3xl font-bold text-foreground transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Experience
        </h2>
        <div className="relative border-l-2 border-border pl-8">
          {roles.map((role, i) => (
            <TimelineItem key={i} role={role} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ role, index, isVisible }: { role: Role; index: number; isVisible: boolean }) => {
  const [open, setOpen] = useState(role.defaultOpen ?? false);

  return (
    <div
      className={`relative mb-10 last:mb-0 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between text-left group"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">{role.company}</h3>
          <p className="text-sm font-medium text-primary">{role.title}</p>
          <p className="text-xs text-muted-foreground">{role.period}</p>
        </div>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
      >
        <div className="mb-3 flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <ul className="space-y-2">
          {role.bullets.map((b, j) => (
            <li key={j} className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/50">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
