<template>
  <div style="height: 100%;" class="tool">
    <el-container style="height: 100%;">
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
    <p>模型选择</p>
    <el-select
      v-model="value2"
      collapse-tags
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
  <div class="m-3">
    <p>农作物种类选择</p>
    <el-select
      v-model="value1"
      multiple
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
  <div class="m-3">
    <p>模型精度选择</p>
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
  
  <el-tour v-model="myopen"  @finish="handleTourFinish" @close="handleTourFinish">
    <el-tour-step :target="ref1?.$el" title="Upload File">

      <div>Put you files here.</div>
    </el-tour-step>
    <el-tour-step
      target=".tb"
      title="Save"
      description="Save your changes"
    />
    <el-tour-step
      :target="ref3?.$el"
      title="Other Actions"
      description="Click to see other"
    />
    <el-tour-step
      target="#tree"
      title="Other Actions"
      description="Click to see other"
    />
  </el-tour>
  
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
let myopen=false
const handleTourFinish=()=>{
 myopen=false
}
onMounted(() => {
  setTimeout(()=>{
    console.log("45454")
    myopen=true
  },3000)
})
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
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
.tool{
  background-image: url("C:/Users/G/Desktop/project/vue-project/src/components/maintool/bg5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>