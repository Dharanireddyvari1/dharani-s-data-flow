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
  isCurrent?: boolean;
}

const roles: Role[] = [
  {
    company: "PatentGap AI",
    title: "AI Developer — Patent Intelligence & LLM Pipelines",
    period: "Mar 2026 – Present",
    isCurrent: true,
    defaultOpen: true,
    tags: ["Gemini (LLM)", "Python", "Flask", "Pydantic", "Web Scraping", "USPTO API", "Google Patents", "Structured JSON", "NLP"],
    bullets: [
      "Enhanced LLM-driven patent intelligence workflows that extract structured patent metadata from USPTO APIs, Google Patents, and Free Patents Online fallback scrapers, enabling multi-source data collection at scale.",
      "Used Pydantic-style structured outputs to validate Gemini-extracted patent fields — titles, claims, identifiers, inventors, applicants/assignees, dates, and source metadata — before database insertion, ensuring data integrity across the pipeline.",
      "Tested and debugged Flask API flows for patent import, claims extraction, infringement analysis, and live similarity analysis across multi-source patent data pipelines.",
      "Improved patent ID handling and fallback logic by identifying format issues where USPTO accepts limited application-number formats while Google Patents and Free Patents Online handle broader patent and publication IDs.",
      "Engineered Gemini-based prompts for metadata extraction, claims isolation, patent summarization, infringement comparison, and structured JSON generation for downstream analysis workflows.",
    ],
  },
  {
    company: "AbbVie",
    title: "AI / GenAI Engineer — Data Systems & Document Intelligence",
    period: "Aug 2025 – Jan 2026",
    tags: ["Python", "PySpark", "RAG", "NLP", "AWS", "Docker", "CI/CD", "Document Intelligence", "Data Validation"],
    bullets: [
      "Designed and optimized end-to-end Python- and PySpark-based preprocessing pipelines for structured and unstructured clinical and regulatory documents, supporting parsing, chunking, metadata extraction, validation, and downstream GenAI workflows.",
      "Prepared raw document data for analysis through cleaning, transformation, anonymization, and masking, ensuring compliance with data governance standards in a regulated environment.",
      "Supported RAG and NLP-based document intelligence use cases; implemented data validation, monitoring, and performance tracking to improve reliability and traceability across ML pipelines.",
      "Deployed containerized workloads on AWS using Docker and CI/CD; collaborated with ML engineers and data scientists to translate document intelligence requirements into scalable data workflows.",
    ],
  },
  {
    company: "Dentsu Global Services",
    title: "Software Data Engineer — Web Data Pipelines & Cloud ETL",
    period: "Jan 2022 – Jul 2024",
    tags: ["Python", "SQL", "PySpark", "Snowflake", "Airflow", "Selenium", "BeautifulSoup", "AWS S3", "ETL Pipelines", "Data Quality", "Git", "Jenkins"],
    bullets: [
      "Built Python-, SQL-, and PySpark-based web data ingestion pipelines for 13+ global retail clients, processing 25K–40K URLs per batch and ~300K SKU records weekly while maintaining ~95% SLA adherence through validation, monitoring, and recovery workflows.",
      "Developed scraping and crawler workflows using Selenium, BeautifulSoup, Playwright, and JSON/XHR extraction patterns; reverse-engineered web sources via Chrome DevTools, XHR tracing, cookies, and headers to bypass bot restrictions and pagination.",
      "Designed PySpark and Spark SQL transformation workflows to standardize semi-structured data, normalize product variants, enforce schema checks, remove duplicates, and prepare curated datasets for BI and analytics.",
      "Loaded curated datasets into AWS (S3, EMR Serverless, Glue Catalog, Athena) and Snowflake, supporting scalable warehouse ingestion; orchestrated pipelines via Apache Airflow with retry logic and structured failure reporting.",
      "Implemented data quality checks for nulls, duplicates, price sanity, schema drift, and payload inconsistencies; built OpenCV- and TensorFlow-supported image validation workflows, improving dataset consistency by ~40%.",
    ],
  },
  {
    company: "Roots Industries",
    title: "Data Analyst Intern",
    period: "Dec 2020 – Jan 2021",
    tags: ["Excel", "SQL", "Data Analysis"],
    bullets: [
      "Analyzed manufacturing process datasets to identify downtime drivers and operational bottlenecks, contributing to ~15% reduction in production delays.",
      "Built automated KPI dashboards and reporting pipelines using Excel and SQL, reducing manual reporting effort by ~40%.",
      "Cleaned and standardized legacy operational datasets to support migration to centralized data systems.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-20 section-gradient-2 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div ref={ref} className="mx-auto max-w-4xl px-4 relative z-10">
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
      {/* Timeline dot — pulsing for current role */}
      <div className={`absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background ${role.isCurrent ? "ring-2 ring-primary/30 ring-offset-1" : ""}`} />

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between text-left group"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{role.company}</h3>
            {role.isCurrent && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Current
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-primary">{role.title}</p>
          <p className="text-xs text-muted-foreground">{role.period}</p>
        </div>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[700px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
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
