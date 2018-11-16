<template>
    <div class="investUpright">
        <div class="right-header">
            <span class="front-13 w33 fl titleSpan1" @click="changes">取消</span>
            <span class="front-14 w33 fl titleSpan2">筛选</span>
            <span class="front-13 w33 fl titleSpan3">重置</span>
        </div>
        <div class="rightUpVux">
               <div class="linght-top-bottom">
                   <div class="box-clear">项目类型</div>
                    <checker default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                        <checker-item 
                             ref="DomList1"
                             v-for="item in ListItem1" 
                             name="filterClass" 
                             :subjectType="item.subjectType" :key="item.name" 
                             :value="item.subjectType">{{item.name}}</checker-item>
                    </checker>
                   <div class="box-clear">期限</div>
                    <checker default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                        <checker-item 
                        ref="DomList2" 
                        v-for="item in ListItem2" 
                        name="filterClass" 
                        :graceDaysLimit="item.graceDaysLimit" 
                        :key="item.name" 
                        :value="item.graceDaysLimit" >{{item.name}}</checker-item>
                    </checker>
                   <div class="box-clear">年化利率</div>
                    <checker default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                        <checker-item 
                        ref="DomList3" 
                        v-for="item in ListItem3" 
                        name="filterClass" 
                        :AnnualRateLimit="item.AnnualRateLimit" 
                        :key="item.name"
                        :value="item.AnnualRateLimit">{{item.name}}</checker-item>
                    </checker>
                    <div class="box-clear">还款方式</div>
                    <checker default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                        <checker-item 
                        ref="DomList4" 
                        v-for="item in ListItem4" 
                        name="filterClass" 
                        :instal_type="item.instal_type" 
                        :key="item.name" 
                        :value="item.instal_type">{{item.name}}</checker-item>
                    </checker>
              </div>
              <button @click="submitListType">确定</button>
         </div>
    </div>
</template>
<script>
import {Checker,CheckerItem} from 'vux'
export default {
    props: ['show'],
    data () {
        return {
            ListItem1:[
                {name:'全部',subjectType:'all'},
                {name:'供应链',subjectType:'fixed'},
                {name:'小微',subjectType:'personal'},
            ],
            ListItem2:[
                {name:'全部',graceDaysLimit:'all'},
                {name:'1~30天',graceDaysLimit:'one'},
                {name:'30~60天',graceDaysLimit:'two'},
                {name:'60~90天',graceDaysLimit:'three'},
                {name:'90-180天',graceDaysLimit:'four'},
                {name:'180天以上',graceDaysLimit:'five'},
            ],
            ListItem3:[
                {name:'全部',AnnualRateLimit:'all'},
                {name:'7%以内',AnnualRateLimit:'one'},
                {name:'7%~8%',AnnualRateLimit:'two'},
                {name:'8%~9%',AnnualRateLimit:'three'},
                {name:'9%以上',AnnualRateLimit:'four'},
            ],
            ListItem4:[
                {name:'全部',instal_type:'all'},
                {name:'等额本息',instal_type:'MATCHING_PRINCIPAL_AND_INTEREST'},
                {name:'到期还本付息',instal_type:'ONCE_PRINCIPAL_AND_INTEREST'},
            ],
            jonsItem:{
                subjectType:'all',
                graceDaysLimit:'all',
                AnnualRateLimit:'all',
                instal_type:'all',
            }
        }
    },
    beforeMount(){
    },
    methods: {
       changes() {
          this.$emit("changestate",true)
       },
       submitListType(){
        let DomList1 = this.$refs.DomList1;    //项目类型
        let DomList2 = this.$refs.DomList2;   //期限
        let DomList3 = this.$refs.DomList3;    //年化利率
        let DomList4 = this.$refs.DomList4;    //还款方式
        for(let i = 0 ; i <DomList1.length;i++){
             if(DomList1[i].classNames['demo5-item-selected']){
                this.jonsItem.subjectType =  DomList1[i].$attrs.subjectType ;
             }
        }
        for(let i = 0 ; i <DomList2.length;i++){
             if(DomList2[i].classNames['demo5-item-selected']){
                this.jonsItem.graceDaysLimit =  DomList2[i].$attrs.graceDaysLimit ;
             }
        }
        for(let i = 0 ; i <DomList3.length;i++){
             if(DomList3[i].classNames['demo5-item-selected']){
                this.jonsItem.AnnualRateLimit =  DomList3[i].$attrs.AnnualRateLimit ;
             }
        }
        for(let i = 0 ; i <DomList4.length;i++){
             if(DomList4[i].classNames['demo5-item-selected']){
                this.jonsItem.instal_type =  DomList4[i].$attrs.instal_type ;
             }
        }
        this.$store.state.investFinancing.params.subjectType = this.jonsItem.subjectType;
        this.$store.state.investFinancing.params.graceDaysLimit = this.jonsItem.graceDaysLimit;
        this.$store.state.investFinancing.params.AnnualRateLimit = this.jonsItem.AnnualRateLimit;
        this.$store.state.investFinancing.params.instal_type = this.jonsItem.instal_type;
        this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
        this.$emit("changesSubmit",true)
       }
    },
    components: {
        Checker,CheckerItem
    }
}
</script>

<style lang="less" scoped>
.investUpright{
            width:15rem;
            height:100%;
            background:rgba(255,255,255,0.9);
    // 头部
    .right-header{
            height: 2.2rem;
            line-height: 2.2rem;
            border-bottom: 1px solid #ddd;
            margin-left: 0;
            padding: 0 1rem;
            .titleSpan1{
                color: #ff6600;
            }
            .titleSpan2{
                color: #333333;
                text-align: center;
            }
             .titleSpan3{
                text-align: right;
                color: #ff6600;
            }
    }
    // 选项
   .rightUpVux{
            width:15rem;
            background:rgba(255,255,255,0.9);
            .linght-top-bottom{
                margin: 0.5rem;
                .box-clear{
                    padding-top: 0.7rem;
                }
            }
            button{
                width: 90%;
                height: 2rem;
                margin: 0 auto;
                display: block;
                background: #ff6600;
                color: #fefefe;
                margin-top: 1.5rem;
            }
         }
        .demo5-item {
                width: 4.25rem;
                height: 1.5rem;
                line-height: 1.5rem;
                text-align: center;
                border-radius: 3px;
                border: 1px solid #ccc;
                background-color: #fff;
                margin-right: 0.3rem;
                margin-top: 0.5rem;

        }
        .demo5-item-selected {
            background: #ffffff url('../../assets/home/selected.png') no-repeat right bottom;
            border-color: #ff4a00;
        }
}
</style>
