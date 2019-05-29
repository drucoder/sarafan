const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8000,
        allowedHosts: [
            'localhost:9000'
        ],
        stats: 'errors-only',
        clientLogLevel: 'error',
    },
});
