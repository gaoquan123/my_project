<template>
        <div class="home">
            <!-- 轮播图 -->
            <div class="swiperList">
                <swiper auto loop @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
                    <swiper-item class="swiper-demo-img" v-for="(item, index) in HomebannerItem" :key="index">
                        <a :href="item.url">
                                <img :src="item.type">
                            </a>
                    </swiper-item>
                </swiper>
            </div>
            <!--赚取信息，出借人数  -->
            <div class="home_header">
                <div class="home_header_content fl p-t-05">
                    <div class="w33 fl">
                        <p class="front-12">{{HomeInfos.amount}}亿元</p>
                        <p class="cl front-12">累计兑付金额</p>
                    </div>
                     <div class="w33 fl">
                        <p class="front-12">{{HomeInfos.onlineRepaidInterest}}万元</p>
                        <p class="cl front-12">为出借人赚取</p>
                    </div>
                     <div class="w33 fl" style="border:none;">
                        <p class="front-12">{{HomeInfos.timestamp}}天</p>
                        <p class="cl front-12">平台运营时间</p> 
                    </div>  
                </div>
            </div>
            <!-- 消息，邀请好友，信息披露 -->
            <div class="home_topnav_more m-t-1">
                 <router-link to="/w"  tag="div" class="fl w25">
                        <img src="../../assets/home/information.png" alt="">
                        <p class="front-13">消息中心</p>
                 </router-link> 

                 <router-link to="/"  tag="div" class="fl w25">
                    <img src="../../assets/home/icon2-inv.png" alt="">
                     <p class="front-13">邀请好友</p>
                 </router-link> 

                 <router-link to="/"  tag="div" class="fl w25">
                    <img src="../../assets/home/infoIcon.png" alt="">
                     <p class="front-13">信息披露</p>
                 </router-link> 

                 <router-link to="/"  tag="div" class="fl w25">
                     <img src="../../assets/home/inon4-sec.png" alt="">
                     <p class="front-13">安全保障</p>
                 </router-link> 
            </div>
            <!-- 标的推荐 -->
            <div clsss="home_content_more">
                <HomeContent></HomeContent>
            </div>
            <!-- 论坛、石榴课堂、风控 -->
             <div class="home_menu_more">
                <HomeMenu></HomeMenu>
             </div>
        </div>  
</template>

<script>
import { Swiper,SwiperItem } from 'vux'
import HomeContent from './HomeContent'
import HomeMenu from './HomeMenu'

export default {
  data () {
    return {
        swiperItemIndex: 0
    }
  },
    computed:{
        //轮播图数据
        HomebannerItem(){
            return this.$store.state.home.HomebannerItem
        },
        // 平台头部信息
        HomeInfos(){
            return this.$store.state.home.HomeInfos
        }
    },
    methods: {
        onSwiperItemIndexChange (index) {
        this.swiperItemIndex = index
        }
    },
    created () {
        //轮播图数据
         this.$store.dispatch("bannerItem");
         //平台信息数据
         this.$store.dispatch("tradingInfo")
 
    },
    components: {
        Swiper,SwiperItem,HomeMenu,HomeContent
       
    }
}

</script>

<style spcoed lang="less">
 .home{
     width: 100%;
     height: 100%;
        overflow: hidden;
    //  轮播图
     .swiperList{
            width: 100%;
            height: 7.5rem;
            .vux-swiper{
            width: 100%;
            height: 7.5rem !important;
            .swiper-demo-img{
                width: 100%;
                height: 100%;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                img{
                    width: 100%;;
                    height: 100%;
                }
              }
            }
         }
       }
       .mint-swipe-indicators{
             display: block !important;
       }
    // 赚取信息，出借人数 
    .home_header{
        width: 100%;
        background: #fff;
        height: 2.6rem;
        .home_header_content{
            padding-right: 1rem;
            width: 100%;
            height: 100%;
            div{
                text-align: center;
                border-right: 1px solid #eee;
                line-height: 0.9rem;
                .cl{
                    color:#908c8c;
                }
            }
        }
    }
    //消息，邀请好友，信息披露
    .home_topnav_more{
         width: 100%;
         background: #fff;
         height: 4rem;
         div{
             text-align: center;
             p{
                 padding-top: 0.6rem;
             }
            img{
                display: block;
                width: 1.3rem;
                height: 1.3rem;
                margin: 0 auto;
                padding-top: 0.7rem;
              }
         }
     }
 }
</style>
