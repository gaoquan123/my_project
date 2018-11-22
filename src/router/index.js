import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/HomeHeader'
import investFinancing from '@/components/investFinancing/InvestFinancingHeader'
import accountOverview from '@/components/accountOverview/AccountOverviewHeader'
import Login from '@/components/loginRegister/Login'




Vue.use(Router)

export default new Router({
    // mode: 'history',     //去除＃号
    linkActiveClass:'active',
    routes: [
        {path:'/login',name:'Login',component: Login},
        {path:'/',name:'Home',component: Home},
        {path:'/investFinancing',name:'investFinancing',component:investFinancing},
        {path:'/accountOverview',name:'accountOverview',component:accountOverview}
    ]
})

