import data from '@data/data';
import helpers from '@scripts/utils/helpers';
import analytics from '@components/analytics/analytics';
import scroller from '@components/scroller/scroller';

const $pages = document.querySelectorAll('[data-router-page]');

let isTracking = true;

const setTrackingState = (state) => {
    isTracking = !!state;
};

const filterPath = (string) => {
    if (string.indexOf('index.') >= 0) {
        string = string.substring(0, string.lastIndexOf('/'));
    }

    if (string.endsWith('/')) {
        string = string.slice(0, -1);
    }

    return string;
};

const isCurrentPath = (path) => filterPath(location.pathname) === filterPath(path);

const setRoute = (name) => {
    if (helpers.dataPage() === name) {
        return;
    }

    const route = data.router.routes[name];
    let activeSection = document.querySelector(`[data-router-page='${route.id}']`);
    helpers.dataPage(name);

    document.title = route.title || data.general.title;

    if (!isCurrentPath(route.path)) {
        history.pushState(null, null, `${route.path}${location.search}`);
        if(!activeSection.classList.contains('is-view')) {
            activeSection.classList.add('is-view')
            analytics.ymHit();
        }
    }
};

const setRouteOnScroll = () => {
    if (!isTracking) {
        return;
    }

    for (let i = $pages.length - 1; i >= 0; i--) {
        const $page = $pages[i];

        if ($page.getBoundingClientRect().top <= 0) {
            setRoute($page.dataset.routerPage);

            break;
        }
    }
};

const scrollToPageOnLoad = () => {
    return new Promise((resolve) => {
        Object
            .values(data.router.routes)
            .forEach((route) => {
                if (isCurrentPath(route.path)) {
                    const $pageCurrent = Array.from($pages).find(($page) => $page.dataset.routerPage === route.id);

                    let activeSection = document.querySelector(`[data-router-page='${route.id}']`);

                    activeSection.classList.add('is-view')
                    setRoute(route.id);

                    scroller.setPosition($pageCurrent, {
                        offset: route.id === 'home' ? 0 : 1,
                        callback: resolve,
                    });
                }
            });
    });
};

const init = async () => {
    await scrollToPageOnLoad();

    setRouteOnScroll();

    scroller.onScroll(_throttle(setRouteOnScroll, 100));
};

export default {
    init,
    setRouteOnScroll,
    setTrackingState,
};
