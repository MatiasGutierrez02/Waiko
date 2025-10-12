const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: ['quasar'],

  configureWebpack: {
    resolve: {
      alias: {
        'animejs$': path.resolve(__dirname, 'node_modules/animejs/lib/anime.min.js')
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
