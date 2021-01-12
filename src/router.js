import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/App'
import Map from '@/pages/Map/App'
import Recipe from '@/pages/Recipe/App'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/map', component: Map },
        { path: '/recipe/:dish_id', component: Recipe }
    ]
})