import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import AboutUs from './views/AboutUs.vue'
import Layanan from './views/Layanan.vue'
import Review from './views/Review.vue'
import ReviewLain from './views/ReviewLain.vue'
import AboutMe from './views/AboutMe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Contact', component: Contact },
  {path: '/AboutUs', component: AboutUs},
  {path: '/Layanan', component: Layanan},
  { path: '/Review', component: Review},
  { path: '/ReviewLain', component: ReviewLain },
  { path: '/AboutMe', component: AboutMe},

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')