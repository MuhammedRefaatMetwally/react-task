import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
            "@": resolve(__dirname, "./src"),
        },
    },
}));