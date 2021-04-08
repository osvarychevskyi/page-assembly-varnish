import path from 'path';
import webpack from 'webpack';
import { getIfUtils } from 'webpack-config-utils';
import { StatsWriterPlugin } from 'webpack-stats-plugin';

const { ifDevelopment, ifProduction } = getIfUtils(process.env.NODE_ENV);

export default {
    name: 'client',
    entry: './src/client/index.js',
    mode: ifDevelopment('development', 'production'),

    target: 'web',

    output: {
        path: path.resolve('build/public'),
        filename: 'main.js',
        assetModuleFilename: 'public/[name].[contenthash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ]
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
    ],
};