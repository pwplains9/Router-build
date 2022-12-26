import gsap from "gsap";

function init(options) {
    let defaultOptions = {
        container: '[data-loader-container]',
        routerLink: 'data-router-link',
        cover: document.querySelector('.cd-cover-layer')
    }

    options = {...defaultOptions, ...options}

    let isAnimating = false,
        newLocation = '',
        _this = this,
        firstLoad = true,
        newPageHead = null,
        url = location.pathname;

    window.onpopstate = () => {
        if (firstLoad) {
            let newPage = location.href;

            if (!isAnimating && newLocation !== newPage) {
                _this.changePage(newPage, false);
            }
        }

        firstLoad = true;
    }

    _this.changePage = (url, bool) => {
        isAnimating = true;

        document.querySelector('body').classList.add('page-is-changing');

        $(options.cover).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            _this.loadNewContent(url, bool);

            newLocation = url;

            $(options.cover).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if (!_this.transitionsSupported()) {
            _this.loadNewContent(url, bool);

            newLocation = url;
        }
    }

    _this.loadNewContent = (url, bool) => {
        url = ('' == url) ? 'index.html' : url;

        let section = $(options.container);

        section.load(url + ` ${options.container} > *`, function (event) {
            let title = event.match(/<title[^>]*>([^<]+)<\/title>/)[1];

            let newPageRawHead = event.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];

            newPageHead = document.createElement('head');

            newPageHead.innerHTML = newPageRawHead;

            $('main').html(section[0]);

            $('head title').html(title);

            $('html, body').scrollTop(0);

            let delay = (_this.transitionsSupported()) ? 30 : 0;

            setTimeout(function () {
                document.querySelector('body').classList.remove('page-is-changing');

                isAnimating = false;

                $(options.cover).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    isAnimating = false;

                    $(options.cover).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                })

                _this.initEvents(url);

                if (!_this.transitionsSupported()) isAnimating = false;
            }, delay);

            if (url !== window.location && bool) {
                window.history.pushState({path: url}, '', url);
            }
        });
    }

    document.addEventListener('click', function (event) {
        if(!event.target.attributes[options.routerLink]) {
            return;
        }

        event.preventDefault();

        let newPage = $(event.target).attr('href');



        if (newPage !== location.pathname) {
            if (!isAnimating) {
                _this.changePage(newPage, true);
            }
            firstLoad = true;
        }
    });

    _this.transitionsSupported = () => {
        return document.querySelector('html').classList.contains('csstransitions');
    }

    _this.initEvents = (url) => {
        // place events for any pages or analytics hit

        if (url === location.pathname) {
            document.querySelector(`[data-router-link][href='${url}']`).classList.add('is-active');
        }

        if (url === '/level-1') {
            gsap.timeline().from($('h1'), 0.5, {
                autoAlpha: 0,
                y: 150,
            })
        }
    }

    _this.initEvents(url);
}

export default {
    init,
}
