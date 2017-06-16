const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
//遍历输入文件
const pages = fs.readdirSync(path.join('./app/')).filter(function (page) {
    return page.indexOf('.') !== 0;
});
const entry = {};
pages.forEach(function(page){
    let pageName = page.split('.')[0];
    entry[pageName] = ['./app',page].join('/');
});
module.exports = {
    entry: entry,
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
                    presets: ['es2015', 'react','stage-0']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};