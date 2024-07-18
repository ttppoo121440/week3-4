// vite.config.ts
import { defineConfig } from "file:///D:/Code/tailwind/week3/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///D:/Code/tailwind/week3/node_modules/vite-plugin-ejs/index.js";
import tailwindcss from "file:///D:/Code/tailwind/week3/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/Code/tailwind/week3/node_modules/autoprefixer/lib/autoprefixer.js";
import tsconfigPaths from "file:///D:/Code/tailwind/week3/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  base: process.env.NODE_ENV === "production" ? "/week2/" : "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]"
      }
    }
  },
  plugins: [
    ViteEjsPlugin(),
    tsconfigPaths(),
    // Without Data
    ViteEjsPlugin(),
    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!"
    }),
    // Or With Vite Config
    ViteEjsPlugin((viteConfig) => {
      return {
        root: viteConfig.root,
        domain: "example.com",
        title: "My vue project!"
      };
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXHRhaWx3aW5kXFxcXHdlZWszXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RlXFxcXHRhaWx3aW5kXFxcXHdlZWszXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL3RhaWx3aW5kL3dlZWszL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tZWpzXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiL3dlZWsyL1wiIDogXCIvXCIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXS5baGFzaF0uW2V4dF1cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZpdGVFanNQbHVnaW4oKSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgLy8gV2l0aG91dCBEYXRhXG4gICAgVml0ZUVqc1BsdWdpbigpLFxuICAgIC8vIFdpdGggRGF0YVxuICAgIFZpdGVFanNQbHVnaW4oe1xuICAgICAgZG9tYWluOiBcImV4YW1wbGUuY29tXCIsXG4gICAgICB0aXRsZTogXCJNeSB2dWUgcHJvamVjdCFcIixcbiAgICB9KSxcbiAgICAvLyBPciBXaXRoIFZpdGUgQ29uZmlnXG4gICAgVml0ZUVqc1BsdWdpbigodml0ZUNvbmZpZykgPT4ge1xuICAgICAgLy8gdml0ZUNvbmZpZyBpcyB0aGUgY3VycmVudCB2aXRlUmVzb2x2ZWQgY29uZmlnLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9vdDogdml0ZUNvbmZpZy5yb290LFxuICAgICAgICBkb21haW46IFwiZXhhbXBsZS5jb21cIixcbiAgICAgICAgdGl0bGU6IFwiTXkgdnVlIHByb2plY3QhXCIsXG4gICAgICB9O1xuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKSwgYXV0b3ByZWZpeGVyXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRQLFNBQVMsb0JBQW9CO0FBQ3pSLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxZQUFZO0FBQUEsRUFDMUQsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsY0FBYztBQUFBO0FBQUEsSUFFZCxjQUFjO0FBQUE7QUFBQSxJQUVkLGNBQWM7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxJQUNULENBQUM7QUFBQTtBQUFBLElBRUQsY0FBYyxDQUFDLGVBQWU7QUFFNUIsYUFBTztBQUFBLFFBQ0wsTUFBTSxXQUFXO0FBQUEsUUFDakIsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
