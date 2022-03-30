module.exports = {
  configureWebpack: {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
  },
  devServer: {
    open: true,
    port: 3000
  }
}