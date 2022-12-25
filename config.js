export const config = {
    html: { // настройки для html
        publicPath: '/', // путь к файлам для продакшн версии
        publicPathDev: '/', // путь к файлам для версии разработки
        domain: '/', // домен проекта
        isProd: () => false, // isProd = true - используется publicPath; isProd = false - используется publicPathDev
    },
    javascript: { // настройки для js
        multipleFiles: false, // разделить импорт файлов из node_modules на отдельные чанки
    },
    server: { // настройки для dev-сервера
        spa: true, // вхключение SPA режима
        cors: true, // обходить cors ошибки при запросах (пока не работает)
        open: true, // открывать ли страницу в браузере при старте
        tunnel: "ninelines", // нужен ли онлайн путь до локальной сборки (пока не работает)
    },
    images: { // настройки для оптимизации изображений
        components: {
            /**
             * название путей папок находящихся в компонентах которые можно обрезать
             * @example components/home/images/filename -> images/home/filename
            */
            paths: ['img', 'images', 'assets'],
        },
        optimize: false, // нужно ли оптимизировать картинки в production версии
        webpOptions: { // настройки для webp (squoosh)
            lossless: true,
            segments: 3,
            quality: 85,
        },
        mozJpegOptions: { // настройки для jpeg (squoosh)
            progressive: true,
            quality: 85,
        },
        oxiPngOptions: { // настройки для png (squoosh)
        },
        gifOptions: { // настройки для gif (imagemin)
            interlaced: true,
            optimizationLevel: 2,
        },
        svgOptions: { // настройки для svg (imagemin)
            floatPrecision: 5,
            plugins: [
                {optimizationLevel: 3},
                {progessive: true},
                {interlaced: true},
                {removeViewBox: false},
                {removeUselessStrokeAndFill: false},
                {moveElemsAttrsToGroup: true},
                {moveGroupAttrsToElems: true},
                {convertEllipseToCircle: true},
                {removeEmptyContainers: true},
                {removeUnusedNS: true},
                {removeTitle: true},
                {removeDesc: true},
                {removeDimensions: true},
                {cleanupIDs: false}
            ]
        }
    },
};
