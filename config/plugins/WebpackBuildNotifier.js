import WebpackBuildNotifierPlugin from 'webpack-build-notifier';
import path from 'path';

/**
 * Добавляет уведомления в проект
 * @see https://github.com/roccoc/webpack-build-notifier
 */

const thePath = (folder = '') => path.resolve(__dirname, folder);

export const WebpackBuildNotifier = new WebpackBuildNotifierPlugin({
    title: "Ninelines project",
    suppressSuccess: 'always', // не спамить успешными уведомлениями
    suppressWarning: true,
    sound: false,
    notifyOptions: { timeout: 2 },
    // Errors/warnings формат. Пример: “3 errors – resources/sass/oh-no.scss”
    messageFormatter: (error, filepath, status, errorCount) => {
        return `${errorCount} ${status}${errorCount === 1 ? '' : 's'} – ${filepath.replace(thePath() + '/', '')}`;
    }
})
