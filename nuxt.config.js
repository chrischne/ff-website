/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/ff-website/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Freie Forschung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en',
      class: 'has-navbar-fixed-top'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    '@nuxtjs/font-awesome',
    '@nuxtjs/markdownit',
    'nuxt-i18n'
  ],
  styleRessources: {
    scss: '~/assets/scss/main.scss'
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: ['faCookieBite', 'faCommentDots', 'faEnvelope', 'faGrinWink', 'faHeart']
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faDev', 'faFacebook', 'faTwitter', 'faInstagram', 'faYoutube', 'faGithub']
      }
    ]
  },
  markdownit: {
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          home: 'Home',
          projects: 'Projects',
          people: 'People',
          about: 'About',
          join: 'Join',
          contact: 'Contact',
          research_pods: 'Research Pods'
        },
        de: {
          home: 'Home',
          projects: 'Projekte',
          people: 'Leute',
          about: 'Über uns',
          join: 'Mitmachen',
          contact: 'Kontakt',
          research_pods: 'Forschungsgefässe'
        }
      }
    }
  },
  ...routerBase
}
