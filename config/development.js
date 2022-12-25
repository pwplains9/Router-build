import { devServer } from './options';

export default {
    devServer,
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    stats: { all: false, colors: true, timings: true },
};
