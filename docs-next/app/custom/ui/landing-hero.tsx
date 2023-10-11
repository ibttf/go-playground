"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
export const LandingHero = () => {
  return (
    <div className="text-black dark:text-white font-bold py-36 pt-80 text-center space-y-5 bg-gradient-to-b from-blue-100 to-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Go Playground</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 from-blue-700 to-blue-900 pb-4">
          <TypewriterComponent
            options={{
              strings: ["the best way to learn Go."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div>
        <Link href="documentation/fundamentals">
          <Button
            variant="go"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Let's Go
          </Button>
        </Link>
      </div>
      <div className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm font-normal">
        No credit card. No sign up. No bullshit.
      </div>
    </div>
  );
};
