
<template>
  <div class="vanta_area" ref="Area">
      <div class="" id="login">
    <div class="flex flex-wrap gap-4">
      <el-text class="mx-1" tag="b" style="color: black;">账号:</el-text>
      <el-input v-model="inputzh" style="width: 240px;margin: 8px 0;" placeholder="Please input" />
      <el-text class="mx-1" tag="b" style="color: black;">密码:</el-text>
      <el-input v-model="inputpd" style="width: 240px;margin: 8px 0;" type="password" placeholder="Please input password" show-password/>
      <el-button type="primary" @click="blogin">Login In</el-button>
    </div>
        


      </div>

  </div>
</template>
<script setup>
//导入vanta.js和three.js，以及ref等hooks
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.clouds'
import {onMounted,onBeforeUnmount,ref} from 'vue'
import { useUserStore } from '../../stores/user'
import { useRoute, useRouter } from "vue-router"
//使用ref引用挂载区域
const user=useUserStore()
let inputzh=ref('')
let inputpd=ref('')
const router = useRouter()
function blogin(){
  if(inputpd.value==="123456" && inputzh.value==="admin"){
    user.name="Admin"
    user.isAdmin=true
    router.push({
        path: '/',
        // name: 'home',
        query: {
            msg: user.name
        }
    })
  }
}
const Area=ref(null)
let vantaEffect=null;
//在两个生命周期钩子内创建vantaEffect
onMounted(()=>{
  vantaEffect=CLOUDS({
      el:Area.value,
      THREE:THREE,
      //如果需要改变样式，要写在这里
      //因为这里vantaEffect是没有setOptions这个方法的
      color: 0x16212a,
  })
})
onBeforeUnmount(()=>{
  if(vantaEffect){
      vantaEffect.destroy()
  }
})
</script>
<style scoped>
#signin{
  width: 50%;
  padding: 0;
  margin: 0;
  height: 25px;
  border-width: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px
}
.vanta_area{
  height: 100%;
  padding: 0;
  margin: 0;
}
#login{
  width: 240px;
  position: relative;
  top: 35%;
  left: 40%;
  background-color: rgba(147, 137, 156, 0.6);
  padding-top: 10px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
}
.pl{
  display: inline;
}

</style>
