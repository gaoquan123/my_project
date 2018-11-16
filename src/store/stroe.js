import Vue from 'vue'
import Vuex from 'vuex'


import home from './modules/home'
import investFinancing from './modules/investFinancing'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        home,investFinancing
    }
})