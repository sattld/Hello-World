<template>
    <div class="register_warper">
        <div class="register_head">欢迎注册账号</div>
        <div class="register_box">
            <div>
                <input type="text" placeholder="请输入手机号" v-model="phone"/>
            </div>
            <div>
                <input type="password" placeholder="请输入密码" v-model="password"/>
            </div>
            <div>
                <input type="password" placeholder="请再次输入密码" v-model="password2"/>
                <div class="error_tip" v-if="errorTip!=''">{{errorTip}}</div>
            </div>

        </div>
        <!-- <div class="register_btn" @click="login"></div> -->
        <div class="register" @click="register">
            <img src="@/assets/img/loginicon.png">
            注册
        </div>
    </div>
</template>
<script>
// import './login.css'
export default {
    data(){
        return{
            phone:'',
            password:'',
            password2:'',
            errorTip:''
        }
    },
    methods:{
        register(){
            if(this.phone==''){
                this.errorTip = '请输入手机号';
                return;
            }
            let reg = /^1\d{10}$/
            if(!reg.test(this.phone)){
                this.errorTip = '手机号格式不正确';
                return;
            }
            if(this.password==''){
                this.errorTip = '请输入登录密码';
                return;
            }
            if(this.password.length<6){
                this.errorTip = '密码长度不能小于6位';
                return;
            }
            if(this.password2==''){
                this.errorTip = '请再次输入密码';
                return;
            }
            if(this.password!==this.password2){
                this.errorTip = '两次输入密码不一致';
                return;
            }
            this.errorTip = '';
            this.POST('register',{
                phone:this.phone,
                password:this.password
            },this.success,this.error)
        },
        success(data){
            if(data.code=='200'){
                this.$router.push({name:'login'})
            }else{
                this.errorTip = data.text;
            }
        },
        error(err){
            console.log(err);
        }
    }
}
</script>
<style lang="stylus" scoped>
.register_warper {
    width: 100%;
    /* max-width: 720px; */
}

.register_head {
    font-family: SourceHanSansCN-Regular;
    font-size: 1.36rem;
    color: #ffffff;
    line-height: 5.45rem;
    height: 5.45rem;
    background-image: linear-gradient(135deg, #fba12f 0%, #fdce3c 100%);
    /* padding-left: 0.9rem; */
    box-sizing: border-box;
    text-align: center;
}

.register_box {
    padding: 0rem 1.5rem 2.5rem;
}

.register_box>div {
    height: 1.475rem;
    border-bottom: 0.075rem solid #dddddd;
    padding: 0rem 0 0.25rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    position: relative;
}

.register_box div input {
    border: none;
    outline: none;
    font-family: SourceHanSansCN-Regular;
    font-size: 0.677rem;
    line-height: 1.475rem;
    flex: 1 0 auto;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
}

.register_btn {
    display: block;
    width: 11.7rem;
    height: 2.1rem;
    background: url(../assets/img/login-btn.png) center center no-repeat;
    background-size: 100% 100%;
    margin: 0.8rem auto 0;
}

.error_tip {
    position: absolute;
    font-family: SourceHanSansCN-Regular;
    font-size: 0.6rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1rem;
    color: #dd1d1d;
    top: 2.25rem;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, 0%);
    -webkit-transform: translate(-50%, 0%);
    -moz-transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    -o-transform: translate(-50%, 0%);
}

.register {
    width: 11.7rem;
    height: 2.1rem;
    line-height: 2.1rem;
    background-color: #f88b00;
    border-radius: 8px;
    text-align: center;
    margin: 0.8rem auto 0;
    font-size: 36px;
    position: relative;
    color: #fff;
}

.register img {
    position: absolute;
    top: 15px;
    left: 32%;
    width: 36px;
}
</style>