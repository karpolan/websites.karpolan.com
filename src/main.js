import { createApp } from 'vue';
import { createHead, VueHeadMixin } from '@unhead/vue';
// import { createMetaManager } from 'vue-meta';
// import { plugin as vueMetaPlugin } from 'vue-meta';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(router);

// @unhead/vue
const head = createHead();
app.use(head);
app.mixin(VueHeadMixin); // Takes data from head() method of the page/view component

// vue-meta@next
// const metaManager = createMetaManager();
// app.use(vueMetaPlugin);
// app.use(metaManager);

app.component('font-awesome-icon', FontAwesomeIcon); // Register <font-awesome-icon /> component
app.mount('#app');

// Bootstrap
import 'bootstrap/dist/js/bootstrap.js';
