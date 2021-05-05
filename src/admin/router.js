import Vue from "vue";
import VueRouter from "vue-router";


//укажем что вью должен использовать вью роутер
Vue.use(VueRouter)


import admin from './components/admin.vue'
import about from './components/about/about.vue'
import works from './components/works/works.vue'
import blog from './components/blog/blog.vue'
//создадим массив с роутами (пути по которым должны отображаться компоненты)
const routes = [
    {
        path: '/',
        component: admin
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/blog',
        component: blog
    },
    {
        path: '/works',
        component: works
    }
]

//экспортируем пути
export default new VueRouter({ routes, mode: 'history' });