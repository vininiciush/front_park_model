import {createRouter, createWebHashHistory} from 'vue-router';
import MainPageView from './view/MainPageView'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainPageView
        }
    ]
});

export default router;