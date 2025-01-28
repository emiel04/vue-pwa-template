import { createRouter, createWebHistory } from 'vue-router'
import NotFoundComponent from '@/components/NotFoundComponent.vue'
import AppLayout from '@/views/layouts/AppLayout.vue'
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import CounterView from '@/views/CounterView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'counter',
          name: 'counter',
          component: CounterView,
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/public/Login.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
  ],
})

export default router
