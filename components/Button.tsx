"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-dark-blue shadow-card hover:shadow-lift",
  secondary:
    "bg-transparent text-dark-blue border border-dark-blue/30 hover:border-dark-blue hover:bg-white",
  ghost:
    "bg-white text-dark-blue border border-border hover:border-blue",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-200 ease-out";

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
