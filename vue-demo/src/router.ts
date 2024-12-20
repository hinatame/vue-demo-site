import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect:'/home#top' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about-me', name: 'About', component: AboutMe },
    { path: '/exp', name: 'Experience', component: Experience },
    { path: '/proj', name: 'Projects', component: Projects },
];

export default createRouter({
    history: createWebHistory('/vue-demo-site'),
    routes: routes
});