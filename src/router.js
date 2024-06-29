// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddPhoto from './views/AddPhoto.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddPhoto },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
