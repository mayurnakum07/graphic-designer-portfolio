import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px]">
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.instagram.com/k.p_ahir_official"
            target="_blank"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.linkedin.com/in/prakash-katariya-3667b8250"
            target="_blank"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
        <li className="text-white/70 hover:text-white transition-colors">
          <Link href="https://github.com/mayurnakum07" target="_blank">
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
