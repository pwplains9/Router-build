import WebpackPwaManifestPlugin from 'webpack-pwa-manifest';
import {paths} from '../store';

/**
 * Генерирует файл manifest.json
 *
 * @see https://github.com/arthurbergmz/webpack-pwa-manifest
 */
export const WebpackPwaManifest = new WebpackPwaManifestPlugin({
    name: 'My Progressive Web App',
    short_name: 'MyPWA',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
        {
            src: `${paths.src.static}/icon.png`,
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
    },
        {
            src: `${paths.src.static}/large-icon.png`,
            size: '1024x1024' // you can also use the specifications pattern
    },
        {
            src: `${paths.src.static}/maskable-icon.png`,
            size: '1024x1024',
            purpose: 'maskable'
    }
  ]
});
