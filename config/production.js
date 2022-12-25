import TerserJSPlugin from 'terser-webpack-plugin';
import { Clean } from './plugins';
import { optimization } from './options/optimization.js';

export default {
    mode: 'production',
    optimization: {
        ...optimization,
        minimize: true,
        chunkIds: "size",
        moduleIds: "size",
        mangleExports: "size",
        nodeEnv: 'production',
        minimizer: [new TerserJSPlugin({
            terserOptions: {
                compress: true,
                toplevel: true,
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
    plugins: [Clean],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
