import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import MyMethod from './store/MyMethod/method'
// import 'lib-flexible/flexible'
import fastClick from 'fastclick'
import {store} from './store/stroe'


Vue.config.productionTip = false
Vue.use(router) 
Vue.use(MyMethod) 
Vue.prototype.$axios = axios
fastClick.attach(document.body)
// const router = new VueRouter({

// })


new Vue({
  el: '#app',
  router, store,MyMethod,
  components: { App },
  template: '<App/>'
})
