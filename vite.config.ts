import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration file (PRD Requirement TW1)
// - react(): enables React JSX/TSX compilation and Fast Refresh during development
// - tailwindcss(): integrates Tailwind CSS v4 directly into Vite without needing PostCSS
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
