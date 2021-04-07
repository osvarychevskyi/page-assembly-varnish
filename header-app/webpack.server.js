const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
    entry: './src/server.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        writeToDisk: true,
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
    ],
};