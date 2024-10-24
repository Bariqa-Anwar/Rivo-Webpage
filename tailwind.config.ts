import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(147, 185, 162, 1)',
        customLightGreen: 'rgba(169, 212, 186, 1)',
        customMintGreen: 'rgba(163, 243, 190, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
