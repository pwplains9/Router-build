import ESLintPlugin from 'eslint-webpack-plugin';

/**
 * Автоматически загружать модули вместо того, чтобы
 * импортировать (import) или требовать (require) их везде
 *
 * @see https://webpack.js.org/plugins/eslint-webpack-plugin/
 */

export const ESLint = new ESLintPlugin({
    failOnError: false,
    fix: true,
    // fix: process.env.ES_LINT_AUTOFIX == 'true',
    formatter: process.env.ES_LINT_FORMATTER,
});
