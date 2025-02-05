export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        spin: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-100px) rotateX(40deg)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0) rotateX(0)',
            opacity: '1' 
          }
        }
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'slide-down': 'slideDown 0.6s ease-out forwards'
      }
    },
  },
  plugins: [],
};
