import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories: Record<string, string[]> = {
  Languages: ["Python", "SQL", "Scala"],
  Processing: ["Spark", "PySpark", "Spark SQL"],
  Orchestration: ["Airflow"],
  Platforms: ["Snowflake", "AWS S3", "AWS Athena", "AWS EMR Serverless", "AWS Glue"],
  Databases: ["Postgres", "MySQL", "Redshift"],
  DevOps: ["Linux", "Git", "Jenkins"],
};

const allCategories = Object.keys(categories);

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal(0.1);

  const displayedCategories = activeFilter ? [activeFilter] : allCategories;

  return (
    <section id="skills" className="py-20 section-gradient-2 relative">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div ref={ref} className="mx-auto max-w-4xl px-4 relative z-10">
        <h2 className={`mb-8 text-3xl font-bold text-foreground transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Skills
        </h2>

        {/* Filter chips */}
        <div className={`mb-8 flex flex-wrap gap-2 transition-all duration-500 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeFilter === null
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {displayedCategories.flatMap((cat) =>
            categories[cat].map((skill) => (
              <div
                key={skill}
                className="group rounded-lg border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 animate-scale-in"
              >
                <span className="text-xs text-muted-foreground block mb-0.5">{cat}</span>
                {skill}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
