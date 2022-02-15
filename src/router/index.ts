import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import { Vue } from 'vue-class-component'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/itemlist',
    name: 'ItemList',
    component: () => import('../views/ItemList.vue')
  },
  {
    path: '/models',
    name: 'models',
    component: () => import('../views/models.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
