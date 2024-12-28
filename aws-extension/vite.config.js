import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // import { resolve } from 'path';
// // import { copyFileSync } from 'fs';

// // Custom plugin to handle copying
// // const copyManifestPlugin = () => ({
// //   name: 'copy-manifest',
// //   buildEnd() {
// //     const source = resolve(__dirname, 'manifest.json');
// //     const destination = resolve(__dirname, 'dist/manifest.json');
// //     copyFileSync(source, destination);
// //   },
// // });

// // https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';  // Ensure this is present
// import react from '@vitejs/plugin-react';
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             if (id.includes('@botpress/webchat')) {
//               return 'botpress-webchat';
//             }
//             if (id.includes('react')) {
//               return 'react-vendor';
//             }
//             return 'vendor';
//           }
//         }
//       }
//     },
//   }
// });

