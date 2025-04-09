// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "tr", language: "tr-TR" },
    ],
    defaultLocale: "en",
  },
  css: ["./assets/styles/design.scss"],
});
