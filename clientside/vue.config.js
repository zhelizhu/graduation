const path = require('path');
module.exports = {
    // 配置less变量
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/style.less')
            ]
        }
    },

    devServer: {
        port: 8088     // 端口号
    }

}