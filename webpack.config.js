const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPluginLoader = require('mini-css-extract-plugin')
const { vueLoaderPlugin, VueLoaderPlugin } = require('vue-loader')
// import webpack from 'webpack'

// /** 
//  * 
//  * @type {webpack.Configuration}
// */
const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: [MiniCssPluginLoader.loader, 'css-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new MiniCssPluginLoader(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;