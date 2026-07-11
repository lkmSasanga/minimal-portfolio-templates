import { ContactSection } from "@/components/sections/ContactSection";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ExpertiseLedger } from "@/components/sections/ExpertiseLedger";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ProjectArchive } from "@/components/sections/ProjectArchive";
import { SignatureStrip } from "@/components/sections/SignatureStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkingPrinciples } from "@/components/sections/WorkingPrinciples";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignatureStrip />
      <ProfileSection />
      <ExpertiseLedger />
      <ProjectArchive />
      <FeaturedCaseStudy />
      <ExperienceTimeline />
      <WorkingPrinciples />
      <Testimonials />
      <CurrentFocus />
      <ContactSection />
    </>
  );
}
