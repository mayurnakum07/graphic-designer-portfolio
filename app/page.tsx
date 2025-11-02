import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prakash | Graphic Designer & Video Editor Portfolio",
  description:
    "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  keywords: [
    "Graphic Designer",
    "Video Editor",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe XD",
  ],
  robots: "index, follow",
  openGraph: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Prakash | Graphic Designer & Video Editor Portfolio",
    description:
      "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  },
  twitter: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Prakash | Graphic Designer & Video Editor Portfolio",
    description:
      "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* Unified Background for All Sections */}
      <div className="relative w-full bg-linear-to-br from-black via-gray-900 to-black">
        {/* Unified Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />
        </div>
        {/* Sections Container */}
        <div className="relative z-10">
          <About />
          <Projects />
          <Services />
          <Contact />
        </div>
      </div>
      {/* Add more sections below as needed */}
    </>
  );
}
