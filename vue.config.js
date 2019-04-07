const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/sass/_init.sass";`
      }
    }
  },
}
