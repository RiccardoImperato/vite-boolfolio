import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
    ]
});
export { router };