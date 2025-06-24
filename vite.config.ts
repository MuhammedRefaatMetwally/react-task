import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(() => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [
        react(),
        tailwindcss(),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": resolve(import.meta.dirname, "./src"),
        },
    },
}));