<template>
  <div id="app">
    <div class="app-content">
        <router-view/>
    </div>
    <div class="app-footer">
        <Footernavigation></Footernavigation>
    </div>
  </div>
</template>

<script>
import Footernavigation from './components/Footernavigation'
export default {
   name: 'App',
   created(){
        // this.$axios.get('/api/main-page/trading-data').then((res)=>{
        //     console.log(res.data,"@2")
        // }).catch((err)=>{
        //     console.log(err,"5")
        // })
    }
    ,
    components:{
        Footernavigation
    }
}
</script>

<style scpoed lang="less">
.m-b-05{margin-bottom: 0.5rem};
.m-b-08{margin-bottom: 0.8rem};
.m-b-1{margin-bottom: 1rem};
.m-b-2{margin-bottom: 2rem};
.m-b-3{margin-bottom: 3rem};
.m-b-4{margin-bottom: 4rem};
.m-b-5{margin-bottom: 5rem};

.m-t-05{margin-top: 0.5rem};
.m-t-08{margin-top: 0.8rem};
.m-t-1{margin-top: 1rem};
.m-t-2{margin-top: 2rem};
.m-t-3{margin-top: 3rem};
.m-t-4{margin-top: 4rem};
.m-t-5{margin-top: 5rem};

.m-r-05{margin-right: 0.5rem};
.m-r-08{margin-right: 0.8rem};
.m-r-1{margin-right: 1rem};
.m-r-2{margin-right: 2rem};
.m-r-3{margin-right: 3rem};
.m-r-4{margin-right: 4rem};
.m-r-5{margin-right: 5rem};

.m-l-05{margin-left: 0.5rem};
.m-l-08{margin-left: 0.8rem};
.m-l-1{margin-left: 1rem};
.m-l-2{margin-left: 2rem};
.m-l-3{margin-left: 3rem};
.m-l-4{margin-left: 4rem};
.m-l-5{margin-left: 5rem};

.p-b-05{padding-bottom: 0.5rem};
.p-b-08{padding-bottom: 0.8rem};
.p-b-1{padding-bottom: 1rem};
.p-b-2{padding-bottom: 2rem};
.p-b-3{padding-bottom: 3rem};
.p-b-4{padding-bottom: 4rem};
.p-b-5{padding-bottom: 5rem};


.p-t-05{padding-top: 0.5rem};
.p-t-08{padding-top: 0.8rem};
.p-t-1{padding-top: 1rem};
.p-t-2{padding-top: 2rem};
.p-t-3{padding-top: 3rem};
.p-t-4{padding-top: 4rem};
.p-t-5{padding-top: 5rem};

.p-r-05{padding-right: 0.5rem};
.p-r-08{padding-right: 0.8rem};
.p-r-1{padding-right: 1rem};
.p-r-2{padding-right: 2rem};
.p-r-3{padding-right: 3rem};
.p-r-4{padding-right: 4rem};
.p-r-5{padding-right: 5rem};

.p-l-05{padding-left: 0.5rem};
.p-l-08{padding-left: 0.8rem};
.p-l-1{padding-left: 1rem};
.p-l-2{padding-left: 2rem};
.p-l-3{padding-left: 3rem};
.p-l-4{padding-left: 4rem};
.p-l-5{padding-left: 5rem};
.fl{float:left}
.fr{float:right}
.w10{width:10%}
.w20{width:20%}
.w25{width:25%}
.w30{width:30%}
.w33{width:33%}
.w40{width:40%}
.w50{width:50%}
.w60{width:60%}
.w70{width:70%}
.w80{width:80%}
.w90{width:90%}
.w85{width:85%}
.w15{width:15%}

.w100{width:100%}
.h10{height: 10%};
.h20{height: 20%};
.h30{height: 30%};
.h40{height: 40%};
.h50{height: 50%};
.h60{height: 60%};
.h70{height: 70%};
.h80{height: 80%};
.h90{height: 90%};

.h100{height: 100%};
// .f-12{font-size: 12px};
// .f-13{font-size: 13px};
// .f-14{font-size: 14px};
// .f-15{font-size: 15px};
// .f-16{font-size: 16px};
// .f-18{font-size: 18px};
// .f-20{font-size: 20px};
// .f-22{font-size: 22px};
.pr{
    position: relative;
}


.xiaowei{
    background-color: #81adff;
    color: #ffffff;
    padding: 0 4px;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    line-height: 15px;
    height: 15px;
    overflow: hidden;
}
.jia-tag{
    border: 1px solid #ffa365;
    color: #ff6600;
    background-color: #fff4f0;
    padding: 0 4px;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    line-height: 15px;
    height: 15px;
    overflow: hidden;
}
.j-clolr{
        color: #ff6600;
}
.cb{
      clear: both;

}
circle {
    -webkit-transition: stroke-dasharray .5s;
    transition: stroke-dasharray .5s;
}
     /********************** 屏幕适配 **************************/
        @media screen and (max-width:321px){
            .front-11{font-size:11px}
            .front-12{font-size:12px}
            .front-13{font-size:12px !important;}
            .front-14{font-size:12px}
            .front-15{font-size:13px !important;}
            .front-16{font-size:14px}
            .front-18{font-size:16px}
            .front-20{font-size:18px}
            .front-22{font-size:20px}
            .front-24{font-size:22px}
            .front-26{font-size:24px}
            .front-28{font-size:26px}
            .front-30{font-size:28px}
            .front-34{font-size:32px}
            .front-35{font-size:32px}
            .front-36{font-size:32px}
            .front-10{font-size:10px}
        }

        @media screen and (min-width:321px) and (max-width:400px){
            .front-11{font-size:11px}
            .front-12{font-size:12px}
            .front-13{font-size:13px !important;}
            .front-14{font-size:14px}
            .front-15{font-size:15px !important;}
            .front-16{font-size:16px}
            .front-18{font-size:18px}
            .front-20{font-size:20px}
            .front-22{font-size:22px}
            .front-24{font-size:24px}
            .front-26{font-size:26px}
            .front-28{font-size:28px}
            .front-30{font-size:30px}
            .front-34{font-size:34px}
            .front-35{font-size:35px}
            .front-36{font-size:36px}
            .front-10{font-size:10px}
        }
        @media screen and (min-width:400px){
            .front-11{font-size:13px}
            .front-12{font-size:14px}
            .front-13{font-size:15px !important;}
            .front-14{font-size:16px}
            .front-15{font-size:17px !important}
            .front-16{font-size:18px}
            .front-18{font-size:20px}
            .front-20{font-size:22px}
            .front-22{font-size:24px}
            .front-24{font-size:26px}
            .front-26{font-size:28px}
            .front-28{font-size:30px}
            .front-30{font-size:32px}
            .front-34{font-size:36px}
            .front-35{font-size:37px}
            .front-36{font-size:38px}
            .front-10{font-size:12px}
        }
        /*********************************************************/
// .more{
//      width:1.5rem;
//     height:1.5rem;
//     display: block;
//     padding-left: 1rem;
//     margin-top: 0.4rem;
// }
</style>
