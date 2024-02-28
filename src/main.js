import { createApp } from 'vue';
import { createHead, VueHeadMixin } from '@unhead/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

// Bootstrap - before app.mount()
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(router);
const head = createHead(); // @unhead/vue for managing <head> meta tags content
app.use(head);
app.mixin(VueHeadMixin); // Takes data from head() method of the page/view component
app.component('font-awesome-icon', FontAwesomeIcon); // Register <font-awesome-icon /> component
app.mount('#app');

// Bootstrap - after app.mount()
import 'bootstrap/dist/js/bootstrap.js';
