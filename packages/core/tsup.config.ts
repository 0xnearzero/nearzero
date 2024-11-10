import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    sourcemap: true,
    clean: true,
    format: ["esm"], // Ensure you're targeting CommonJS
    external: [
        "dotenv", // Externalize dotenv to prevent bundling
        "fs", // Externalize fs to use Node.js built-in module
        "path", // Externalize other built-ins if necessary
        "http",
        "https",
        // Add other modules you want to externalize
    ],
    dts: true,
    platform: 'node',
    target: 'node20',
    noExternal: ['@eliza/*'],
    esbuildOptions(options) {
        options.conditions = ['module'];
    }
});