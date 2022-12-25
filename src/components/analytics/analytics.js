/* globals yaCounter22765936 yaCounter52537759 */

const ymHit = (path = location.href) => {
    if (window.yaCounter22765936) {
        yaCounter22765936.hit(path);
    }

    if (window.yaCounter52537759) {
        yaCounter52537759.hit(path);
    }
};

export default {
    ymHit,
};
