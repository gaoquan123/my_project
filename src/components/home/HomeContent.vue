<template>
    <div class="home_content">
        <!-- 首页精心推荐 -->
        <div class="home_content_header">
            <span class="ImgInfo">
              <img src="../../assets/home/icon-jxyx.png" alt="" srcset="">
            </span>
            <span class="header_text front-13">精心推荐</span>
        </div>
         <div class="home_bottm_recommend" v-for="item in ordinaryItem.personalLoan" :key='item.name'>
             <div class="recommend_title">
                 <span class="xiaowei">小微</span>
                 <span class="titleInfo"> {{item.title}}</span>
                 <span class="jia-tag"  v-if="item.mortgageable">抵</span>
                 <span class="jia-tag"  v-if="item.guaranteeable">保</span>
                 <span class="jia-tag"  v-if="item.canUseVoucherTag">可转让</span>
                 <span class="jia-tag"  v-if="item.config.useCoupon">返现券</span>
                 <!-- <span class="jia-tag">代金券</span> -->
             </div>
             <div class="recommend_content_text fl w100">
                 <div class="recommend_yield_val fl w33">
                     <p class="yield_val_percent j-clolr">
                         {{item.instalmentPolicy.annualRate | formatRate }}<span class="f-16">%</span>
                     </p>
                     <p class="clr f-14">约定年华利率</p>
                 </div>
                  <div class="recommend_day fl w33">
                     <p class="day_val">{{item.instalmentPolicy.interval.count}}<span class="f-16">天</span></p>
                     <p class="f-14">期限</p>
                 </div>
                 <div class="recommend_right_svg fl w33">
                    <svg width="60" height="60">
                        <text class="f-14" x="20" y="35" width="60" height="60">{{item.currentInvestmentAmount.amount | formatProgressRate(item.amount.amount,item.status)}}%</text>
                        <circle cx="30" cy="30" r="29" stroke-width="2" stroke="#efefef" fill="none"></circle>
                        <circle class="circle" cx="30" cy="30" r="29" stroke-width="2" stroke="#ff5c0c" fill="none" 
                        transform="rotate(-82, 30, 30)" :stroke-dasharray="item.currentInvestmentAmount.amount | formatProgressBar(item.amount.amount,item.status)"></circle>
                    </svg>
                 </div>
             </div>
         </div>
    </div>
    
</template>
<script>
import VueFilter from '../../store/MyMethod/vueFilter'
export default {
    name:'homeContent',
    data () {
        return {
            
        }
    },
    computed: {
        ordinaryItem(){
           return this.$store.state.home.HomeordinaryItem
        }
    },
    components:{
    },
    created() {
       this.$store.dispatch("ordinaryrecommend")
    }
}
</script>
<style lang="less" scoped>
    .home_content{
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        background: #fff;
        .home_content_header{
            width: 100%;
            height: 2.25rem;
            border-bottom: 1px solid #eee;
            .ImgInfo{
                 width: 1.5rem;
                display: inline-block;
                height: 1.5rem;
            }
            img{
                width:0.8rem;
                height:0.8rem;
                display: block;
                padding-left: 1rem;
                margin-top: 0.8rem;
            }
            .header_text{
                line-height: 2.25rem;
                padding-left: 0.6rem;
            }
        }
        .home_bottm_recommend{
            height: 7rem;
            .recommend_title{
                padding: 1rem 0rem 0.5rem 1rem;
                .titleInfo{
                    vertical-align: middle;
                    color: #333333;
                }
            }
            .recommend_content_text{
                padding-top: 0.6rem;
                div{
                    text-align: center;
                }
                .recommend_yield_val{
                    .yield_val_percent{
                        line-height: 2.0rem;
                        font-size: 26px;
                    }
                    .clr{
                        color: #999;
                    }
                }
                .recommend_day{
                    .day_val{
                          line-height: 2.0rem;
                         font-size: 26px;
                         color: #555;
                     }
                     p:nth-child(2){
                         color: #999;
                     }
                }
                .recommend_right_svg{
                          line-height: 2.0rem;
                }

            }
        }
    }
</style>

