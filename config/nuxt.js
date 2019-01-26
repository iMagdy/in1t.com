const WorkboxPlugin = require('workbox-webpack-plugin')
const pkg = require('../package.json')
const resolve = require('path').resolve
const fs = require('fs')

module.exports = {
  globalName: pkg.name,

  globals: {
    id: () => `__${pkg.name}`,
    nuxt: () => `$${pkg.name}`,
    context: () => `__${pkg.name.toUpperCase()}__`,
    pluginPrefix: () => pkg.name,
    readyCallback: () => `onIn1tReady`,
    loadedCallback: () => `_onIn1tLoaded`
  },

  mode: 'universal',

  srcDir: resolve(__dirname, '..', 'resources'),

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.author,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#1F5DD3' },
      { name: 'google-site-verification', content: '2EZPuToreFEYFHRd1onOSsFnRK9cfhClVUJLJtAUi8s' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://vars.hotjar.com' },
      { rel: 'preconnect', href: 'https://static.hotjar.com' },
    ],
    style: [
      {
        cssText: '.async-hide { opacity: 0 !important }',
        type: 'text/css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: 'i18n'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
    'element-ui/packages/theme-chalk/src/index.scss',
    'element-ui/packages/theme-chalk/src/display.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/locale',
    '@/plugins/element-ui',
    '@/plugins/service-worker'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {

    analyze: true,

    extractCSS: true,

    optimizeCSS: true,
    
    profile: true,
    
    // babel config:
    babel: {
      plugins: [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    
    // extend webpack config:
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc: 'public/worker.js',
      })
    ]
  },

  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    },
    resourceHints: true
  },

  vue: {
    config: {
      productionTip: process.env.NODE_ENV !== 'production',
      devtools: process.env.NODE_ENV !== 'production'
    }
  }
}
