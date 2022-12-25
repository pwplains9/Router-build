import lozad from 'lozad';

let observer;

/**
 * Модуль "Отложенная загрузка изображений"
 * https://github.com/ApoorvSaxena/lozad.js
 */

/**
 * Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
 * @param {string} img Обязательное, элемент img
 */
const trigger = (img) => {
    observer.triggerLoad(img);
};

const add = (images) => {
    observer = lozad(images, {
        rootMargin: `${innerHeight}px`,
        threshold: 0, // ratio of element convergence
        enableAutoReload: true, // it will reload the new image when validating attributes changes
        loaded(el) {
            const image = el.querySelector('img');

            el.classList.add('is-loaded');

            if (image && image.decoding) {
                image.decoding = 'async';
            }
        },
    });

    observer.observe();

    return observer;
};

const init = () => {
    add('.js-lazy');
};

export default {
    init,
    add,
    trigger,
};
