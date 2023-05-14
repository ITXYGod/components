const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: { // 配置开发服务器
    port: 3000,
    open: true // 让浏览器自动打开
  }
})
