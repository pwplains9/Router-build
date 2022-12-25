/**
 * Плагин webpack экспортирует HTML как строку
 *
 * @see https://webpack.js.org/loaders/html-loader/
 */

export const html = {
    test: /\.html$/i,
    loader: "html-loader",
    options: {
        sources: true,
        esModule: true,
        minimize: false,
    },
};
