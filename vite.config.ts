import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@public": resolve(__dirname, "./public"),
    },
  },
  build:{
    outDir:resolve(__dirname,"./docs")
  },
  base:"/route-animation",
  plugins: [
    vue(),
    Pages({
      importMode: "sync",
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: true,
    }),
    Components({
      dts: true,
      types: [
        {
          from: "vue-router",
          names: ["RouterView", "RouterLink"],
        },
      ],
    }),
    Unocss({
      configFile: resolve(__dirname, "uno.config.ts"),
    }),
  ],
});
