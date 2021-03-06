const path = require('path');
const merge = require('webpack-merge');
const loader = require('./loader');
const root = path.resolve(__dirname, '..');
const plugins = require('./plugins');

module.exports = merge(
    loader,
    {
        entry: path.join(root, 'index.js'),
        output:{
            path: path.join(root, 'dist'),
            filename: 'vue-pagination-pc.js',
            libraryTarget: 'umd'
        },
        mode: 'production',
        resolve: {
            extensions: ['.vue', '.js', '.json'],
            alias: {
                vue: 'vue/dist/vue.esm.js',
                '@': path.resolve('src')
            }
        },
        devServer: {
            contentBase: path.join(root, 'dist'),
            historyApiFallback: true,
            inline: true,
            port: 4000
        },
        devtool: 'source-map',
        plugins,
    }
)