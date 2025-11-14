import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Contact', component: Contact}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')