const path = require('path');
const { config } = require('process');
const webpack = require('webpack');

const resolve = function(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    pages:{
        index:{
            entry:'src/main.ts',
            title:'好孕妈妈'
        }
    },
    // configureWebpack: {
    //     resolve: {
    //         extensions: ['.js'],
    //         alias: {
    //           'flvjs':'flv.js/dist/flv.js'
    //         }
    //     },
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //             flvjs:'flvjs'
    //           })
    //     ]
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test-saas-apis.mumway.com',
                ws: true,
                changeOrigin: true
            },
            '/edu': {
                target: 'http://dev.mumway.com',
                ws: true,
                changeOrigin: true
            },
            '/applet': {
                target: 'http://dev.mumway.com',
                ws: true,
                changeOrigin: true
            },
        }
    },
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // Provide path to the file with resources
            resources: './src/assets/style/style.scss',
            // Or array of paths
            // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          })
          .end()
      })
      config.resolve.alias
        .set('components1', resolve('./src/components'))
      }
}
