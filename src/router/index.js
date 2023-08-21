import { createRouter, createWebHistory } from 'vue-router'
import ReactiveDataBinding from '../views/ReactiveDataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'reactive-data-binding',
    component: ReactiveDataBinding
  },
  {
    path: '/component-communication',
    name: 'component-communication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ComponentCommunication.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
