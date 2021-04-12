import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const { ifDevelopment } = getIfUtils(process.env.NODE_ENV);

export default removeEmpty({
    name: 'server',
    entry: ifDevelopment('./src/render.js', './src/server.js'),
    mode: ifDevelopment('development', 'production'),

    target: 'node',

    externals: [nodeExternals({
        //allowlist: ['react']
    })],

    output: {
        path: path.resolve('build'),
        filename: 'server.js',
        libraryTarget: 'umd',
        publicPath: '/',
        assetModuleFilename: 'img/[name].[contenthash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
                { from: "assets", to: "public/img/[name].[contenthash][ext]" },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.resolve(`build/analyze/server.html`),
            openAnalyzer: false,
        }),
    ],
});
