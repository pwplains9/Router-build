import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin';
import { paths } from '../store';

/**
 * Этот плагин webpack генерирует единую карту спрайтов SVG
 * содержит несколько элементов <symbol> из all.svg
 * файлы в каталоге
 *
 * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
 */

export const SVGSpritemap =
    new SVGSpritemapPlugin(`${paths.src.svgSprites}/**/*.svg`, {
        styles: `${paths.src.styles}/_sprites.scss`,
        output: {
            // filename: 'assets/images/symbol.[contenthash].svg',
            // svgo: {
            //     plugins: [
            //         { removeTitle: true },
            //         { removeStyleElement: true },
            //     ],
            // },
        },
        sprite: {
            prefix: 'icon-',
        },
    });
