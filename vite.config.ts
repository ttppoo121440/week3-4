import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/week3-4/" : "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  plugins: [
    ViteEjsPlugin(),
    tsconfigPaths(),
    // Without Data
    ViteEjsPlugin(),
    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!",
    }),
    // Or With Vite Config
    ViteEjsPlugin((viteConfig) => {
      // viteConfig is the current viteResolved config.
      return {
        root: viteConfig.root,
        domain: "example.com",
        title: "My vue project!",
      };
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer],
    },
  },
});
