import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
Vue.use(Vuelidate);

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
