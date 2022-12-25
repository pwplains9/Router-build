import { paths } from '../store';

/**
 * Эти параметры изменяют способ разрешения модулей
 *
 * @see https://webpack.js.org/configuration/resolve
 */

export const resolve = {
    alias: { // пути к папкам для быстрого доступа импортов
        '@': paths.src.base,
        '@pug': paths.src.pug,
        '@data': paths.src.data,
        '@fonts': paths.src.fonts,
        '@pages': paths.src.pages,
        '@images': paths.src.images,
        '@static': paths.src.static,
        '@styles': paths.src.styles,
        '@scripts': paths.src.scripts,
        '@svgSprites': paths.src.svgSprites,
        '@components': paths.src.components,
    },
    extensions: ['.js', '.ts', '.json', '.pug'],
    modules: [paths.src.base, 'node_modules', paths.src.components],
    roots: [paths.src.base, paths.src.scripts, paths.src.components],
    preferAbsolute: true,
    preferRelative: true,
    symlinks: false,
};
