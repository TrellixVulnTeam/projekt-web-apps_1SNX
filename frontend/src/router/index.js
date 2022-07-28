import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/drinks/:name',
    props: true,
    name: 'Drinks',
    component: () => import('../views/Drinks.vue'),
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
