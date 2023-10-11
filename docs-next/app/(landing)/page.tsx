import LandingHeader from "@/app/custom/ui/landing-header";
import { LandingHero } from "@/app/custom/ui/landing-hero";
import { LandingNavbar } from "@/app/custom/ui/landing-navbar";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <LandingHeader />
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
