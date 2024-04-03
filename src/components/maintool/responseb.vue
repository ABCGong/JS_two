<template>
    <el-descriptions title="模型识别与分析结果" column=1 class="bg">
      <el-descriptions-item label="模型" >农作物虫害识别</el-descriptions-item>
      <el-descriptions-item label="处理时间" >2min05s</el-descriptions-item>
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
                    <el-carousel-item v-for="item in imgL" :key="item">
                    <h3 class="small justify-center" text="2xl">
                        <img :src=item alt="">

                    </h3>
                </el-carousel-item>
                </el-carousel>
                </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="hca">
                    <br>
                    检测到农作物：{{ it.c }}
                    <div v-for="i in it.bug">
                         <br/>
                    发现虫害：{{ i }}
                    </div>
                    <br/>
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
                v-model="it.msg"
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
      <el-descriptions-item label="分析可视化" >
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
import chart from '@/components/maintool/chartb.vue'
const lzw=["水稻","玉米"]
let count=ref(0)
const resTxt=ref("斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急")
const add=()=>{
    if(count.value<lzw.length-1){
        count.value+=1
    }
}
const imgL=[
    "src\\pic\\21.png",
    "src\\pic\\22.png",
    "src\\pic\\23.png",

]
const neg=()=>{
    if(count.value>0){
        count.value--
    }
}
const list=[
    {
        'id':0, 
        'c':"水稻",
        'bug':["稻蝗","稻飞虱"],
        'msg':`
        稻蝗：
                使用生物农药，如金龟子绿僵菌 CQMa421、球孢白僵菌、苦参碱等，对症施药。
                调控稻田周围的小生态环境，种植芝麻、黄豆等显花植物吸引天敌，增加天敌数量。
                根据稻蝗集中为害基部的特点，进行稻田养鸭防治。将鸭子放在田中，利用鸭子捉虫控害
        稻飞虱：
                及时观察与预防：建议以预防为主。使用预防药剂如吡蚜酮、呋虫胺，孕穗期短翅成虫5-10只以上即应防治。
                做好防治准备工作：田间灌浅水，用电泵抽水，分垄打透。喷施药剂时，从外围向中心施药技巧
            `     
    },
    {
        'id':1,
        "c":"玉米",
        'bug':["红缘灯蛾","玉米叶夜蛾" ,'玉米粘虫为害状'],
        'msg':`
        红缘灯蛾：
                清除田间杂草、麦茬，改善田间小气候。
                在清晨和傍晚进行人工捕杀。
                硬茬播种的田块，待玉米出苗后要及时浅耕灭茬，破坏玉米粘虫的栖息环境，降低虫源
        玉米叶夜蛾：
                根据幼虫发生情况，选用适宜的杀虫剂喷雾防治。
                人工拨开已形成“烂窗纸状”的玉米苗，让其正常生长.
        玉米粘虫:
                选择适宜的杀虫剂喷雾防治。
                利用黑光灯或糖醋液诱杀成虫。
                及时浅翻地，消灭翻出的虫蛹。
                晚秋或初冬翻耕土地并灌水，消灭越冬蛹
        `
        
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