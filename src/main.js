import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import MyMethod from './store/MyMethod/method'
// import 'lib-flexible/flexible'
import fastClick from 'fastclick'
import {store} from './store/stroe'
import { TransferDom } from 'vux'

Vue.config.productionTip = false
Vue.use(router) 
Vue.use(MyMethod) 
Vue.prototype.$axios = axios
fastClick.attach(document.body)
Vue.directive('transfer-dom', TransferDom)


// router.beforeEach((to, from, next) => {
//     if(to.path =='/accountOverview' || to.path =='/investFinancing'){
//         console.log(to,"您还没有登录")
    // }else{
    //     next('/login')
    //     console.log(to,"00110")
    // }

    // console.log(to.path,"9090")
//   })


new Vue({
  el: '#app',
  router, store,MyMethod,
  components: { App },
  template: '<App/>'
})
