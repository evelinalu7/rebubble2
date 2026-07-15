import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p className={`eyebrow ${align === "center" ? "text-center" : "text-left"}`}>
      {children}
    </p>
  );
}
