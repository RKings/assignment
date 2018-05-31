import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

// Views
import Home from '../views/Home'
import Contact from '../views/Contact'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        components: {
            default: Home
        }
    },
    {
        name: 'contact',
        path: '/contact',
        components: {
            default: Contact
        }
    },
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0,0);
    next()
})

export default router
