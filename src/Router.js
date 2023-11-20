import { createWebHistory, createRouter } from "vue-router";
import AlumnosComponent from './components/Alumnos.vue';
import HomeComponent from './components/Home.vue';


var routes = [
    { path: "/", component: HomeComponent },
    { path: "/alumnos", component: AlumnosComponent },
];

var router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;