import path from 'path';

// Получить режим разработки
export function isDev() {
    if (process.env.NODE_ENV) {
        return process.env.NODE_ENV === 'development';
    }
}

// Получить текущий рабочий каталог
export const cwd = process.cwd();

// Получить пути к проекту
export const paths = {
    // Откуда брать файлы
    src: {
        base            : path.resolve(cwd, 'src'),
        pug             : path.resolve(cwd, 'src/pug'),
        data            : path.resolve(cwd, 'src/data'),
        pages           : path.resolve(cwd, 'src/pages'),
        styles          : path.resolve(cwd, 'src/styles'),
        scripts         : path.resolve(cwd, 'src/scripts'),
        components      : path.resolve(cwd, 'src/components'),
        fonts           : path.resolve(cwd, 'src/assets/fonts'),
        images          : path.resolve(cwd, 'src/assets/images'),
        static          : path.resolve(cwd, 'src/assets/static'),
        svgSprites      : path.resolve(cwd, 'src/assets/svg-sprites'),
        mediaComponents : path.resolve(cwd, path.relative(cwd, 'src/components')),
        mediaPages      : path.resolve(cwd, path.relative(cwd, 'src/pages')),
    },
    // За чем следить
    watch: {
        base      : path.resolve(cwd, 'src'),
        fonts     : path.resolve(cwd, 'src/assets/fonts/**/*.*'),
        data      : [
                        path.resolve(cwd, 'src/data/**/*.*json'),
                        path.resolve(cwd, 'src/components/**/*.*json'),
                        path.resolve(cwd, 'src/pages/**/*.*json'),
        ]           ,
        pages     : path.resolve(cwd, 'src/pages'),
        images    : [
                        path.resolve(cwd, 'src/assets/images/**/*.*'),
                        path.resolve(cwd, 'src/components/**/*.*(png|jpg|jpeg|gif|ico|webp|avif|svg)'),
                        path.resolve(cwd, 'src/pages/**/*.*(png|jpg|jpeg|gif|ico|webp|avif|svg)'),
                    ],
        svgSprites: path.resolve(cwd, 'src/assets/svg-sprites/*.*svg'),
        html      : [
                        path.resolve(cwd, 'src/data/**/*.*json'),
                        path.resolve(cwd, 'src/**/*.*(pug|html)'),
                    ],
        scripts   : [
                        path.resolve(cwd, 'src/data/**/*.*json'),
                        path.resolve(cwd, 'src/scripts/**/*.*(js|ts)'),
                        path.resolve(cwd, 'src/components/**/*.*(js|ts)'),
                        path.resolve(cwd, 'src/pages/**/*.*(js|ts)'),
                    ],
        styles    : [
                        path.resolve(cwd, 'src/styles/**/*.*(css|scss)'),
                        path.resolve(cwd, 'src/components/**/*.*(css|scss)'),
                        path.resolve(cwd, 'src/pages/**/*.*(css|scss)'),
                    ],
        static    : [
                        path.resolve(cwd, 'src/assets/static/**/.*'),
                        path.resolve(cwd, 'src/assets/static/**/*.*'),
                    ],
    },
    // Куда положить
    build: {
        base        : path.resolve(cwd, 'build'),
        static      : path.resolve(cwd, 'build'),
        data        : path.resolve(cwd, 'build/data'),
        pages       : path.resolve(cwd, 'build/pages'),
        scripts     : path.resolve(cwd, 'build/scripts'),
        styles      : path.resolve(cwd, 'build/styles'),
        fonts       : path.resolve(cwd, 'build/assets/fonts'),
        images      : path.resolve(cwd, 'build/assets/images'),
        svgSprites  : path.resolve(cwd, 'build/assets/svg-sprites'),
        imagesOrigin: path.resolve(cwd, 'build/assets/images/origin'),
    },
    // Что почистить
    clean: path.resolve(cwd, './build')
};
