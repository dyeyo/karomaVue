import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detalles from '../views/Detalles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Home
  },
  {
    path: '/detalle/:id',
    name: 'detalles',
    component: Detalles
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
