import {isDev} from '../store';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * Этот плагин извлекает CSS в отдельные файлы
 *
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 */
export const MiniCssExtract = new MiniCssExtractPlugin({
    filename: isDev() ? '[name].css' : '[name].css',
    chunkFilename: isDev() ? '[name].css' : '[name].css',
});
