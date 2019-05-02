import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '@/views/ProductList';
import Product from '@/views/Product';
import About from '@/views/About';
import Contact from '@/views/Contact';
import NotFound from '@/views/NotFound';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: ProductList,
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{ path: '/:id', component: Product },
		{ path: '*', component: NotFound },
	],
});
