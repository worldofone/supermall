module.exports = {
    configureWebpack:{
        resolve:{
            // extensions: [".js", ".json",".css",".vue"],
            alias:{
                'assets':'@/assets',  //@就是src
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}