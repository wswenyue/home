import Vue from 'vue'
import Router from 'vue-router';
import FormTest from './components/FormTest.vue'
import indexPage from './pages/index.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'index'}
        },
        {
            path: '/index',
            name: 'index',
            component: indexPage
        },
        {
            path: '/test',
            name: 'test',
            component: FormTest
        }
    ]
});