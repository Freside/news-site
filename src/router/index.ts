import { createRouter, createWebHistory } from 'vue-router';
import NewsList from '@/components/NewsList.vue';
import AdminLogin from '@/components/AdminLogin.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';

const routes = [
    {
        path: '/',
        name: 'NewsList',
        component: NewsList,
    },
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: AdminLogin,
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
