export default {
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "Mention by Kaana",
      meta: [
        {
          name: "description",
          content:
            "We believe in the potential of people when they can come together.",
        },
      ],
      script: [
        /*{ src: "//assets.kaana.io/js/jquery-3.5.1.min.js" },*/
      ],
      noscript: [{ children: "JavaScript is required" }],
      link: [
        /*{ rel: "stylesheet", href: "//assets.kaana.io/css/basic.css" },*/
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/i18n",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        name: "English",
        code: "en-US",
        file: "en-US.json",
        flag: "🇺🇸",
      },
      {
        name: "Español",
        code: "es-ES",
        file: "es-ES.json",
        flag: "🇪🇸",
      },
      {
        name: "Français",
        code: "fr-FR",
        file: "fr-FR.json",
        flag: "🇫🇷",
      },
      {
        name: "Italiano",
        code: "it-IT",
        file: "it-IT.json",
        flag: "🇮🇹",
      },
    ],
    langDir: "locales/",
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
    },
  },
  colorMode: {
    preference: "light", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
  },
};
