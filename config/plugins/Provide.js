import { ProvidePlugin } from 'webpack';

/**
 * Автоматически загружает модули в проект вместо того, чтобы
 * импортировать (import) или требовать (require) их везде
 *
 * @see https://webpack.js.org/plugins/provide-plugin/
 */
export const Provide = new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
});
