const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: ['quasar'],

  css: {
    extract: {
      ignoreOrder: true,
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        'animejs$': path.resolve(__dirname, 'node_modules/animejs/lib/anime.min.js')
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
});
