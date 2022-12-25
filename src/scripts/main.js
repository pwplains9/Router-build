// не трогать этот импорт, он нужен для работы css
// можно добавить несколько файлов, они будут работать независимо друг от друга
import '@styles/vendor.scss';
import '@styles/main.scss';

import '@scripts/utils/helpers';
import '@scripts/modules/social';
import actualYear from '@scripts/modules/actualYear';
import vhFix from '@scripts/vendor/vh-fix';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import scroller from "../components/scroller/scroller";
import helpers from "./utils/helpers";
import router from "../components/router/router";

gsap.registerPlugin(Draggable, ScrollTrigger);

window.LocomotiveScroll = LocomotiveScroll;
window._debounce = debounce;
window._throttle = throttle;
window.gsap = gsap;
window.Draggable = Draggable;
window.ScrollTrigger = ScrollTrigger;
let resizeWidth = null;
let isLoaded = false;

const resize = () => {
    if (helpers.isDevices() && resizeWidth && resizeWidth === innerWidth) {
        return;
    }

    vhFix.resize();

    if (isLoaded) {
        const lastPosition = scroller.getPosition();

        document.body.classList.add('is-resizing');

        scroller.setPosition(0, {
            callback() {
                setTimeout(() => {
                    scroller.setPosition(lastPosition, {
                        callback() {
                            document.body.classList.remove('is-resizing');
                        },
                    });
                }, 100);
            },
        });
    }

    resizeWidth = innerWidth;
};


const testRouter = () => {
    let firstLoad = true;
    let headTags = null;
    let newPageHead = null;
    let cover = $('.cd-cover-layer');

    helpers.$document.ready(() => {
        let isAnimating = false,
            newLocation = '';
        firstLoad = false;

        initEvents(location.pathname);

        helpers.$document.on('click', '[data-type="page-transition"]', function (event) {
            event.preventDefault();

            let newPage = $(event.currentTarget).attr('href');

            if (newPage !== location.pathname) {
                if (!isAnimating) changePage(newPage, true);
                firstLoad = true;
            }
        });

        helpers.$window.on('popstate', function () {
            if (firstLoad) {
                let newPage = location.href;

                if (!isAnimating && newLocation != newPage) changePage(newPage, false);
            }
            firstLoad = true;
        });

        function changePage(url, bool) {
            isAnimating = true;

            helpers.$document.find('body').addClass('page-is-changing');

            cover.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                loadNewContent(url, bool);

                newLocation = url;

                cover.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });

            if (!transitionsSupported()) {
                loadNewContent(url, bool);
                newLocation = url;
            }
        }

        function initEvents(url) {
            if(url === location.pathname) {
                $(`[data-type="page-transition"][href='${url}']`).addClass('is-active')
            }

            if (url === '/level-1') {
                gsap.timeline().from($('h1'), 0.5, {
                    autoAlpha: 0,
                    y: 150,
                })
            }
        }

        function loadNewContent(url, bool) {
            url = ('' == url) ? 'index.html' : url;

            let section = $('<div class="cd-main-content "></div>');

            section.load(url + ' .cd-main-content > *', function (event) {
                let title = event.match(/<title[^>]*>([^<]+)<\/title>/)[1];

                let newPageRawHead = event.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];

                newPageHead = document.createElement('head');

                newPageHead.innerHTML = newPageRawHead;

                helpers.$document.find('main').html(section[0]);

                helpers.$document.find('head title').html(title);

                $('html, body').scrollTop(0);

                let delay = (transitionsSupported()) ? 30 : 0;

                setTimeout(function () {
                    helpers.$document.find('body').removeClass('page-is-changing');
                    isAnimating = false;

                    cover.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                        isAnimating = false;
                        cover.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                    })

                    initEvents(url);

                    if (!transitionsSupported()) isAnimating = false;
                }, delay);

                if (url !== window.location && bool) {
                    window.history.pushState({path: url}, '', url);
                }
            });
        }

        function transitionsSupported() {
            return $('html').hasClass('csstransitions');
        }
    })
}

const init = () => {
    actualYear.init();
    vhFix.init();

    testRouter();
    resizeWidth = innerWidth;

    window.addEventListener('resize', _debounce(resize, 500));
};

init();


