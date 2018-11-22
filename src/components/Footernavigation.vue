<template>
    <div class="navbar_nav">
            <ul class="fl w100">
                <router-link to="/"  tag="li" class="w33 fl"  @click.native="activeShow(1)" >
                    <img v-if="activeIndex == 1" src="../assets/home/home1.png" alt="">
                    <img v-else src="../assets/home/home.png" alt="">
                    <span :class="{'active':activeIndex == 1}" >精心推荐</span>
                </router-link>

                 <router-link to="/investFinancing" tag="li"  class="w33 fl"  @click.native="activeShow(2)">
                    <img v-if="activeIndex == 2" src="../assets/home/invest1.png" alt="">
                    <img v-else src="../assets/home/invest.png" alt="">
                    <span :class="{'active':activeIndex == 2}">我要出借</span>
                </router-link> 

                 <router-link tag="li" to="accountOverview"  id="active1" class="w33 fl"  @click.native="activeShow(3)">
                    <img v-if="activeIndex == 3 " src="../assets/home/accountOverview1.png" alt="">
                    <img v-else src="../assets/home/accountOverview.png" alt="">
                     <span :class="{'active':activeIndex == 3}">我的账户</span> 
                </router-link>
            </ul>

    </div> 
</template>
<script>
    export default{
      data(){
          return{
             activeIndex:1   //导航栏状态
          }
      },
      methods: {
          activeShow(res){
              this.activeIndex = res;
          }
      },
     beforeMount () {
            let path = this.$route.path;
            console.log(path)
            switch (path) {
                case "/":
                    this.activeIndex = 1;
                    break;
                case "/investFinancing":
                    this.activeIndex = 2;
                    break;
                case "/accountOverview":
                    this.activeIndex = 3;
                    break;
                default:
                    break;
            }
      }
    }
</script>
<style spcoed lang="less">
    .navbar_nav{
        width:100%;
        height:50px;
        position: fixed;
        bottom:0px;
        background:#f9f9f9;
        z-index: 100;
        ul{
            height:100%;
            border-top:1px solid #eee;
            li{
                margin-top: 0.2rem;
                text-align: center;
                img{
                    display: block;
                    width: 1.2rem;
                    height: 1.2rem;
                    margin: 0 auto;
                }
               span{
                    color:#666;
                    display:block;
                    margin-top: 0.1rem;
                    font-size:12px;
               }
               .active{
                  color:rgb(248, 92, 13);
               }
            }
        }
    }
</style>