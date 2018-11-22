<template>
  <div class="investList_recommend">
             <div class="recommend_header_title">
                 <span class="xiaowei">小微</span>
                 <span class="titleInfo front-13">{{FilterListItems.title}}</span>
                 <span class="jia-tag"     v-if="FilterListItems.mortgageable">抵</span>
                 <span class="jia-tag"     v-if="FilterListItems.guaranteeable">保</span>
                 <!-- <span class="jia-tag"     v-if="FilterListItems.canUseVoucherTag">可转让</span> -->
                 <span class="jia-tag"     v-if="FilterListItems.config.useCoupon">返现券</span>
             </div>
             <div class="recommend_content_text fl w100">
                     <p class="yield_val_percent_an j-clolr fl w50">
                         {{FilterListItems.instalmentPolicy.annualRate | formatRate}}<span>%</span>
                     </p>
                     <p class="clr front-16 fl w50" v-if="FilterListItems.instalmentPolicy.interval.count == 1">
                         {{FilterListItems.instalmentPolicy.numberOfInstalments}}个月
                    </p>
                       <p class="clr front-16 fl w50" v-else>
                         {{FilterListItems.instalmentPolicy.interval.count}}天
                    </p>
             </div>
             <div class="finance-percent-seize">
                 <div class="finance-percent-fa fl">
                    <x-progress id="precent-fa fl" v-if="FilterListItems.TabIndex == 0" :percent="FilterListItems.togeNumber"></x-progress>
                    <x-progress id="precent-fa fl" v-if="FilterListItems.TabIndex == 1" :percent="0"></x-progress>
                    <x-progress id="precent-fa fl" v-if="FilterListItems.TabIndex == 2" :percent="0"></x-progress>
                 </div>
                 <span class="fl w10" v-if="FilterListItems.TabIndex == 0">{{FilterListItems.togeNumber}}%</span>
                 <span class="fl w10" v-if="FilterListItems.TabIndex == 1">100%</span>
                 <span class="fl w10" v-if="FilterListItems.TabIndex == 2">100%</span>
             </div>
             <div class="finance-listfootmsg_text fl w100">
                 <div v-if="FilterListItems.TabIndex == 0">
                    <p class="fl w60" v-if="FilterListItems.instalmentPolicy.type=='ONCE_PRINCIPAL_AND_INTEREST'">到期还本付息</p>
                    <p class="fl w60" v-if="FilterListItems.instalmentPolicy.type=='MATCHING_PRINCIPAL_AND_INTEREST'">等额本息</p>
                 </div>
                  <div v-if="FilterListItems.TabIndex == 1">
                    <p class="fl w45" v-if="FilterListItems.status=='FUNDING'">满标次日起息</p>
                 </div>
                  <div v-if="FilterListItems.TabIndex == 2">
                    <p class="fl w45" v-if="FilterListItems.status=='FUNDING'">满标次日起息</p>
                 </div>
                 <p class="fr w25" v-if="FilterListItems.TabIndex == 0">{{FilterListItems.investmentPolicy.minimumInvestmentAmount.amount}}元起</p>
                 <p class="fr w45" v-if="FilterListItems.TabIndex == 1">转让金额：{{FilterListItems.investmentPolicy.investmentAmount.amount}}元</p>
                 <p class="fr w25" v-if="FilterListItems.TabIndex == 2">{{FilterListItems.transferAmount.amount}}元</p>
             </div>
  </div>
</template>
<script>
    import { XProgress} from 'vux'

    export default {
        props:['FilterListItems'],
        data(){
            return{
            }
        },
        components: {
            XProgress
        },
        created() {
        },
    }
</script>
<style lang="less" scoped>
    .investList_recommend{
        margin-top: 0.5rem;
        width: 100%;
        height:8.5rem;
        padding-left:0.7rem;
        background: #fff;
        .recommend_header_title{
            width: 100%;
            padding-top:0.7rem;
            overflow: hidden;
            height: 2rem;
        }
        .recommend_content_text{
            .yield_val_percent_an{
                font-size: 34px;
                
            }
            .clr{
                line-height: 42px;
            }
        }
        .finance-percent-seize{
            width: 100%;
            margin-top: 1rem;
            .finance-percent-fa{
                width: 80%;
                    margin-top: 0.7rem;
                /deep/ .weui-progress__inner-bar{
                    background-color:@jia16-color;
                }
            }
            span{
                margin-left: 0.8rem;
                line-height: 1.5rem;
            }
        }
        .finance-listfootmsg_text{
            clear: both;
            margin-top: 0.5rem;
        }
       
    }
</style>
