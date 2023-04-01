import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '@/views/ProductList';
import SingleProduct from '@/views/SingleProduct';
import AboutPage from '@/views/AboutPage';
import ContactPage from '@/views/ContactPage';
import NotFound from '@/views/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/index.html',
      name: 'home',
      component: ProductList,
    },
    // { path: '/index.html', component: ProductList },
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
    { path: '/404', component: NotFound },
    { path: '/:id/', alias: '/:id/index.html', component: SingleProduct },
    { path: '*', component: NotFound },
  ],
});
