import type { Config } from "tailwindcss";
<<<<<<< HEAD
export default {content:["./src/**/*.{ts,tsx}"],theme:{extend:{colors:{ink:"#0A1730",navy:"#0C1D3C",accent:"#6557F5",cyan:"#42C7E9"},boxShadow:{soft:"0 18px 60px rgba(16,31,68,.08)"}}},plugins:[]} satisfies Config;
=======
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#10223f", blue: "#315cff", mist: "#f4f7ff" }, boxShadow: { soft: "0 18px 55px rgba(23,52,105,.10)" } } },
  plugins: []
};
export default config;
>>>>>>> 606bc7434d6f57538a4896e301a61d5367286cf5
