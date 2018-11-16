import axios from 'axios'
import MyMethod from '../MyMethod/method'
const state = {
        TabIndex:0, //头部tab下标
        params:{
            origin: 'app',
            type: 'zqlb',
            full: "n",
            sort: "PRIORITY",
            sortType: 'desc',
            page: 1,
            pageLimit: 10,
            graceDaysLimit: "all",
            AnnualRateLimit: "all",
            transferSubjectStatus: "all",
            instal_type:"all" ,
            subjectType: "all",
            transferMoneyLimit: "all",
         }

}
const getters = {

}
const mutations = {
    setI(state,playload){
    //     console.log(state,"666")
    //     console.log(playload,"9999")

    //     // console.log(state.TabIndex,"999")
    //     // axios.get('/api/subjects/app-channel-revision', {params: state.data}).then((res) => {
    //     //    commit('setInfo',res)
    //     // })
    
    }
     
}
const actions = {
    InvestMethodsFilter({commit},playload){
        let Url = '/api/subjects/app-channel-revision';
         state.TabIndex = playload;
        if( state.TabIndex == 0 ){
            state.params.type = 'zqlb'
        }else if(state.TabIndex == 1){
            state.params.type = 'zrbx'
        }else{
            state.params.type = 'yxzr'
            Url =' /api/subjects/financial-transfer-list';
        }
        axios.get(Url, {params: state.params}).then((res) => {
           commit('setI',res.data)
        })
    
    }
   
}

export default{
    state,getters,mutations, actions
}