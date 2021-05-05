import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './screens/Home.vue';
import About from './screens/About.vue';
import Contact from './screens/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact }
    ]
})

export default router;