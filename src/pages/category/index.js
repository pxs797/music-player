export default [
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('./Category.vue')
  }
]