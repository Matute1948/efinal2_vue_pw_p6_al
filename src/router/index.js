import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PageConsultarVe from '@/pages/PageConsultarVe.vue'
import PageCrearVehiculo from '@/pages/PageCrearVehiculo.vue'
import PageNotFound from '@/pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/crear',
    component: PageCrearVehiculo
  },
  {
    path: '/consultar',
    component: PageConsultarVe
  },
  {
    path : "/:pathMatch(.*)*",
    component : PageNotFound
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
