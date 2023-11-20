import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './store';

var app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
