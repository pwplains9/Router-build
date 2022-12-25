import { entry, output, optimizationSingle, optimizationMultiple, resolve } from './options/index.js';
import * as plugins from './plugins';
import * as loaders from './loaders';
import { paths } from './store.js';
import {config} from '../config.js';

const optimization = config.javascript.multipleFiles ? optimizationMultiple : optimizationSingle;

export default {
    context: paths.src.base,
    entry,
    output,
    watchOptions: {
        // aggregateTimeout: 300, // Delay the first rebuild (in ms)
        // poll: 1000, // Poll using interval (in ms or a boolean)
        ignored: /node_modules/, // Ignore to decrease CPU usage
    },
    experiments: {
        // WebAssembly as async module (Proposal)
        syncWebAssembly: true,
        // WebAssembly as sync module (deprecated)
        outputModule: true,
        // Allow to output ESM
        topLevelAwait: true,
        // Allow to use await on module evaluation (Proposal)
    },
    module: {
        rules: [
            loaders.scripts,
            loaders.html,
            loaders.pug,
            loaders.styles,
            loaders.images,
            loaders.fonts,
        ],
    },
    plugins: [
        plugins.SVGSpritemap,
        plugins.Provide,
        plugins.MiniCssExtract,
        plugins.Copy,
        // plugins.ESLint,
        plugins.Interpolate,
        plugins.WebpackBuildNotifier,
        plugins.Dashboard,
        ...new plugins.HtmlPages(),
    ],
    optimization,
    resolve,
    resolveLoader: {
        alias: {
            'pug-loader': '@webdiscus/pug-loader',
        },
    },
};
