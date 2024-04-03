<template>
  <div style="height: 100%;" :class="cls"
    v-loading="loading"
    element-loading-text="模型正在处理，请稍后..."
    element-loading-background="rgba(122, 122, 122, 0.8)"
  >
    <el-container v-if="isload" style="height: 100%;">
      <el-aside width="600px"  class="asidez">
    <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    ref="ref1"
    v-loading="loadvedio"
    v-if="true"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件 <em @click="lv();stepadd1()">点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        MP4/MOV格式视频，大小不超过600MB
      </div>


    </template>
  </el-upload>
    <el-card style="width: 480px;margin-top: 140px;margin-left: 46px;" shadow="always">
        <el-text class="mx-1" size="large">*请在网络状况良好时使用</el-text>
        <br/>
        <el-text class="mx-1" size="large">*农作物种类依据情况多选</el-text>
        <br/>
        <el-text class="mx-1" size="large">*模型精度指在参数量不同的网络下训练</el-text>
      
      </el-card>
      </el-aside>
      <el-main class="mainz">
        <div style="height: 300px; max-width: 600px;position: absolute;left: 90%;top: 25%;">
        <el-steps direction="vertical" :active="step" id="tree" style="z-index: 999;" finish-status="success">
      <el-step title="上传视频" />
      <el-step title="选择模型" />
      <el-step title="选择作物种类" />
      <el-step title="点击上传" />
        </el-steps>


       </div>
       <div class="tb" id="tb">
       <div class="m-3">
    <p class="ff">模型选择</p>
    <el-select
      v-model="value2"
      collapse-tags
      placeholder="目前已上线两种模型"
      style="width: 240px"
      @change="stepadd2"
    >
      <el-option
        v-for="item in optionsb"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="m-3">
    <p class="ff">农作物种类选择</p>
    <el-select
      v-model="value1"
      multiple
      placeholder="可多选"
      style="width: 240px"
      @change="stepadd3"
    >
      <el-option
        v-for="item in optionsa"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    
  </div>
  <div class="mb-3" style="margin: 30px; margin-left: 60px;">
    <el-button type="success" round ref="ref3" @click="stepadd4();load()">上传处理</el-button>
  </div>
</div>
      </el-main>
    </el-container>
    <div v-else-if="!isload && value2[0]=='农作物病害检测V1.2'"><responsez/></div>
    <div v-else-if="!isload && value2[0]=='农作物害虫检测V1.51'"><responseb/></div>
    
  </div>
  
  <el-tour v-model="myopen" >
              <el-tour-step :target="ref1?.$el" title="文件上传与注意事项">

                <div>网络环境差时可能导致文件传输失败哦~~</div>
                </el-tour-step>
                <el-tour-step
                target=".tb"
                title="模型参数选择"
                description="模型参数选择"
                />
                <el-tour-step
                :target="ref3?.$el"
                title="视频文件处理"
                description="点击即可处理视频，处理时间长，请耐心等待"
                />
                <el-tour-step
                target="#tree"
                title="处理进度"
                description="这里可以查看后端视频处理进度，请耐心等待"
                />
  </el-tour>
  
</template>
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import {ref} from "vue"
import type { ButtonInstance } from 'element-plus'
import { onMounted } from 'vue'
import responseb  from '@/components/maintool/responseb.vue'
import responsez  from '@/components/maintool/responsez.vue'
const loading = ref(false)
const ref1 = ref<ButtonInstance>()
const step=ref(0)
const ref3 = ref<ButtonInstance>()
const loadvedio=ref(false)
const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([]) 
const myopen = ref(false)
const isload = ref(true)
const cls=ref("tool")
/*const load=()=>{
  stepadd4()
  setTimeout(()=>{
      loading.value=true
  },1000)
  setTimeout(()=>{
    loading.value=false
    cls.value="toolchage"
    isload.value=false
  },1000)

}
*/
const load=()=>{
  
    cls.value="toolchage"
    isload.value=false

}
const lv=()=>{

  loadvedio.value=true
}
const stepadd2=()=>{

  if(step.value<2){
    step.value++
}
console.log(value2.value)
}
const stepadd1=()=>{
  if(step.value<1){
    step.value++
}
}
const stepadd3=()=>{
  if(step.value<3){
    step.value++
}
}
const stepadd4=()=>{
  if(step.value<4){
    step.value++
}
}
  
onMounted(()=>{
  setTimeout(()=>{
       myopen.value=true
       console.log(myopen.value)
  },1500)
})
const optionsa = [
  {
    value: '小麦',
    label: '小麦',
  },
  {
    value: '水稻',
    label: '水稻',
  },
  {
    value: '玉米',
    label: '玉米',
  },
  {
    value: '大豆',
    label: '大豆',
  },
  {
    value: '油菜',
    label: '油菜',
  },
  {value:"棉花",label:"棉花"},{value:"梨树",label:"梨树"},{value:"桃树",label:"桃树"},{value:"豇豆",label:"豇豆"},{value:"芝麻",label:"芝麻"},{value:"西瓜",label:"西瓜"},{value:"黄瓜",label:"黄瓜"},{value:"番茄",label:"番茄"},{value:"葡萄",label:"葡萄"},{value:"猕猴桃",label:"猕猴桃"},{value:"甜瓜",label:"甜瓜"}
]
const optionsb = [
  {
    value: '农作物病害检测V1.2',
    label: '农作物病害检测V1.2',
  },
  {
    value: '农作物害虫检测V1.51',
    label: '农作物害虫检测V1.51',
  },
]

</script>
<style scoped>
.asidez{
    background-color: transparent
  
}
.mainz{
    background-color: transparent
}
.upload-demo{
  width: 80%;
  margin-left: 45px;
  position: relative;
  top:20%
}
.tb{
  width: 37%;
  position: relative;
  left: 10%;
  top: 20%;
}
  /* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈数黑体 Bold";font-weight: 700;src: url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/FekERHyVfQhp.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/48ySayR0yYF0.woff") format("woff");
  font-display: swap;
}
.ff{
  font-family: "阿里妈妈数黑体 Bold";
  color:black
}
.tool{
  background-image: url("@/components/maintool/bg5.jpg");
    background-repeat:no-repeat;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
}
.toolchage{

    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
}
</style>