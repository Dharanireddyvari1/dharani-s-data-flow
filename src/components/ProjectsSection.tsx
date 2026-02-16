import { useState } from "react";
import { Github, FileText, ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  readme: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Airbnb Spark Pipeline",
    description: "PySpark batch transformation pipeline producing analytics-ready outputs from raw listing data.",
    tags: ["PySpark", "Spark SQL", "Batch ETL", "Analytics"],
    github: "#github-airbnb-placeholder",
    readme: "#readme-airbnb-placeholder",
    highlights: [
      "PySpark batch transformations with complex joins and aggregations across multiple data sources",
      "Spark SQL for analytics-ready output generation with optimized partitioning",
      "Automated data quality checks integrated into the pipeline flow",
      "Scalable architecture supporting incremental and full-load processing modes",
    ],
  },
  {
    title: "Airflow Data Validation Pipeline",
    description: "Apache Airflow pipeline using TaskFlow API for automated data validation and anomaly detection.",
    tags: ["Airflow", "TaskFlow API", "Python", "Data Quality"],
    github: "#github-airflow-placeholder",
    readme: "#readme-airflow-placeholder",
    highlights: [
      "TaskFlow API for clean, Pythonic DAG definitions with automatic dependency resolution",
      "Execution context management for parameterized validation runs",
      "Anomaly detection output with configurable thresholds and alerting",
      "Comprehensive validation suite covering schema, completeness, and business rule checks",
    ],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="projects" className="py-20 section-gradient-1 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div ref={ref} className="mx-auto max-w-4xl px-4 relative z-10">
        <h2 className={`mb-10 text-3xl font-bold text-foreground transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-lg border border-border bg-card p-5 transition-all duration-500 hover-lift hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag, i) => (
          <Badge key={tag} variant="secondary" className="text-xs" style={{ animationDelay: `${i * 80}ms` }}>
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mb-3 flex gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
          <Github size={14} /> GitHub
        </a>
        <a href={project.readme} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
          <FileText size={14} /> README
        </a>
      </div>

      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-xs font-medium text-primary">
        Highlights
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
        <ul className="space-y-1.5">
          {project.highlights.map((h, j) => (
            <li key={j} className="text-xs leading-relaxed text-muted-foreground pl-3 relative before:absolute before:left-0 before:top-1.5 before:h-1 before:w-1 before:rounded-full before:bg-primary/50">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsSection;
