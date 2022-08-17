import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'root',
        component: () => import(/* webpackChunkName: 'index' */ '../pages/Navbar.vue')
        },
      {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: 'list' */ '../pages/CountriesList.vue'),
        children: [
          {
            path: '/details',
            name: 'details',
            component: () => import(/* webpackChunkName: 'details' */ '../pages/CountriesDetails.vue')
          },
        ]
      }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;