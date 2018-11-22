<template>
    <div class="TabOption">
        <div class="moneyIndex m-b-1">
            <img src="../../assets/accountOverview/money.png" alt="">
            <div class="leftMoney fl front-13">可用余额：0.00元</div>
            <div class="rightMoney fr">
                <button>提现</button>
                <button>充值</button>
            </div>
        </div>
        <div class="container">
            <div class="containerItem">
                <i></i>
                <img src="../../assets/accountOverview/1.png" alt="">
                <div class="fl">定期优选</div>
                <div class="fr">代收0.00元</div>
            </div>
            <div class="containerItem">
                <img src="../../assets/accountOverview/2.png" alt="">
                <div class="fl">精选标的</div>
                <div class="fr">代收0.00元</div>
            </div>
            <div class="containerItem">
                <img src="../../assets/accountOverview/3.png" alt="">
                <div class="fl">转让变现</div>
                <div class="fr">0笔转让中</div>
            </div>
        </div>
        <div class="moreTbarItem">
            <img src="../../assets/accountOverview/4.png" alt="">
            <div class="fl">热门活动</div>
            <div class="fr ion"></div>
        </div>
        <div class="moreTbarItem">
                <img src="../../assets/accountOverview/5.png" alt="">
            <div class="fl">推荐有礼</div>
            <div class="fr ion"></div>
        </div>
        <div class="moreTbarItem">
                <img src="../../assets/accountOverview/6.png" alt="">
            <div class="fl">客服与反馈</div>
            <div class="fr ion"></div>
        </div>
        <div class="moreTbarItem">
            <img src="../../assets/accountOverview/7.png" alt="">
            <div class="fl">回款日历</div>
            <div class="fr ion"></div>
        </div>
        <div class="moreTbarItem">
                <img src="../../assets/accountOverview/8.png" alt="">
            <div class="fl">更多</div>
            <div class="fr ion"></div>
        </div>

        <!-- 底部 -->
        <div class="accountOverviewOption_footer front-14">
            <span>账户资金由厦门银行存管严格保障</span>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        // XButton,FlexboxItem
    },
}
</script>
<style lang="less" scoped>
    .TabOption{
        width: 100%;
        .moneyIndex{
            padding-left: 1rem;
            padding-right: 0.5rem;
            height: 2.5rem;
            background: #fff;
            img{
                width: 1rem;
                height: 1rem;
                float: left;
                margin-top: 0.7rem;
            }
            .leftMoney{
                line-height: 2.5rem;
                padding-left: 0.5rem;
            }
            .rightMoney{
               button{
                    width: 2.525rem;
                    height: 1.325rem;
                    text-align: center;
                    border: 1px solid #ff6600;
                    border-radius: 5px;
                    color: #ff6600;
                    background: #fff;
                    margin-top: 0.62rem;
                    margin-left: 0.3rem;
               }
            }
        }
        .container{
            background: #fff;
            height: 7.5rem;
            padding-left: 1rem;
            padding-right: 0.5rem;
            margin-bottom: 0.7rem;
            .containerItem{
                height: 2.5rem;
                width: 100%;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                div{
                    line-height: 2.5rem;
                    padding-left: 0.5rem;
                }
                img{
                    width: 1rem;
                    height: 1rem;
                    float: left;
                    margin-top: 0.7rem;
                }
            }
        }
        .moreTbarItem{
            margin-bottom: 0.7rem;
            height: 2.5rem;
            background: #fff;
            padding-left: 1rem;
            padding-right: 1rem;
                div{
                    line-height: 2.5rem;
                    padding-left: 0.5rem;
                }
                 img{
                    width: 1rem;
                    height: 1rem;
                    float: left;
                    margin-top: 0.7rem;
                }
                .ion{
                    background: url('../../assets/accountOverview/right.png') no-repeat center;
                    background-size: 100% 100%;
                    height: 0.8rem;
                    margin-top: 1rem;
                    display: block;
                }
        }
        .accountOverviewOption_footer{
                margin: 1rem;
                text-align: center;
                height: 2rem;
              
                span{
                    color: #778b99;
                    margin-left: 5px;
                    vertical-align: middle;
                }
        }
    }
</style>
