import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LTileLayer} from "vue2-leaflet";
import {Icon} from "leaflet";
import VueRouter from 'vue-router'
import Home from './components/home/Home'
import Map from './components/map/Map'
import Recipe from './components/recipe/Recipe'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

// https://vue2-leaflet.netlify.app/quickstart/#marker-icons-are-missing
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/map', component: Map },
        { path: '/recipe/:id', component: Recipe, props: true },
        { path: '*', component: Home },
    ],
    // https://stackoverflow.com/a/57212309
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
