// vite.config.js
export default {
  build: {
    outDir: "dist", // The directory to output the built files
    assetsDir: "assets", // The directory to copy the static assets to
    rollupOptions: {
      input: "index.html", // The entry point of your application
    },
  },
}
