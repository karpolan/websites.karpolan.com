import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import NotFound from '@/views/NotFound.vue';
import ProductList from '@/views/ProductList.vue';
import SingleProduct from '@/views/SingleProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Don't! linkActiveClass: 'active', // Make Bootstrap compatible
  // Don't! linkExactActiveClass: 'active', // Make Bootstrap compatible
  routes: [
    {
      path: '/',
      alias: '/index.html',
      name: 'home',
      component: ProductList,
    },
    {
      path: '/contact/',
      alias: '/contact/index.html',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/about/',
      alias: '/about/index.html',
      name: 'about',
      component: AboutPage,
    },
    { path: '/index.*', redirect: '/' },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '/:id/',
      alias: '/:id/index.html',
      component: SingleProduct,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router;
