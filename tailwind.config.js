// tailwind.config.js
module.exports = {
  darkMode: "class", // 👈 Dùng class để hỗ trợ chuyển dark/light mode bằng `next-themes`
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // màu chính (tím Indigo)
        secondary: "#06b6d4", // màu phụ
        background: "#f9fafb", // light background
        darkBg: "#111827", // dark background
        accent: "#f43f5e", // accent (hồng đậm)
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        "nav-height": "64px",
      },
      borderRadius: {
        "2xl": "1rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.05)",
        deep: "0 4px 24px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px", // 👈 Quan trọng để dùng md:hidden, md:block...
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {},
  plugins: [],
};
