/* Loaded after Tailwind CDN */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0c1628", 2: "#121e34", 3: "#18263e" },
        card: { DEFAULT: "#152033", on: "#1a2940" },
        cream: { DEFAULT: "#f4efe7", 2: "#ebe4d8" },
        ink: "#12151c",
        muted: { DEFAULT: "#6a6560", 2: "#9a948c" },
        wood: { DEFAULT: "#b8956a", 2: "#c9a97a" }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"]
      },
      borderRadius: { wx: "24px", "wx-sm": "16px" },
      maxWidth: { wx: "1240px", wide: "1360px" },
      letterSpacing: { tightx: "-0.038em" }
    }
  }
};
