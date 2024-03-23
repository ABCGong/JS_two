<template>
  <div style="height: 100%;" class="tool">
    <el-container v-if="false" style="height: 100%;">
      <el-aside width="600px"  class="asidez">
        <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    ref="ref1"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        MP4/MOV格式视频，大小不超过600MB
      </div>
      <el-card style="width: 480px;margin-top: 40px;" shadow="always">
        <el-text class="mx-1" size="large">*请在网络状况良好时使用</el-text>
        <br/>
        <el-text class="mx-1" size="large">*农作物种类依据情况多选</el-text>
        <br/>
        <el-text class="mx-1" size="large">*模型精度指在参数量不同的网络下训练</el-text>
      
      </el-card>

    </template>
  </el-upload>
      </el-aside>
      <el-main class="mainz">
        <div style="height: 300px; max-width: 600px;position: absolute;left: 90%;top: 25%;">
        <el-steps direction="vertical" :active="[1,2,3]" id="tree">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
      <el-step title="Step 4" />
        </el-steps>


       </div>
       <div class="tb" id="tb">
       <div class="m-3">
    <p class="ff">模型选择</p>
    <el-select
      v-model="value2"
      collapse-tags
      placeholder="Select"
      style="width: 240px"
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
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in optionsa"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    
  </div>
  <div class="m-3">
    <p class="ff">模型精度选择</p>
    <el-select
      v-model="value3"
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="mb-3" style="margin: 30px; margin-left: 60px;">
    <el-button type="success" round ref="ref3">上传处理</el-button>
  </div>
</div>
      </el-main>
    </el-container>
    
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
  <response/>
</template>
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import {ref} from "vue"
import type { ButtonInstance } from 'element-plus'
import { onMounted } from 'vue'

 
const ref1 = ref<ButtonInstance>()

const ref3 = ref<ButtonInstance>()

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([]) 
const myopen = ref(false)
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
]
const optionsb = [
  {
    value: '农作物生长状态检测',
    label: '农作物生长状态检测',
  },
  {
    value: '农作物害虫检测',
    label: '农作物害虫检测',
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
  background-image: url("C:/Users/G/Desktop/project/vue-project/src/components/maintool/bg5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>