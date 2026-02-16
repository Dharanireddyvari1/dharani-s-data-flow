import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "Experience", "Case Study", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = ["hero", "experience", "case-study", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx !== -1) setActive(sections[idx]);
          }
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: string) => {
    const ids = ["hero", "experience", "case-study", "projects", "skills", "contact"];
    const idx = sections.indexOf(section);
    const el = document.getElementById(ids[idx]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-primary">DR</span>
        <div className="hidden gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                active === s ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="flex flex-col border-t border-border bg-background px-4 pb-4 md:hidden">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`py-2 text-left text-sm font-medium ${
                active === s ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
