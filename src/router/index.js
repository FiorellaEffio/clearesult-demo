import { createRouter, createWebHistory } from 'vue-router'
import ReactiveDataBinding from '../views/ReactiveDataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'reactive-data-binding',
    component: ReactiveDataBinding
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
