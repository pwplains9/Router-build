/**
 * Загрузчик файлов разрешает import/require()
 * на файл в URL-адрес и отправляет файл в
 * выходной каталог
 *
 * @see https://webpack.js.org/loaders/
 */

// GLSL
export const GLSL = {
    test: /\.(glsl|vs|fs|vert|frag)$/i,
    type: 'assets', // Webpack 5.x: loads file content into bundled JS file (raw-loader)
    exclude: /node_modules/
    // { test: /\.(glsl|vs|fs|vert|frag)$/i, loader: 'glslify-loader', exclude: /node_modules/ }
};

// Models
export const GLTF = {
    test: /\.(glb|gltf|fbx|obj)$/,
    type: 'assets', // Webpack 5.x: loads file into output folder (file-loader)
    exclude: /node_modules/
};
