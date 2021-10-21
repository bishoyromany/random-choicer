import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(
    {
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      manifest: {
        name: 'Random Choice',
        short_name: 'RC',
        description: 'Choose Random Item From A List Of Items',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      },
      workbox: {
        sourcemap: true  
      },
      registerType: 'autoUpdate'

    },
  )],
});
