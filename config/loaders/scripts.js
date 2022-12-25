/**
 * Этот пакет позволяет транспилировать JavaScript
 * файлы с использованием Babel и webpack
 *
 * @see https://webpack.js.org/loaders/babel-loader/
 */

export const scripts = {
    test: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
    generator: {
        filename: 'assets/javascript/[name].[ext]'
    },
};
