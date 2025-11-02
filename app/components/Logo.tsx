"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <motion.span
      className={`font-bold text-2xl text-white ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      prakash<sup className="text-xs">®</sup>
    </motion.span>
  );
}

