/**
 * Файлы оптимизации
 *
 * @see https://webpack.js.org/configuration/optimization
 */

// оптимизация с разделнием файлов импорта в файл vendors и основной частью кода в файле main
export const optimizationSingle = {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            default: false,
            defaultVendors: false,
            vendors: {
                minSize: 0,
                chunks: 'all',
                name: 'vendors',
                enforce: true,
                test: /[\\/]node_modules[\\/]/i,
            },
        },
    },
};

// оптимизация с разделнием файлов импорта на отдельные чанки
export const optimizationMultiple = {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            default: false,
            defaultVendors: false,
            vendors: {
                minSize: 0,
                chunks: 'all',
                enforce: true,
                test: /[\\/]node_modules[\\/]/i,
                name (module) {
                    // получает имя, то есть node_modules/packageName/not/this/part.js
                    // или node_modules/packageName
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                    // имена npm-пакетов можно, не опасаясь проблем, использовать
                    // в URL, но некоторые серверы не любят символы наподобие @
                    return `import-${packageName.replace('@', '')}`;
                },
            },
        },
    },
};
