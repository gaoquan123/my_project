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
         },
         filterItem:{}

}
const getters = {

}
const mutations = {
    SETINVESTFILTER(state,playload){
      playload.items.map((item)=>{
        let allAmount = item.amount.amount;                     //  总金额
        // let doneAmount = item.currentInvestmentAmount.amount;   //  已投资
        let remainingAmount = item.remainingAmount.amount;      // 剩余金额
        item.togeNumber = parseInt(100 - (remainingAmount / allAmount * 100))
        item.TabIndex = state.TabIndex;

       })
       state.filterItem = playload
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
           commit('SETINVESTFILTER',res.data)
        })
    
    }
   
}

export default{
    state,getters,mutations, actions
}