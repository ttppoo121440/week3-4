import { defineConfig, UserConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { globSync } from "glob";
import liveReload from "vite-plugin-live-reload";

interface ServerOptions {
  historyApiFallback?: boolean;
}
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("src/pages/")) {
          const newFileName = fileName.slice("src/pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  base: import.meta.env.VITE_BASE_URL || "/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ...Object.fromEntries(
          globSync("src/pages/**/*.html").map((file) => [
            path.relative(
              "src/pages",
              file.slice(0, file.length - path.extname(file).length),
            ),
            file,
          ]),
        ),
      },
    },
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  } as ServerOptions,
  plugins: [
    tsconfigPaths(),
    liveReload([
      "./src/layout/**/*.ejs",
      "./src/pages/**/*.ejs",
      "./src/pages/**/*.html",
    ]),
    ViteEjsPlugin({
      base: import.meta.env.VITE_BASE_URL || "/",
    }),
    moveOutputPlugin(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer],
    },
  },
} as UserConfig);
