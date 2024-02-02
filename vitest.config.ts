import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
    test: {
        globals: true,
        environment: "jsdom",
        environmentOptions: {
            nuxt: {
                mock: {
                    intersectionObserver: true,
                },
            },
        },
        include: ["**/*.spec.ts"],
        exclude: ["node_modules", ".nuxt", "dist"],
        coverage: {
            include: [
                "**/components/**/*.{js,vue,ts}",
                "**/layouts/**/*.vue",
                "**/pages/**/*.vue",
                "**/plugins/**/*.{js,ts}",
            ],
        },
    },
});
