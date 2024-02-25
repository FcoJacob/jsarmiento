// https://nuxt.com/docs/api/configuration/nuxt-config

const development = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
    app: {
        baseURL: development ? "/" : "/jsarmiento/",
        buildAssetsDir: development ? "/_nuxt/" : "assets",
        pageTransition: {
            name: "page",
            mode: "out-in", // default
        },
    },
    experimental: {
        payloadExtraction: false,
    },
    devtools: { enabled: true },
    css: ["~/assets/css/tailwindcss.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        "nuxt-particles",
        "@nuxt/test-utils/module",
        [
            "@nuxtjs/eslint-module",
            {
                include: ["/**/*.{js,jsx,ts,tsx,vue}"],
                lintOnStart: false,
            },
        ],
        "@nuxt/image",
    ],
    colorMode: {
        preference: "system",
        dataValue: "theme",
        classSuffix: "",
    },
    i18n: {
        vueI18n: "./i18n.config.ts",
    },
    particles: {
        mode: "full",
        lazy: true,
    },
    image: {
        quality: 100,
    },
    nitro: {
        prerender: {
            failOnError: false,
        },
    },
});
