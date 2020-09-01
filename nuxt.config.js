var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test-pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    // fronted
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      // if (isServer) {
      //   config.externals = [
      //     nodeExternals({ // whitelist
      //       allowlist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/]
      //     })
      //   ];
      // }
      // config.plugins.push(
      //   new webpack.ProvidePlugin({
      //     jQuery: 'jquery',
      //     $: 'jquery',
      //     'window.jQuery': 'jquery'
      //   })
      // );
    }
  },
  plugins: [
    '@/plugins/axios',
　　{src: '@/plugins/common.js', ssr: false},
    {src: '~/plugins/ElementUI', ssr: true },
    {src:"~/plugins/axios.js", ssr:false},
    '~/plugins/ant-design-vue/ant-design-vue'
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    // prefix: '/api', // baseURL
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:1337',
      pathRewrite: {
        '^/api/': ''
      },
      headers: {
        Origin: 'http://localhost:1337',
        Connection: 'keep-alive'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
}

