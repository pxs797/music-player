import { createRouter, createWebHistory } from "vue-router";
import pagesRoutes from '../pages'

const routes = [
  {
    path: '/',
    redirect: { name: 'discover' }
  },
  ...pagesRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router