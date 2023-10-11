import LandingHeader from "@/components/ui/landing-header";
import { LandingHero } from "@/components/ui/landing-hero";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <LandingHeader />
      <LandingHero />
      {/* <div
        style={{ width: "80vw", height: "30vh" }}
        className="w-fit mx-auto absolute bottom-0 right-0 left-0"
      >
        <Image
          src="/images/go.png"
          alt="Go"
          layout="fill"
          objectFit="cover"
          style={{ position: "absolute", top: 0, zIndex: 50 }}
        />
      </div> */}
    </div>
  );
}
