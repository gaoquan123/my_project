<template>
    <div class="investFinacing w100">
        <div class="headerTabBgc">
             <tab v-model="Tabindex" active-color="#ff6600" prevent-default @on-before-index-change="switchTabItem">
                <tab-item selected>精选标的</tab-item>
                <tab-item>转让变现</tab-item>
                <tab-item>定期优选转让</tab-item>
            </tab>
         <div class="claimsList-sort">
                <div class="claimsList-sortitem-box1 sortitem w25 fl" :class="{'active':activeTabBtnType == 'PRIORITY'}" data-type="PRIORITY">
                    <span class="claimsList-sort1" data-flag="default"></span>
                    <span class="defaultBtn front-12" @click = "defaultBtn($event)">默认</span>
                </div>
                <div class="claimsList-sortitem-box2 sortitem w25 fl" :class="{'active':activeTabBtnType == 'ANNUAL_RATE'}" data-type="ANNUAL_RATE" >
                     <div class="claimsList-sort-base claimsList-sort2">
                        <span class="claimsList-sort-up" :class="{'claimsList-active-up':activeRateDayIndex == 1}"></span>
                        <span class="claimsList-sort-down" :class="{'claimsList-active-down':activeRateDayIndex == 2}"></span>
                    </div>
                    <span @click = "defaultBtn($event)">年利率</span>
                </div>

                <div class="claimsList-sortitem-box3 sortitem w25 fl" :class="{'active':activeTabBtnType == 'INTERVAL_DAYS'}" data-type="INTERVAL_DAYS">
                    <div class="claimsList-sort-base claimsList-sort3">
                            <span class="claimsList-sort-up"  :class="{'claimsList-active-up':activeRateDayIndex == 3}" ></span>
                            <span class="claimsList-sort-down"  :class="{'claimsList-active-down':activeRateDayIndex == 4}"  ></span>
                    </div>
                    <span  @click = "defaultBtn($event)">期限</span>
                </div>

                <div class="claimsList-sortitem-box4 sortitem w25 fl"  @click="IsShowUp">
                    <span class="claimsList-sort-base  claimsList-sort4" data-flag="select"></span>
                    <span data-falg="select">筛选</span>
                </div>
    
            </div>
       </div>
        <div class="TabCotent">
            <investFinancingList v-for = "item in FilterList" :key="item.name" :FilterListItems="item"></investFinancingList>
        </div>
        <!-- <div class="TabCotent" v-if="Tabindex == 1">
                1
        </div>
        <div class="TabCotent" v-if="Tabindex ==2">
                2
        </div> -->
        <!-- 侧面筛选弹框 -->
        <popup position="right" v-model="show">
           <investTinancingRightPopup :show="show" v-on:changestate = "changestateChild" v-on:changesSubmit ="changesSubmitChild"></investTinancingRightPopup>
        </popup>
    </div>
</template>

