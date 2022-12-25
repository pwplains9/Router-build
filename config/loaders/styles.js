import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { isDev } from '../store';

/**
 * Загружает файл Sass/SCSS и компилирует его в CSS
 *
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin
 * @see https://webpack.js.org/loaders/css-loader
 * @see https://github.com/webpack-contrib/postcss-loader
 * @see https://webpack.js.org/loaders/sass-loader
 */

export const styles = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
    ],
    generator: {
        filename: 'assets/styles/[name].[ext]'
    },
};
