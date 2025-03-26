import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },

    // Components
    {
      path: '/autocomplete',
      name: 'AutoComplete',
      component: () => import('@/views/components/PrimeAutoComplete.vue'),
    },
    {
      path: '/cascadeSelect',
      name: 'CascadeSelect',
      component: () => import('@/views/components/PrimeCascadeSelect.vue'),
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import('@/views/components/PrimeCheckbox.vue'),
    },

    // Catch all 404
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
