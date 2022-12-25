import * as bodyScrollLock from 'body-scroll-lock';
import UaParser from 'ninelines-ua-parser';
import $ from 'jquery';
import scroller from '@components/scroller/scroller';
const $html = $(document.documentElement);
let winWidth = window.innerWidth;
import data from '@data/data';
let helpers = {
    baseDir: data.general.baseDir,
    $document: $(document),
    $window: $(window),
    parser: UaParser(),
    isIE: () => helpers.parser?.browser?.name,
    isSafari: () => document.documentElement.classList.contains('is-browser-safari') || document.documentElement.classList.contains('is-browser-mobile-safari'),
    isDevices: () => innerWidth <= 1024,
    clearText: (text) => text.trim().replace(/\s+/g, ' '),
};

/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/
export const clearText = (text) => {
    return text.trim().replace(/\s+/g, ' ');
};

let dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/
helpers.lockScroll = (state, $element, name) => {
    const scrollerInstance = scroller.getInstance();

    if (typeof dataScrollLocks === 'undefined') {
        dataScrollLocks = new Set();
    }

    let scrollLocks = dataScrollLocks;

    if (state) {
        if (typeof name === 'string') {
            scrollLocks.add(name);
        }

        bodyScrollLock.disableBodyScroll($element, {
            reserveScrollBarGap: false,
        });

        setTimeout(() => {
            document.documentElement.classList.add('is-lock-scroll');
        }, 0);

        if (scrollerInstance) {
            scrollerInstance.stop();
        }
    } else {
        if (typeof name === 'string') {
            scrollLocks.delete(name);
        }

        bodyScrollLock.enableBodyScroll($element);

        if (!scrollLocks.size) {
            bodyScrollLock.clearAllBodyScrollLocks();

            document.documentElement.classList.remove('is-lock-scroll');

            if (scrollerInstance) {
                scrollerInstance.start();
            }
        }
    }
};

helpers.isScrollLocked = () => {
    return document.documentElement.classList.contains('is-lock-scroll');
};

let scrollDiv;

helpers.getScrollbarWidth = (ignore = false) => {
    const width = window.innerWidth - document.documentElement.clientWidth;

    if ((width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) && !ignore) {
        return width;
    }

    if (!scrollDiv) {
        scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
        document.body.appendChild(scrollDiv);
    }

    return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

helpers.isAnimating = (state) => {
    if (typeof state !== 'undefined') {
        document.documentElement.classList.toggle('is-animating', state);
    }

    return document.documentElement.classList.contains('is-animating');
};

helpers.dataPage = (name) => {
    if (typeof name !== 'undefined') {
        document.documentElement.setAttribute('data-page', name);
    }

    return document.documentElement.getAttribute('data-page');
};

window.addEventListener('resize', () => {
    setTimeout(() => {
        if (winWidth !== window.innerWidth) {
            // Переопределяем если браузер перестроился под другую платформу
            // актуально в моменты тестирования
            helpers.parser = UaParser();

            winWidth = window.innerWidth;
        }
    }, 300);
});

export default helpers;
