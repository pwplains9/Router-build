import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { paths } from '../store';
import { config } from '../../config';

/**
 * Копирует отдельные файлы или целые каталоги,
 * которые уже существуют, в каталоге сборки
 *
 * @see https://webpack.js.org/plugins/copy-webpack-plugin/
 */

const mediaPattern = (from) => ({
    from,
    to({ context, absoluteFilename }) {
        let pathTo = absoluteFilename;

        config.images.components.paths.map((item) => {
            if (absoluteFilename.indexOf(item) > -1) {
                pathTo = absoluteFilename.replace(`/${item}`, '');
            }
        });

        // обрезает путь С С:/project/src/components/home/images/filename ДО components/home/filename
        // при этом удаляется папка которая была после названия папки с компонентом
        pathTo = path.relative(context, pathTo);

        return `${paths.build.images}/${pathTo}`;
    },
    globOptions: {
        ignore: ['**/*.(js|ts|pug|scss|css|json|keep)'],
    },
    noErrorOnMissing: true,
});

export const Copy = new CopyPlugin({
    patterns: [
        {
            from: paths.src.images,
            to: paths.build.images,
            noErrorOnMissing: true,
        },
        mediaPattern(paths.src.mediaComponents),
        mediaPattern(paths.src.mediaPages),
        {
            from: paths.src.static,
            to: paths.build.static,
            noErrorOnMissing: true,
        },
        {
            from: paths.src.svgSprites,
            to: paths.build.svgSprites,
            noErrorOnMissing: true,
        }
    ],
});
