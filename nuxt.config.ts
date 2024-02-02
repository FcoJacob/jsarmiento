// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwindcss.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@nuxtjs/eslint-module', {
      include: ['/**/*.{js,jsx,ts,tsx,vue}'],
      lintOnStart: false
    }]
  ],
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: ''
  }
})
