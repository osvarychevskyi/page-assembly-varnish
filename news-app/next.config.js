const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/news.srv' : '',
    trailingSlash: true,
}