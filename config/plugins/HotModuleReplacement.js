import webpack from 'webpack';

/**
 * Автоматически загружать модули вместо того, чтобы
 * импортировать (import) или требовать (require) их везде
 *
 * @see https://webpack.js.org/plugins/hot-module-replacement-plugin/
 */

export const HotModuleReplacement = new webpack.HotModuleReplacementPlugin({
    // Options...
});
