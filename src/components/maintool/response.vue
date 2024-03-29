<template>
    <el-descriptions title="模型识别与分析结果" column=1 class="bg">
      <el-descriptions-item label="模型" >害虫识别</el-descriptions-item>
      <el-descriptions-item label="处理时间" >1000</el-descriptions-item>
      <el-descriptions-item label="识别到农作物种类">
        <el-tag id="tag" size="small" v-for="item in lzw">{{ item }}</el-tag>

      </el-descriptions-item>
      <el-descriptions-item :label="txt" >
        <el-card style="width: 80%;position: relative;left: 10%;" shadow="always">
           <div v-for="it in list" :key="it" class="ff">
                <div v-if="it.id==count">
                    <el-row :gutter="6" style="margin-top:10px;">
        <el-col :span="12">
            <el-card style="width:320px" shadow="always" class="ca">
                <el-carousel height="240px" motion-blur>
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                </el-carousel-item>
                </el-carousel>
                </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="hca">
                    catat 
                    <br>
                    {{ count }}
                    检测到害虫：t/t
                    <br/>
                    害虫多发：叶片
                    <br/>
                    可能害虫种类:adsa
                    <br>
                    多发于：----/多发于：----
                    <br>
                    常见可能害虫
                    <br>
                    <el-button-group>
                    <el-button type="primary" :icon="ArrowLeft" @click="neg"></el-button>
                    <el-button type="primary" @click="add">
                    <el-icon class="el-icon--right" ><ArrowRight /></el-icon>
                    </el-button>
                </el-button-group>
                <el-button type="primary" style="margin-left: 20px;" @click="">下载PDF</el-button>
                </el-card>
        </el-col>
                    </el-row>

                
               
                <el-input
                v-model="resTxt"
                maxlength="4096"
                placeholder="结果正在分析生成中，请稍后......."
                show-word-limit
                type="textarea"
                class="ip"
                :autosize="{minRows:2,maxRows:8}"
                />
                </div>
           </div>
        </el-card>

      </el-descriptions-item>
      <el-descriptions-item label="图形化数字" >
        <chart/>
      </el-descriptions-item>
   
    </el-descriptions>
  </template>
<script setup>
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
import {ref} from 'vue'
import chart from '@/components/maintool/chart.vue'
const lzw=["小麦","水稻","玉米","大豆","油菜","棉花","梨树","桃树","豇豆","芝麻","西瓜","黄瓜","番茄","葡萄","猕猴桃","甜瓜"]
let count=ref(0)
const resTxt=ref("斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急")
const add=()=>{
    if(count.value<lzw.length-1){
        count.value+=1
    }
}
const neg=()=>{
    if(count.value>0){
        count.value--
    }
}
const list=[
    {
        'id':0,
        'bug':"昆虫",
        'time':600,
        'totaltime':6000,
        'pos':"叶片",
    },
    {
        'id':1,
        'bug':"昆虫",
        'time':600,
        'totaltime':6000,
        'pos':"叶片",
    },
    {
        'id':2,
        'bug':"昆虫",
        'time':600,
        'totaltime':6000,
        'pos':"叶片",
    },
    {
        'id':3,
        'bug':"昆虫",
        'time':600,
        'totaltime':6000,
        'pos':"叶片",
    },
    {
        'id':4,
        'bug':"昆虫",
        'time':600,
        'totaltime':6000,
        'pos':"叶片",
    },
]
const txt=ref("查看结果-共有"+lzw.length+"条结果")
console.log(txt.value)
</script>
<style scoped>

.bg{
    position: relative;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 30px;
    background-color:rgb(255, 255, 255);
    width: 80%;
    top: 5%;
    left: 10%;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    box-shadow: 4px;
}


#tag{
    margin-right: 10px;

}
.hca{

    width: 100%;

}

.ip{
    margin-top: 20px;
    width: 100%;
    min-height: 100px;
 
}
</style>