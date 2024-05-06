import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import { defineConfig } from "vite";
import { getPlatformProxy } from "wrangler";

// @ts-ignore
export default defineConfig(async ({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "./app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  } else {
    const { env, dispose } = await getPlatformProxy();

    return {
      ssr: {
        external: [
          "react",
          "react-dom",
          "graphql",
          "@hono/graphql-server",
        ],
      },
      plugins: [
        honox({
          devServer: {
            env,
            plugins: [
              {
                onServerClose: dispose,
              },
            ],
          },
        }),
        pages(),
      ],
    };
  }
});
