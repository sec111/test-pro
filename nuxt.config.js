var webpack = require('webpack');
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
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
    prefix: '/api', // baseURL
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

