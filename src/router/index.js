import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import Pages from '../pages/ModalConge.vue';
import Detail from '../pages/InfoUser.vue';
import Image from '../pages/ImageUser.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }, 
  {
    path: '/add',
    name: 'add',
    component: Pages
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/image',
    name: 'image',
    component: Image
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
