import path from 'path';
import webpack from 'webpack';
import { getIfUtils } from 'webpack-config-utils';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const { ifDevelopment } = getIfUtils(process.env.NODE_ENV);

export default {
    name: 'client',
    entry: {
        main: './src/client/index.js',
    },
    mode: ifDevelopment('development', 'production'),

    target: 'web',
    //externals: ['react'],

    output: {
        path: path.resolve('build/public'),
        filename: 'js/[name].[chunkhash].js',
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
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new StatsWriterPlugin({
            filename: '../stats.json',
            fields: [
                'publicPath',
                'assetsByChunkName',
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.resolve(`build/analyze/client.html`),
            openAnalyzer: false,
        }),
    ],
};