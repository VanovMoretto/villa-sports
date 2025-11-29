/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definindo nossa paleta "Shadcn-like"
        background: "#1a1a1a",       // Preto acinzentado (Global)
        foreground: "#f5f5f5",       // Branco gelo (Texto principal)
        
        primary: "#800020",          // Bordô (Marca)
        "primary-foreground": "#ffffff", // Texto dentro do botão primary
        
        header: "#242424",           // Fundo do Header
        
        muted: "#a1a1aa",            // Cinza para textos secundários
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}