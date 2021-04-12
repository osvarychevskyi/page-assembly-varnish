import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import serverConfig from '../webpack/webpack.config.server';
import clientConfig from '../webpack/webpack.config.client';
import path from "path";

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3040;

const app = express();

const compiler = webpack([clientConfig, serverConfig]);

const options = {
    publicPath: clientConfig.output.publicPath,
    serverSideRender: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        entrypoints: false,
    },
    writeToDisk: false,
};
app.set('etag', false);
app.set('cacheControl', false);

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', webpackDevMiddleware(compiler, options));
app.use('/', webpackHotMiddleware(compiler.compilers.find(cmp => cmp.name === 'client')));
app.use('/', webpackHotServerMiddleware(compiler));

app.listen(PORT, HOST, () => {
    console.log(`Server started: http://${HOST}:${PORT}`);
});
