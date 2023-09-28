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
      screens: { "3xl": "1440px" },
      colors: {
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // buttons
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          hover: "var(--secondary-hover)",
          border: "var(--secondary-border)",
          borderHover: "var(--secondary-border-hover)",
          foreground: "var(--secondary-foreground)",
        },
        outline: {
          hover: "var(--outline-hover)",
          border: "var(--outline-border)",
          foreground: "var(--outline-foreground)",
        },
        link: {
          hover: "var(--link-hover)",
          foreground: "var(--link-foreground)",
        },
        text: {
          DEFAULT: "var(--text)",
          foreground: "var(--text-foreground)",
        },

        // nav button mobile

        nav: {
          DEFAULT: "var(--navButton)",
          foreground: "var(--navButton-foreground)",
        },

        // inputs
        input: {
          DEFAULT: "var(--input)",
          foreground: "var(--input-foreground)",
          background: "var(--input-background)",
          hoverBorder: "var(--input-hoverBorder)",
          errorBorder: "var(--input-errorBorder)",
        },

        // avatar
        avatar: {
          foreground: "var(--avatar-foreground)",
        },

        // select
        select: {
          DEFAULT: "var(--select)",
          itemHover: "var(--select-itemHover)",
        },

        // action buttons
        action: {
          activeBorder: "var(--action-activeBorder)",
          imgColor: "var(--action-imgColor)",
          imgActiveColor: "var(--action-imgActiveColor)",
        },

        // cards
        message: {
          DEFAULT: "var(--message)",
          hover: "var(--message-hover)",
          border: "var(--message-border)",
          hoverBorder: "var(--message-hoverBorder)",
        },

        liked: {
          foreground: "var(--liked-foreground)",
          dateForeground: "var(--liked-dateForeground)",
        },

        request: {
          foreground: "var(--request-foreground)",
        },

        // setting button
        setting: {
          DEFAULT: "var(--setting)",
          active: "var(--setting-active)",
          border: "var(--setting-border)",
          foreground: "var(--setting-foreground)",
          activeForeground: "var(--setting-activeForeground)",
        },

        // block message
        blockMessage: {
          my: "var(--message-my)",
          other: "var(--message-other)",
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
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
