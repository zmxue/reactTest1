const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        "index": './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "[name].js"
    },
    devServer: {
        inline: true,
        port: 8086
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};