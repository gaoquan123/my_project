import axios from 'axios'
import MyMethod from '../MyMethod/method'
const state = {
    HomeisLogin: false,
    HomebannerItem:{},       //轮播图
    HomeInfos:{},           //平台头部信息
    HomeordinaryItem:{},         // 首页标的信息
    HomeforumObjItem:{}        //论坛首页

}
const getters = {

}
const mutations = {
        // 轮播图数据
        BANNERITEM(state,data){
            state.HomebannerItem  =  data
        },
        // 平台头部信息
        TRADINGINFO(state,data){
            data.timestamp =  MyMethod.DayMethod(data.timestamp);
            data.amount = (data.onlineAmount.amount / 100000000).toFixed(2)
            data.onlineRepaidInterest = (data.onlineRepaidInterest / 10000).toFixed(2)
            state.HomeInfos = data
        },
        // 首页标的信息
        ORDINARYRECOMMEND(state,data){
            state.HomeordinaryItem = data;
        },
        // 论坛专区
        FORUMOBJ(state,data){
            data.map((item)=>{
                return item.pic = "https://bbs.jia16.com/"+item.pic
            })
            state.HomeforumObjItem = data
        }
}
const actions = {
        // 轮播图数据
        bannerItem({commit}){
            axios.get('/ums/cms/carousel').then((data) => {
                commit('BANNERITEM', data.data)
            })
        },
        //平台头部信息
        tradingInfo({commit}){ 
            axios.get("/api/main-page/trading-data").then((data)=>{
                commit('TRADINGINFO',data.data)
            })
        },
        // 首页标的信息
        ordinaryrecommend({commit}){
            axios.get("/api/subjects/app_choice").then((data)=>{
                commit('ORDINARYRECOMMEND',data.data)
            })
        },
        // 论坛专区
        forumObj({commit}){
            axios.get("/bbs/api.php?mod=js&bid=59").then((data)=>{
                commit('FORUMOBJ',data.data)
            })
        }
}

export default{
    state,getters,mutations, actions
}