import crypto from 'crypto';
const BUILDID = crypto.randomBytes(10).toString('hex');

export default {
  // server: {
  //   // host: 'localhost'
  //   host: ''
  // },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    splitChunks: {
      layouts: true
    },

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

      // config.module.rules.push(
      //   {
      //     test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //     loader: 'file-loader'
      //   }
      // )

         // Run ESLint on save
         if (ctx.isDev && ctx.isClient) {
          // config.module.rules.push({
          //   enforce: 'pre',
          //   test: /\.(js|vue)$/,
          //   loader: 'eslint-loader',
          //   exclude: /(node_modules)/
          // })
         }
    },

    extractCSS: true,

    filenames: {
      css: `${BUILDID}.[name].css`,
    },

    entry: ['webpack-hot-middleware/client.js?quiet=true'],

    // plugins: [
    //   new webpack.ProvidePlugin({
    //     // global modules
    //     '$': 'jquery',
    //     '_': 'lodash'
    //   })
    // ]
  }
}
