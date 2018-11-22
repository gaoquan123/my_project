<template>
    <div class="jiaLogin_content">
        <div v-transfer-dom>
            <popup v-model="IsLogin" height="100%">
                <div class="login_bac">
                    <div class="box_content_login">
                        <div class="box_content_login_header">
                            <tab :line-width="2">
                                    <tab-item 
                                    :selected="IsShowLR === item" 
                                    v-for="(item, index) in list3" 
                                    @click.native="IsShowLogin(item)" 
                                    v-model="IsShowLR"
                                    :key="index">
                                    {{item}}</tab-item>
                            </tab>
                        </div>
                        <div class="form_control_Login" v-if="IsShowLR == '登录'">
                                <x-input title='账号：' :debounce="500" @on-change="change" placeholder ="请输入用户名" v-model="LoginidValue"></x-input>
                                <x-input title='密码：' :debounce="500" @on-change="change" placeholder ="请输入密码" v-model="LoginpasswordVlaue"></x-input>
                                <div class="forget_password_register w100">
                                    <p class="fr">忘记登录密码？</p>
                                </div>
                                <x-button plain>登录</x-button>
                        </div>
                        <div class="form_control_Register" v-if="IsShowLR == '注册'">
                                <x-input title="账号" name="mobile" placeholder="请输入手机号码" keyboard="number"  v-model="RegisterIdValue" is-type="china-mobile"></x-input>
                                <x-input title="验证码" v-model="RegisterSmsValue"></x-input>
                                <x-input title="短信"  placeholder ="请输入验证码" class="weui-vcode" v-model="RegisterCodeValue">
                                    <x-button slot="right" type="primary" mini>发送验证码</x-button>
                                </x-input>
                                <x-input title='密码' :debounce="500" @on-change="change" placeholder ="8位及以上登录密码（不全是数字）" v-model="RegisterWordValue"></x-input>
                                <x-button plain>完成注册</x-button>
                                <p class="m-t-1 p-l-05  front-12">
                                <check-icon :value.sync="demo1"></check-icon>
                                    我已阅读并同意
                                    <a class="front-12">《嘉石榴服务协议》</a>
                                    <a class="front-12">《委托授权书》</a>
                                </p>
                        </div>
                    </div>

                    <router-link  to="/"   class="front-14 goback w33 fl">
                        取消
                    </router-link>
                </div>
            </popup>
        </div>
    </div>
</template>
<script>
import { Popup,Tab, TabItem,XInput, Group,XButton,CheckIcon} from 'vux'
export default {
    data () {
        return {
            IsLogin:true,
            list3: ['登录', '注册'],
            IsShowLR: '登录',
            LoginidValue:'',
            LoginpasswordVlaue:'',
            RegisterIdValue:'',
            RegisterCodeValue:'',
            RegisterSmsValue:'',
            RegisterWordValue:'',
            demo1: false
        }
    },
    methods: {
        IsShowLogin(data){
            this.IsShowLR = data
        },
        change(){

        }
    },
    components: {
      Popup,Tab, TabItem,XInput, Group,XButton,CheckIcon
    },
   
}
</script>
<style lang="less" scoped>
.login_bac{
        height:100%;
        width:100%;
        overflow: hidden;
        background: url("../../assets/loginRegister/login_register.png") no-repeat center;
        background-size:100%;
        position: relative;
        .box_content_login{
            width: 90%;
            height: 12rem;
            position: absolute;
            left: 5%;
            top: 50%;
            margin-top: -6rem;
        }
        /deep/.vux-tab-item.vux-tab-selected{
                color: @jia16-color;
         }
        /deep/.vux-tab-ink-bar{
            background-color: @jia16-color;
        }
     
        // 登录
        .form_control_Login{
              border: 1px solid #eee;
                width: 100%;
                height: 100%;
            .forget_password_register{
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.3rem;
                width: 90%;
                height: 2rem;
                line-height: 2rem;
                color: #03a9f4;
            }
            .weui-btn{
                background: @jia16-color;
                color: #fff;
                border: none;
                width: 80%;
                margin-top: 0.5rem;
            }
            /deep/.vux-x-input{
                border-bottom: 1px solid #eee;
                margin-left: 1rem;
                margin-right: 1rem;
                height: 2rem;
            }
        }
        // 注册
        .form_control_Register{
            border: 1px solid #eee;
            width: 100%;
            height: 15rem;
            .vux-x-input{
                border-bottom: 1px solid #eee;
                
            }
             .weui-btn_plain-default{
                background: @jia16-color;
                color: #fff;
                border: none;
                width: 80%;
                margin-top: 1rem;
            }
             .weui-btn_primary{
                background: @jia16-color;
             }
        }
        .goback{
            color: #999;
            padding: 0.5rem;
            // position: absolute;
            // right: 0px;
            
        }
}
</style>