<script>
import Vue from 'Vue'
import {Tab, TabItem,LoadingPlugin,Popup} from 'vux'
import investTinancingRightPopup from './InvestTinancingRightPopup'
import investFinancingList from './InvestFinancingList'
Vue.use(LoadingPlugin)   //懒加载
export default {
    data () {
        return {
             Tabindex: 0,   //头部下标
             activeTabBtnType:"",  //筛选文字颜色
             activeRateDayIndex:0,    //上下标样式添加
             activeFlag:null ,    //上下图标信号量
             show:false


        }
    },
    beforeMount () {
         this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
    },
    computed: {
        FilterList(){
            return this.$store.state.investFinancing.filterItem.items
        },
        detailIndex(){
            return this.$store.state.investFinancing.TabIndex
        }

    },
    methods: {
        switchTabItem (index) {
            Vue.$vux.loading.show({
                text: '努力加载中...'
            })
            setTimeout(() => {
                Vue.$vux.loading.hide()
                this.Tabindex = index;
                this.activeRateDayIndex = null; //初始化
                this.activeTabBtnType = null;   //初始化
                this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
            }, 1000)
        },
          defaultBtn(e){
            //  默认筛选
            if(e.currentTarget.parentElement.getAttribute('data-type') == 'PRIORITY'){
               this.activeTabBtnType = "PRIORITY";
               this.$store.state.investFinancing.params.sort = 'PRIORITY';
               this.$store.state.investFinancing.params.sortType = 'desc';
               this.activeRateDayIndex = null;
                this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
            }
            // 年利率筛选
            if(e.currentTarget.parentElement.getAttribute('data-type') == 'ANNUAL_RATE'){
               this.activeTabBtnType = "ANNUAL_RATE";
              if(this.activeFlag = !this.activeFlag){
                  this.activeRateDayIndex = 1;
                  this.$store.state.investFinancing.params.sort = 'ANNUAL_RATE';
                  this.$store.state.investFinancing.params.sortType = 'asc';
                  this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
              }else{
                   this.$store.state.investFinancing.params.sort = 'ANNUAL_RATE';
                   this.$store.state.investFinancing.params.sortType = 'desc';
                   this.activeRateDayIndex = 2;
                   this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
              }
            }
            // 期限筛选
            if(e.currentTarget.parentElement.getAttribute('data-type') == 'INTERVAL_DAYS'){
                 this.activeTabBtnType = "INTERVAL_DAYS";
             if(this.activeFlag = !this.activeFlag){
                  this.$store.state.investFinancing.params.sort = 'INTERVAL_DAYS';
                  this.$store.state.investFinancing.params.sortType = 'asc';
                  this.activeRateDayIndex = 3;
                  this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
              }else{
                   this.$store.state.investFinancing.params.sort = 'INTERVAL_DAYS';
                  this.$store.state.investFinancing.params.sortType = 'desc';
                  this.activeRateDayIndex = 4;
                  this.$store.dispatch("InvestMethodsFilter",this.Tabindex);
              }
            }
        },
        IsShowUp(){
            this.show = !this.show
        },
        changestateChild(data){
            this.show = !data
        },
        changesSubmitChild(data){
            this.show = !data
        }
    },
    watch:{
       
    },
    components: {
        Tab,TabItem,Popup,investTinancingRightPopup,investFinancingList
    },
}
</script>
<style lang="less" scoped>
    .investFinacing{
            overflow: hidden;
        .headerTabBgc{
            width: 100%;
            background: #fff;
        }
        .claimsList-sort{
            height:2rem;
            width: 100%;
            .sortitem{
                text-align: center;
                line-height: 2rem;
            }
            // 默认筛选条
            .claimsList-sortitem-box1{
                .claimsList-sort1{
                    width: 0.4rem;
                    height: 0.4rem;
                    display: inline-block;
                    vertical-align: initial;
                    border: 1px solid;
                    border-radius: 50%;
                }
            }
            // 年利率筛选条
            .claimsList-sortitem-box2{
                .claimsList-sort2{
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        position: relative;
                    .claimsList-sort-up{
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-bottom: 8px solid #dddddd;
                        position: absolute;
                        top: 0;
                        }
                    }
                    .claimsList-sort-down{
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 8px solid #dddddd;
                        position: absolute;
                        top: 9px;
                    }
            }
            // 期限筛选
            .claimsList-sortitem-box3{
                .claimsList-sort3{
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        position: relative;
                    .claimsList-sort-up{
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-bottom: 8px solid #dddddd;
                        position: absolute;
                        top: 0;
                        }
                    }
                    .claimsList-sort-down{
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 8px solid #dddddd;
                        position: absolute;
                        top: 9px;
                    }
            }
            // 弹框筛选
            .claimsList-sortitem-box4 {
                .claimsList-sort4{
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        position: relative;
                        background-image: url('../../assets/home/select.png');
                        background-size: 20px 20px;
                }
            }
            //  选中
            .active{
                 color: rgb(255, 102, 0);
            }
            // 小图标上
            .claimsList-active-up{
                    border-bottom: 8px solid #ff6600 !important;
            }
            // 小图标下
            .claimsList-active-down{
                    border-top: 8px solid #ff6600 !important;
            }
        }
     
    }

</style>

