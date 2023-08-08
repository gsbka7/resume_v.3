// 部署時使用
const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/resume_v.2/'
// })

// 打包時使用
module.exports = defineConfig({
  transpileDependencies: true,  
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/'
})