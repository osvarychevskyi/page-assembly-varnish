import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import { getIfUtils } from 'webpack-config-utils';
import CopyPlugin from "copy-webpack-plugin";

const { ifDevelopment, ifProduction } = getIfUtils(process.env.NODE_ENV);

export default {
    name: 'server',
    entry: './src/server.js',
    mode: ifDevelopment('development', 'production'),

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('build'),
        filename: 'server.js',
        libraryTarget: 'umd',
        assetModuleFilename: 'public/[name].[contenthash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/i,
                type: 'asset/resource',
                generator: {
                    emit: false,
                },
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new CopyPlugin({
            patterns: [
                { from: "assets", to: "public/[name].[contenthash][ext]" },
            ],
        }),
    ],
};