import dataGeneral from '@data/general';
import dataHome from '@pages/index/data';
import LevelOne from '@pages/LevelOne/data'
import LevelTwo from '@pages/LevelTwo/data'

const routes = {
    home: {
        path: dataGeneral.baseDir,
        title: dataHome.meta?.title,
    },

    LevelOne: {
        path: `${dataGeneral.baseDir}level-1`,
        title: LevelOne.meta?.title,
    },

    LevelTwo: {
        path: `${dataGeneral.baseDir}level-2`,
        title: LevelTwo.meta?.title,
    },
};

Object.keys(routes).forEach((route) => {
    routes[route].id = route;
});

export default {
    routes,
};
