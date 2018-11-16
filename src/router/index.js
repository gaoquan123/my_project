import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/HomeHeader'
import investFinancing from '@/components/investFinancing/investFinancingHeader'
import accountOverviewSon from '@/components/accountOverview/accountOverviewSon'



Vue.use(Router)

export default new Router({
    // mode: 'history',     //去除＃号
    linkActiveClass:'active',
    routes: [
        {path:'/',name:'Home',component: Home},
        {path:'/investFinancing',name:'investFinancing',component:investFinancing},
        {path:'/accountOverview',name:'accountOverviewSon',component:accountOverviewSon}
    ]
})
