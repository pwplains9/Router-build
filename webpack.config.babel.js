// Webpack плагин
import merge from 'webpack-merge';

// Внутренние зависимости
import common from './config/common.js';
import development from './config/development';
import production from './config/production';
import { isDev } from './config/store';

// Экспорт конфигурации webpack
export default () => merge(common, isDev() ? development : production);
