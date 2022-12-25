import { isDev, paths } from '../store';
import { config } from '../../config';

/**
 * Где webpack выводит assets и bundles
 *
 * @see https://webpack.js.org/configuration/output/
 */

export const output = {
    clean: true, // чистить папку перед сборкой
    publicPath: config.html.isProd() ? `${config.html.publicPath}` : `${config.html.publicPathDev}`, // исходный путь до файлов абсолютный или релативный
    path: paths.build.base,
    filename: isDev() ? '[name].js' : '[name].js',
    chunkFilename: isDev() ? '[name].js' : '[name].js',
    crossOriginLoading: 'anonymous',
    assetModuleFilename: 'assets/[name].[ext]',
    module: true,
    // какие ES-функции могут быть использованы в сгенерированном коде
    environment: {
        // поддерживает функции со стрелками ('() => { ... }').
        arrowFunction: true,
        // поддерживает BIGINT как литерал (123n).
        bigIntLiteral: false,
        // поддерживает const и let для объявлений переменных.
        const: true,
        // поддерживает деструктурирование ('{ a, b } = obj').
        destructuring: true,
        // поддерживает функцию асинхронного импорта() для импорта модулей ECMAScript.
        // https://habr.com/ru/company/ruvds/blog/556744/
        dynamicImport: true,
        // поддерживает итерацию 'for of' ('for (const x of array) { ... }').
        forOf: true,
        // поддерживает необязательную цепочку ('obj?.a' или 'obj?.()').
        optionalChaining: true,
        // поддерживает шаблонные литералы. `The sum of ${x}`
        templateLiteral: true
    }
};
