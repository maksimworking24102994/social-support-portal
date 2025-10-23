import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "import.meta.env.OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
      "import.meta.env.API_URL": JSON.stringify(env.API_URL),
      "import.meta.env.OPENAI_MODEL": JSON.stringify(env.OPENAI_MODEL),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
