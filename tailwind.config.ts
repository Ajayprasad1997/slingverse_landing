import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#10223f", blue: "#315cff", mist: "#f4f7ff" }, boxShadow: { soft: "0 18px 55px rgba(23,52,105,.10)" } } },
  plugins: []
};
export default config;