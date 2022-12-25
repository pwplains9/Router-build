import { config } from '../../config';

const domain = config.html.domain;
const baseDir = config.html.isProd() ? config.html.publicPath : config.html.publicPathDev;
const share = {
    title: 'Test',
    description: 'test 2',
};

export default {
    domain,
    baseDir,
    title: 'Test',
    description: 'Test d',
    keywords: 'Test a',
    image: `${domain}assets/images/share/vk.jpg`,
    link: {
        appleTouchIcon180x180: `${baseDir}favicon/apple-touch-icon.png`,
        icon32x32: `${baseDir}favicon/favicon-32x32.png`,
        icon192x192: `${baseDir}favicon/android-chrome-192x192.png`,
        icon16x16: `${baseDir}favicon/favicon-16x16.png`,
        manifest: `${baseDir}site.webmanifest`,
        maskIcon: {
            href: `${baseDir}favicon/safari-pinned-tab.svg`,
            color: '#5bbad5',
        },
        icon: `${baseDir}favicon/favicon.ico`,
    },
    meta: {
        msapplicationTileColor: '#9f00a7',
        msapplicationTileImage: `${baseDir}favicon/mstile-144x144.png`,
        msapplicationConfig: `${baseDir}browserconfig.xml`,
        themeColor: '#ffffff',
        ogTitle: share.title,
        ogDescription: share.description,
        ogImageType: 'image/pejpegg',
        ogImageWidth: '700',
        ogImageHeight: '500',
        twitterTitle: share.title,
        twitterDescription: share.description,
    },
};
