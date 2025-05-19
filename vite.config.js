import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Naveen-Portfolio/', // Replace <repo-name> with your GitHub repository name
});
