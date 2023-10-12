import LandingHeader from "@/components/ui/landing-header";
import { LandingHero } from "@/components/ui/landing-hero";
import { LandingNavbar } from "@/components/ui/landing-navbar";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <LandingHeader />
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
