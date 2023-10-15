import LandingHeader from "@/components/ui/landing-header";
import { LandingHero } from "@/components/ui/landing-hero";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <LandingHeader />
      <LandingHero />
    </div>
  );
}
