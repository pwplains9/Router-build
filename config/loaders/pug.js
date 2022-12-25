import {
    isDev,
    paths,
} from '../store';
import { config } from '../../config';

/**
 * Плагин webpack экспортирует HTML как строку
 *
 * @see https://webpack.js.org/loaders/html-loader/
 * @see https://github.com/webdiscus/pug-loader
 */

export const pug = {
    test: /\.pug$/,
    use: [
        // { нужно в случае использование pug-loader с методом html
        //     loader: 'html-loader',
        //     options: {
        //       esModule: true, // разрешить использовать require() для загрузки шаблона в JavaScript
        //       sources: {
        //         // Static resource URL from public web path should not be parsed.
        //         // Leave as is:
        //         //   img(src='/assets/image.jpg')
        //         //   link(rel='stylesheet' href='assets/styles.css')
        //         // Must be processed:
        //         //   img(src=require('./image.jpg'))
        //         //   link(rel='stylesheet' href=require('./styles.css'))
        //         urlFilter: (attribute, value) => {
        //             if (path.isAbsolute(value) && fs.existsSync(value)) {
        //                 return path.isAbsolute(value) && fs.existsSync(value);
        //             }
        //         },
        //       }
        //     },
        // },
        {
            loader: "@webdiscus/pug-loader",
            options: {
                compileDebug: true,
                esModule: true,
                basedir: paths.src.base,
                data: {
                    isDev: isDev(),
                    prefix: config.html.publicPath,
                    publicPath: config.html.isProd() ? config.html.publicPath : config.html.publicPathDev
                }
            },
        }
    ]
};
