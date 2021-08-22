<template>
    <div>
        <input type="file" class="hide" ref="file" @change="upload" />
        <div class="btn" @click="select">选择文件</div>
        <div class="btn">文件上传</div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{
        select(){
            this.$refs.file.click();
        },
        upload(e){
            const formData = new FormData();
            let dom = document.querySelector('.hide');
            formData.append('myImg',dom.files[0]);
            this.POSTFILE('upload',formData,this.success,this.error)
        },
        success(data){
            console.log(data)
        },
        error(err){
            console.log(err)
        }
    }
}
</script>
<style scoped>
    .hide{
        visibility: hidden;
    }
    .btn{
        width: 11.7rem;
    height: 2.1rem;
    line-height: 2.1rem;
    background-color: #8f7a61;
    border-radius: 8px;
    text-align: center;
    margin: 0.8rem auto 0;
    font-size: 36px;
    position: relative;
    color: #fff;
    }
</style>
