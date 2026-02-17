import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Progress } from "@/components/ui/progress";
import { Zap } from "lucide-react";

const stages = [
  {
    label: "Inputs",
    content: "Client-provided URL lists at weekly scale: 25K–40K URLs per batch, 3–15 product variants each, yielding ~300K total SKU records per run. URLs span multiple Amazon regions and brand storefronts.",
  },
  {
    label: "Extraction",
    content: "HTTP requests with browser-like headers and user-agent rotation. Proxy/gateway rotation for IP diversity. JSON data extracted from embedded <script> tags in product pages rather than fragile HTML selectors.",
  },
  {
    label: "Transformation",
    content: "Parsing of HTML + embedded JSON structures. Parent-child ASIN mapping to resolve product families. variationValues logic to flatten multi-variant products into normalized SKU rows.",
  },
  {
    label: "Validation",
    content: "Success rate tracked against ~95% target. Failed URLs logged for retry queues. Null/coverage checks on critical fields. Price sanity checks to catch outliers and stale data.",
  },
  {
    label: "Storage & Serving",
    content: "Raw HTML and parsed JSON stored to S3 for auditability. Output templates formatted per client spec. Snowflake loading support for downstream analytics and reporting.",
  },
  {
    label: "Failure Handling",
    content: "403 bot detection triggering header/proxy rotation. Timeout handling with exponential backoff. Zipcode-based pricing variations managed through regional configs. Selector changes handled via patch/redeploy cycle.",
  },
];

const CaseStudySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.1);
  const { ref: calloutRef, isVisible: calloutVisible } = useScrollReveal(0.2);

  return (
    <section id="case-study" className="py-20 section-gradient-3 relative">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div ref={ref} className="mx-auto max-w-4xl px-4 relative z-10">
        <h2 className={`mb-2 text-3xl font-bold text-foreground transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          End-to-End ETL Architecture
        </h2>
        <p className={`mb-8 text-lg text-primary transition-all duration-600 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          LVMH Brand Monitoring Pipeline (Amazon + multi-region)
        </p>

        {/* Progress bar */}
        <Progress value={((activeStep + 1) / stages.length) * 100} className="mb-6 h-1.5" />

        {/* Step buttons */}
        <div className="mb-6 flex flex-wrap gap-2">
          {stages.map((stage, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                i === activeStep
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="rounded-lg border border-border bg-card p-6 min-h-[120px]">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{stages[activeStep].label}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground animate-fade-in" key={activeStep}>
            {stages[activeStep].content}
          </p>
        </div>

        {/* What I Owned callout */}
        <div
          ref={calloutRef}
          className={`mt-6 rounded-lg border border-primary/20 bg-primary/5 p-5 transition-all duration-600 ${calloutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
        >
          <div className="flex items-start gap-3">
            <Zap size={18} className="mt-0.5 text-primary shrink-0" />
            <div>
              <h4 className="mb-1 text-sm font-semibold text-foreground">What I Owned</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end pipeline development and maintenance: extraction logic, transformation rules, validation
                framework, failure handling strategies, and production deployment via Jenkins CI/CD. Sole engineer
                responsible for pipeline reliability across weekly batch runs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
