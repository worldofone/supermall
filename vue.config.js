const path = require('path');//使用了nodejs中的path包
module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            // extensions: [".js", ".json",".css",".vue"],
            alias: {
                'assets': '@/assets',  //@就是src
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}