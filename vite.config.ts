import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_ENDPOINT}`;
  const PORT: number = Number(`${env.VITE_PORT ?? "3001"}`);

  return {
    server: {
      proxy: {
        "/api": {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      port: PORT,
    },
    plugins: [TanStackRouterVite({}), react()],
  };
});
