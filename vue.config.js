const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      // Vant组件库更改主题
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#478978',
            // 'nav-bar-title-text-color': 'white',
            // 'button-info-background-color': '#52A38C',
            // 'button-info-border-color': '#4B9580'

            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.join(__dirname, '/src/styles/cover.less')}";`
          }
        }
      }
    }
  }
})
