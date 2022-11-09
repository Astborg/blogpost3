import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    
    {
        name: 'homePosts',
        component: () => import ('./views/homePosts.vue'),
        path: '/'
    },
    {
        name: 'writePost',
        component: () => import('./views/writePost.vue'),
        path: '/writePost'
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router