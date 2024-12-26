import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import { resolve } from 'path';
// import { copyFileSync } from 'fs';

// Custom plugin to handle copying
// const copyManifestPlugin = () => ({
//   name: 'copy-manifest',
//   buildEnd() {
//     const source = resolve(__dirname, 'manifest.json');
//     const destination = resolve(__dirname, 'dist/manifest.json');
//     copyFileSync(source, destination);
//   },
// });

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
})
