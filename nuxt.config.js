import pkg from './package.json'

export default {
  // 🐱 Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Главный сварщик: Cварочное оборудование, всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=width=400, initial-scale=0.8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  publicRuntimeConfig: {
    clientVersion: pkg.version,
  },

  // 🐱 Global CSS: https://go.nuxtjs.dev/config-css
  // https://bootstrap-vue.org/docs#nuxtjs-module
  css: ['@/assets/custom.scss', '@mdi/font/css/materialdesignicons.min.css'],

  // 🐱 Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/lodash.js', '~/plugins/netstat.js'],

  // 🐱 Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // 🐱 Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'products',
        path: '/prods/',
        component: resolve(__dirname, 'pages/products/page.vue'),
        props: (route) => ({ query: route.query }),
      })
    },
  },

  // 🐱 Modules: https://go.nuxtjs.dev/config-modules

  // @nuxtjs/axios
  // @nuxtjs/sentry
  // @nuxtjs/device
  // @nuxtjs/gtm
  // cookie-universal-nuxt

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    '@luxdamore/nuxt-prune-html',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-gtag',
    '@nuxtjs/google-analytics',
    '@nuxt/image',
    // '@aceforth/nuxt-optimized-images',
    // '@nuxtjs/html-validator',
    '@nuxtjs/recaptcha',
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 10 }],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '30996406',
        webvisor: true,
      },
    ],
    [
      'nuxt-social-meta',
      {
        url: 'https://glsvar.ru',
        title:
          'Главный сварщик: Cварочное оборудование, всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
        site_name: 'Интрнет магазин Главный сварщик',
        description:
          'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
        img: 'https://api.glsvar.ru/files/og-image.png',
        img_size: { width: 600, height: 262 },
        locale: 'ru_RU',
        // twitter: '@user',
        // twitter_card: 'summary_large_image',
        theme_color: '#222222be',
      },
    ],
  ],

  // auth: {
  //   strategies: {
  //     google: {
  //       clientId:
  //         '1092381049103-nrh2muiaea242nh3h447ro2dfuurjae8.apps.googleusercontent.com',
  //       codeChallengeMethod: '',
  //       responseType: 'code',
  //       endpoints: {
  //         token: 'https://s2nullnullachtundfunfzig.ru/',
  //         userInfo: 'https://s2nullnullachtundfunfzig.ru/',
  //       },
  //     },
  //   },
  // },

  auth: {
    watchLoggedIn: true,
    cookie: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/',
            method: 'post',
            propertyName: 'data.token',
          },
          user: {
            url: 'u/',
            method: 'get',
            propertyName: 'data',
          },
          token: {
            maxAge: 0,
            global: true,
          },
          logout: false,
        },
      },
    },
  },

  
  recaptcha: {
    hideBadge: true,
    siteKey: '6LeFtqohAAAAAJqCMzcJoFI4LX39ndSM2ANzZzCN',
    version: 3,
  },


  // optimizedImages: {
  //   optimizeImages: true,
  // },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  gtm: {
    id: 'G-9T3RH9YGQV',
  },

  googleAnalytics: {
    id: 'UA-193338646-1',
  },

  'google-gtag': {
    id: 'G-9T3RH9YGQV',
    config: {
      anonymize_ip: true,
      send_page_view: false,
      linker: {
        domains: ['www.glsvar.ru', 'glsvar.ru'],
      },
    },
    debug: true,
    disableAutoPageTrack: false,
  },

  // 🐱 Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.glsvar.ru',
    // baseURL: 'http://127.0.0.1:8000',
  },

  // 🐱 PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Интернет магазин: Главный сварщик',
      short_name: 'Главный сварщик',
      theme_color: '#202020',
      background_color: '#202020',
      description:
        'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
      start_url: 'https://glsvar.ru',
      categories: ['shop'],
    },
  },

  loading: {
    color: 'yellow',
    height: '2px',
  },

  // 🐱 Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [({ isServer }) => 'vue-typeahead-bootstrap'],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },

  /// 🐱 Config perfomance
  pruneHtml: {
    enabled: false, // `true` in production
    hideGenericMessagesInConsole: false, // `false` in production
    hideErrorsInConsole: false, // deactivate the `console.error` method
    hookRenderRoute: true, // activate `hook:render:route`
    hookGeneratePage: true, // activate `hook:generate:page`
    selectors: [
      // CSS selectors to prune
      'link[rel="preload"][as="script"]',
      'script:not([type="application/ld+json"])',
    ],
    classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
    link: [], // inject custom links, only if pruned
    script: [], // inject custom scripts, only if pruned
    htmlElementClass: null, // a string added as a class to the <html> element if pruned
    cheerio: {
      // the config passed to the `cheerio.load(__config__)` method
      xmlMode: false,
    },
    types: [
      // it's possibile to add different rules for pruning
      'default-detect',
    ],

    // 🐱 Type: `default-detect`
    headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
    auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
    isAudit: true, // remove selectors if match with `auditUserAgent`
    isBot: true, // remove selectors if is a bot
    ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
    matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

    // 🐱 Type: 'query-parameters'
    queryParametersToPrune: [
      // array of objects (key-value)
      // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
      {
        key: 'prune',
        value: 'true',
      },
    ],
    queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

    // 🐱 Type: 'headers-exist'
    headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
    headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

    // Emitted events for callbacks methods
    onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
  },
}
