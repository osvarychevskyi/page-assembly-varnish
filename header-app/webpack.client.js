const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    target: 'web',

    output: {
        path: path.resolve('build/public'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            title: 'Development Shell',
            filename: 'index.html',
            template: 'public/index.html',
            inject: 'body'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public/*",
                    to: "[name][ext]",
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
    ],
};