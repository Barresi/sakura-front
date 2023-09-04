/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // buttons
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          border: "hsl(var(--secondary-border))",
          borderHover: "hsl(var(--secondary-border-hover))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        outline: {
          hover: "hsl(var(--outline-hover))",
          border: "hsl(var(--outline-border))",
          foreground: "hsl(var(--outline-foreground))",
        },
        link: {
          hover: "hsl(var(--link-hover))",
          foreground: "hsl(var(--link-foreground))",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
          foreground: "hsl(var(--text-foreground))",
        },

        // inputs
        input: {
          DEFAULT: "hsl(var(--input))",
          foreground: "hsl(var(--input-foreground))",
          background: "hsl(var(--input-background))",
          hoverBorder: "hsl(var(--input-hoverBorder))",
          errorBorder: "hsl(var(--input-errorBorder))",
        },

        // avatar
        avatar: {
          foreground: "hsl(var(--avatar-foreground))",
        },

        // select
        select: {
          itemHover: "hsl(var(--select-itemHover))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
