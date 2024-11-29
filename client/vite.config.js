import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"; // The vanillaExtractPlugin() is added to enable Vanilla Extract CSS-in-JS support

export default defineConfig(({ mode }) => {
  // RUN THIS FUNCTION BEFORE LOADING OUR CONFIG OBJECT
  const env = loadEnv(mode, process.cwd(), "");

  // OUR ORIGINAL CONFIG OBJECT
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react(), vanillaExtractPlugin()],
    server: {
      // port: 3005,
      port: env.VITE_PORT,

      // Proxy API requests to the server
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // Ensure this is defined in your .env file
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"; // The vanillaExtractPlugin() is added to enable Vanilla Extract CSS-in-JS support

// export default defineConfig(({ mode }) => {
//   // RUN THIS FUNCTION BEFORE LOADING OUR CONFIG OBJECT
//   const env = loadEnv(mode, process.cwd());

//   // OUR ORIGINAL CONFIG OBJECT
//   return {
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//     plugins: [react(), vanillaExtractPlugin()],
//     server: {
//       port: 3005,

//       // Proxy API requests to the server
//       proxy: {
//         "/api": {
//           target: env.VITE_API_URL, // Ensure this is defined in your .env file
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//     },
//   };
// });
