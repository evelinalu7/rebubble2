import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F6F0E6",
        cream: "#FFF9F0",
        "pale-blue": "#EAF5F8",
        "light-blue": "#D4EAF0",
        blue: "#69AFC3",
        "dark-blue": "#28596A",
        "muted-blue": "#6F8E98",
        body: "#526368",
        border: "#D8E3E4",
        card: "#FFFDFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      fontSize: {
        "hero-mobile": ["40px", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        hero: ["68px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "title-mobile": ["36px", { lineHeight: "1.1" }],
        title: ["58px", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "section-mobile": ["28px", { lineHeight: "1.15" }],
        section: ["42px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        card: ["24px", { lineHeight: "1.25" }],
        label: ["13px", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2.25rem",
      },
      boxShadow: {
        soft: "0 12px 32px -12px rgba(40, 89, 106, 0.16)",
        card: "0 6px 20px -8px rgba(40, 89, 106, 0.14)",
        lift: "0 20px 40px -14px rgba(40, 89, 106, 0.22)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
