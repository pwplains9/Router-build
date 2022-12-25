/**
 * Модуль "Актуальный год"
 */

const init = () => {
    const year = new Date().getFullYear();

    if (document.querySelector('[data-actual-year]')) {
        document.querySelectorAll('[data-actual-year]').forEach((item) => {
            item.textContent = year;
        });
    }
};

export default {
    init,
};
