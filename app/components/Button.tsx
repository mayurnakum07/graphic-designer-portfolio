"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "blank" | "filled";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "blank",
  className = "",
  onClick,
  icon,
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  /** ---------------- FILLED VARIANT ---------------- */
  if (variant === "filled") {
    return (
      <button
        onClick={onClick}
        className={clsx(
          baseClasses,
          sizeClasses[size],
          "bg-white text-black hover:bg-transparent hover:text-white hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black border-0",
          className
        )}
        style={{ border: "none" }}
      >
        {children}
        {icon && <span className="text-lg">{icon}</span>}
      </button>
    );
  }

  /** ---------------- BLANK VARIANT ---------------- */
  return (
    <button
      onClick={onClick}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        "border border-white/60 text-white bg-transparent hover:bg-white hover:text-black hover:border-white hover:shadow-lg active:scale-95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black",
        className
      )}
    >
      {children}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
}
