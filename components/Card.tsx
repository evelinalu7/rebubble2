import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-xl2 border border-border bg-card p-8 shadow-card ${
        hover ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
