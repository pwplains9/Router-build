import InterpolateHtmlPlugin from 'interpolate-html-plugin';
import {isDev} from '../store';

/**
 * Этот плагин позволяет интерполировать переменные в HTML-файлы.
 *
 * @see https://www.npmjs.com/package/interpolate-html-plugin
 */
/* This is a plugin for webpack. It allows you to interpolate variables into your HTML files. */
export const Interpolate = new InterpolateHtmlPlugin({
    'NODE_ENV': isDev()
});
