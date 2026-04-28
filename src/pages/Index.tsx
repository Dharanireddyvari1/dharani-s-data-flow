import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudySection from "@/components/CaseStudySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CaseStudySection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dharani Reddyvari
      </footer>
    </div>
  );
};

export default Index;
