// vite.config.js
import { defineConfig } from "file:///Users/farahshibatambunan/Desktop/ass1/node_modules/vite/dist/node/index.js";
import react from "file:///Users/farahshibatambunan/Desktop/ass1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { vanillaExtractPlugin } from "file:///Users/farahshibatambunan/Desktop/ass1/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var vite_config_default = defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    port: 3005,
  },
});
export { vite_config_default as default };
