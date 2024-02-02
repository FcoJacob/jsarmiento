// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        [
            "@nuxtjs/eslint-module",
            {
                include: ["/**/*.{js,jsx,ts,tsx,vue}"],
                lintOnStart: false,
            },
        ],
    ],
    colorMode: {
        preference: "system",
        dataValue: "theme",
        classSuffix: "",
    },
    i18n: {
        vueI18n: "./i18n.config.ts", // if you are using custom path, default
    },
    particles: {
        mode: "full",
        lazy: true,
    },
});
