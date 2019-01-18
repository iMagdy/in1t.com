const WorkboxPlugin = require('workbox-webpack-plugin')
const pkg = require('../package.json')
const resolve = require('path').resolve

module.exports = {
globalName: pkg.name,

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
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

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
    '@/plugins/analytics',
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
    /*
    ** You can extend webpack config here
    */
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
