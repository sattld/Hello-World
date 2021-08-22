<template>
    <div style="padding-top:50px">
        <div v-for="(item) in list" class="btn" @click="jump(item.name)">{{item.meta.text}}</div>
    </div>
</template>
<script>
import list from '../router/routerArr'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        let arr = [];
        list.map(val=>{
            if(val.meta.list==true){
                arr.push(val);
            }
        })
        this.list = arr;
    },
    methods:{
        jump(name){
            this.$router.push({name:name})
        }
    }
}
</script>
<style scoped>
.btn{
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
</style>