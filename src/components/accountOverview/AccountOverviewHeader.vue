<template>
    <div class="MyaccountOverview">
        <div class="MyaccountOverview_bac">
            <div class="MyaccountOverview_header fl w100 p-b-1">
                <div class="fl p-l-05 front-13">
                    石榴仔
                </div>
                <div class="fr p-r-05 front-13">
                     更多
                </div>
            </div>
            <div class="MyaccountOverview_content">
                <p class="front-26">0.23</p>
                <p>我的收益</p>
            </div>
            <div class="MyaccountOverview_bottom w100">
                <div class="tips fl w25">
                    <p>石榴币</p>
                    <p><span>1</span>个</p>
                </div>
                 <div class="tips fl w25">
                    <p>返现券</p>
                    <p><span>1</span>个</p>
                </div>
                 <div class="tips fl w25">
                    <p>加息券</p>
                    <p><span>1</span>个</p>
                </div>
                 <div class="tips fl w25">
                    <p>代金券</p>
                    <p><span>1</span>个</p>
                </div>
            </div>
        </div>
        <div class="MyaccountOverview_TabIndex">
           <AccountOverviewOption></AccountOverviewOption>
        </div>
    </div>
</template>
<script>
    import AccountOverviewOption from './AccountOverviewOption'
    
    export default {
        data () {
            return {
                
            }
        },
        beforeMount: function() {
            this.$axios.get('/ums/users/current').then((res)=>{
                console.log("1111")
            }).catch((err)=>{
                 this.$router.push({ path:'/login'})
            })
        },
        components: {
            AccountOverviewOption
        },
    }
</script>
<style lang="less" scoped>
.MyaccountOverview_bac{
    width: 100%;
    height: 9rem;
    background: -webkit-linear-gradient(#ff6600, #ff3d10);
    background: -o-linear-gradient(#ff6600, #ff3d10);
    background: -moz-linear-gradient(#ff6600, #ff3d10);
    background: linear-gradient(#ff6600, #ff3d10);
    margin-bottom: 1.7rem;
    position: relative;
    .MyaccountOverview_header{
        color: #f5e7e7;
        width: 100%;
        height: 1rem;
       margin-top: 0.5rem;

    }
    .MyaccountOverview_content{
        clear: both;
        color: #Fff;
        width: 100%;
        height: 2.8rem;
        p{
            text-align: center;
        }
        p:nth-child(2){
            color: #f5e7e7;
            padding-top: 0.3rem;
        }
    }
    .MyaccountOverview_bottom{
        position:absolute;
        width: 90%;
        height: 3rem;
        background: #fff;
        bottom: -1rem;
        left: 5%;
        border-radius: 8px 8px 0 0;
        .tips{
            height: 2rem;
            border-right: 1px solid #eee;
            box-sizing: border-box;
            margin-top: 0.75rem;
            p{
                padding-left: 0.5rem;
                text-align: center;
                span{
                    color: @jia16-color;
                }
            }
        }
    }
}
</style>
