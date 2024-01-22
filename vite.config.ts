import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, }) => {
    return {
        clearScreen: false,
        build:       {
            outDir: `./dist/`,
        },
        plugins: [
            vue(),
            vueJsx(),
        ],
        css: {
            devSourcemap: true,
        },
    };
});
