import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#111111",
        skull: "#ff5a00",
      },
    },
  },
  plugins: [],
} satisfies Config;
