import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import Services from '../views/Services.vue';
import WhoWeServe from '../views/WhoWeServe.vue';
import ContactUs from '../views/ContactUs.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/who-we-serve',
    name: 'WhoWeServe',
    component: WhoWeServe,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 };
  },
});

export default router;
