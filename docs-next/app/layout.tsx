import "./css/style.css";

import { Nothing_You_Could_Do } from "next/font/google";
import localFont from "next/font/local";
import Theme from "./theme-provider";
import AppProvider from "./app-provider";

const nycd = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nycd",
  weight: "400",
  display: "swap",
});

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-350.woff2",
      weight: "350",
    },
    {
      path: "../public/fonts/Aspekta-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

export const metadata = {
  title: "Go Playground",
  description: "The best way to learn Golang is to play with it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <Theme>
          <AppProvider>
            {/*  Page content */}
            <main>
              <section
                className={`${nycd.variable} ${aspekta.variable} font-aspekta antialiased text-slate-800 font-[350] bg-white dark:bg-slate-900 dark:text-slate-200`}
              >
                <div className="flex flex-col min-h-screen overflow-hidden">
                  {children}
                </div>
              </section>
            </main>
          </AppProvider>
        </Theme>
      </body>
    </html>
  );
}
