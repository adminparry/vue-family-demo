const path = require('path');

const merge = require('webpack-merge');
const eo = require('./eo');
const loader = require('./loader');

const webpack = require('webpack');
const root = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pre = merge(eo, loader);

module.exports = merge(pre, {
    mode: 'development',
    devServer: {
        contentBase: path.join(root, "dist"),
        historyApiFallback: true,
        inline: true,
        port: 5800
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias:{
            vue$: "vue/dist/vue.esm.js", 
            '@': path.resolve('src')
        }
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'false'
        })
    ],
   
})