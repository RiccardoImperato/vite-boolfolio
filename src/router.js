import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

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
            path: '/blog/:slug',
            name: 'single-project',
            component: ProjectDetail
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});
export { router };