/**
 * Загрузчик файлов разрешает import/require()
 * на файл в URL-адрес и отправляет файл в
 * выходной каталог
 *
 * @see https://webpack.js.org/loaders/
 */
export const fonts = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/resource',
    generator: {
        filename: 'assets/resource/[name].[ext]'
    },
};
