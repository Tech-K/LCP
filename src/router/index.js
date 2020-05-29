import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Oraciones from '../views/Oraciones.vue'
import Servicios from '../views/Servicios.vue'
import Error from '../views/Error.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/oraciones',
    name: 'Oraciones',
    component: Oraciones
  },

  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },

  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
