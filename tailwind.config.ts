import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        bounceTwice: "bounceTwice 1.5s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        spinSlow: "spinSlow 5s linear infinite",
      },
      
      
    },
  },
  plugins: [],
};

export default config;
