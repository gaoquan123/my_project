<template>
     <div class="homeMenu m-t-1">
         <!-- 论坛专区 -->
         <div class="home_forum">
             <div class="home_forum_title">
                 <div class="fl w85">
                    <span class="ImgInfoheader">
                        <img src="../../assets/home/forum.png" alt="" srcset="">
                    </span>
                    <span class="header_text front-13">论坛专区</span>
                 </div>
                    <p class="fr w15">
                        <span class="front-13">更多</span>
                        <span>
                            <img src="../../assets/home/more.png" class="more" alt="" srcset="">
                        </span>
                    </p>
             </div>
             <div class="home_forum_content w100" v-for = "item in forumItemImg" :key="item.name">
                 <div class="forum_leftImg w30 fl">
                     <img :src="item.pic" alt="">
                 </div>
                 <div class="fourm_rightText fl">
                     <p class="fl">{{item.title}}</p>
                     <div style="clear:both;"></div>
                     <div class="infoTip">
                         <span class="w30">{{item.forumname}}</span>
                         <span class="pr w20 m-l-1"><i></i>{{item.views}}</span>
                         <span>{{item.dateline}}</span>
                     </div>
                 </div>
             </div>
         </div>
          <!-- 石榴课堂，风险管理 -->
         <div class="home_class_mannge m-t-1 fl">
            <div class="fl m-l-1 fl">
                <img src="../../assets/home/16.png" alt="" srcset="">
            </div> 
             <div class="fl m-r-1 fr">
                <img src="../../assets/home/risk_men.png" alt="" srcset="">
            </div>
         </div>
         <!-- 底部title -->
         <div class="home-footer-safe cb">
             <p class="front-14px">账户资金由厦门银行存管严格保障</p>
             <div class="border_footer">
                 <!-- <i></i> -->
                 <span>嘉石榴，服务实体经济，关心万家收益</span>
                 <div></div>
             </div>
         </div>
     </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed: {
         forumItemImg(){
            return this.$store.state.home.HomeforumObjItem
      }  
    },
    created () {
        this.$store.dispatch("forumObj")
    }
}
</script>
<style lang="less" scoped>
    .homeMenu{
        width: 100%;
        height: 100%;
        margin-bottom: 50px;
        // 论坛专区
        .home_forum{
                width: 100%;
                height: 100%;
        background: #fff;
            .home_forum_title{
                width: 100%;
                height: 2.25rem;
                border-bottom: 1px solid #eee;
                 .ImgInfoheader{
                    width: 1.5rem;
                    display: inline-block;
                    height: 1.5rem;
                }
                img{
                    width:0.8rem;
                    height:0.8rem;
                    display: block;
                    padding-left: 1rem;
                    margin-top: 0.9rem;
                }
                span:nth-child(2){
                    line-height: 2.25rem;
                    padding-left: 0.6rem;
                }
                p{
                    float: right;
                    span{
                        display: block;
                        line-height: 2.5rem;
                        .more{
                            width:0.8rem;
                            height:0.8rem;
                            display: block;
                            padding-left: 0.6rem;
                            margin-top: -1.65rem;
                       }
                    }
                   
                }
            }
            .home_forum_content{
                width: 100%;
                height: 3rem;
                padding: 1rem;
                border-bottom: 1px solid #eee;
                .forum_leftImg{
                    img{
                        width: 4.7rem;
                        height: 3rem;
                    }
                }
                .fourm_rightText{
                    width: 62%;
                        p{
                        height: 2.3rem;
                        }
                    .infoTip{
                        width: 100%;
                        span{
                            display: block;
                            float: left;
                            color: #999;
                            i{
                                background: url('../../assets/home/eye.png') no-repeat;
                                width: 0.8rem;
                                height: 0.8rem;
                                display: inline-block;
                                -webkit-background-size: 100%;
                                background-size: 100%;
                                position: absolute;
                                left: -1rem;
                                top: 3px;
                            }
                        }
                    }
                }
            }
           
        }
        // 风控管理，石榴课堂
            .home_class_mannge{
                clear: both;
                width: 100%;
                height: 7.2rem;
                background: #fff;
                div{
                    margin-top: 1rem;
                    img{
                        width: 8rem;
                    }
                }
            }
        // 
        .home-footer-safe{
                padding: 0.75rem;
                text-align: center;
                background: #f0f0f0;
            .border_footer{
                margin-top: 0.6rem;
                div{
                    height: 1px;
                    overflow: hidden;
                    background: #ced9e1;
                    position: relative;
                    display: block;
                    top: -0.4rem;
                    z-index: 1;
                }
                span{
                    color: #9aadbb;
                    position: relative;
                    z-index: 2;
                    background-color: #f0f0f0;
                    padding: 0 .25rem;
                }
            }
        }
    }
</style>


