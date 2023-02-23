import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },
  app: {
    head: {},
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@nuxtjs/apollo",
    ["unplugin-icons/nuxt", {}],
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://hub.snapshot.org/graphql",
      },
    },
  },
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      datetimeFormats: {
        en: {
          short: {
            year: "numeric",
            month: "short",
            day: "numeric",
          },
        },
      },
    },
  },
  typescript: {
    shim: false,
  },
  tailwindcss: {
    cssPath: "@/assets/css/style.scss",
    configPath: "tailwind.config.js",
  },
  vite: {
    plugins: [
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons(),
    ],
  },
});
