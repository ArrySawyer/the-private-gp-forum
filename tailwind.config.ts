import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "960px",
      md: "1120px",
      lg: "1320px",
    },
    extend: {
      colors: {
        greyedOut: "#DCDCDC",
        pale: "#F6F2F0",
        paleAccent: "#FAF2D4",
        coal: "#191919",
        slate: "#232424",
        yellow: "#F4D35E",
        yellowDark: "#F7C512",
      },
      fontFamily: {
        "genral-sans": ["var(--font-genral-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
