import { paths } from "../store";
import { config } from "../../config";

/**
 * dev-сервер для быстрой разработки
 *
 * @see https://webpack.js.org/configuration/dev-server
 */

export const devServer = {
    static: {
        directory: paths.build.base,
        // watch: true,
        // publicPath: "./build",
    },
    historyApiFallback: config.server.spa, // true для включения режима SPA
    watchFiles: [
        'src/data/**/*.json',
        'src/components/**/*.json',
        'src/pages/**/*.json',
        'src/pug/**/*.pug',
        'src/components/**/*.pug',
        'src/pages/**/*.pug',
    ],
    port: 'auto' || process.env.PORT,
    open: config.server.open || process.env.OPEN,
    https: false,
    http2: false,
    hot: true,
    liveReload: true,
    client: {
        logging: 'warn',
        overlay: {
            errors: true,
            warnings: false,
        },
        progress: true,
    },
    devMiddleware: {
        index: true,
        // publicPath: paths.build.base,
        // serverSideRender: true,
        // writeToDisk: true,
    },
    compress: false, // true, применить gzip сжитие в разработке
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
    },
};
