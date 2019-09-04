module.exports = {
  devServer: {
    open: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3008',
        pathRewrite: { '^/api': '' }
      }
    }
  }

}
