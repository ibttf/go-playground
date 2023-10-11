import "../css/style.css";

import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import Sidebar from "@/app/custom/ui/sidebar";
import Header from "@/app/custom/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <section className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
            <Image
              className="max-w-none"
              src={Illustration}
              priority
              alt="Page illustration"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Main content */}
            <div>
              {/* Sidebar */}
              <Sidebar />

              {/* Page container */}
              <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                <div className="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
