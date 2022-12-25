/**
 * Модуль исправления багов на iOs устройствах
 * определяет высоту экрана и при любом изменении переопределяет её
 * в стилях используйте кастомные стили var(--vh)
 */

const isSupported = () => !(!!window.MSInputMethodContext && !!document.documentMode);

const setProp = () => {
    document.documentElement.style.setProperty('--vh', `${innerHeight}px`);
};

const resize = () => {
    if (!isSupported()) {
        return;
    }

    setProp();
};

const init = () => {
    if (!isSupported()) {
        return;
    }

    setProp();

    setTimeout(setProp, 1000);

    window.addEventListener('load', setProp);
};

export default {
    init,
    resize,
};
