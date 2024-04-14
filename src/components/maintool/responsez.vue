<template>
    <el-descriptions title="模型识别与分析结果" column=1 class="bg">
      <el-descriptions-item label="模型" >农作物病害识别</el-descriptions-item>
      <el-descriptions-item label="处理时间" >3min23s</el-descriptions-item>
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
                    发现病害：{{ i }}
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
import chart from '@/components/maintool/chartz.vue'
const lzw=["小麦","水稻","玉米","大豆","棉花","西瓜"]
let count=ref(0)
const resTxt=ref("斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急")
const add=()=>{
    if(count.value<lzw.length-1){
        count.value+=1
    }
}
const imgL=[
    "src\\pic\\11.png",
    "src\\pic\\12.png",
    "src\\pic\\13.png",
    "src\\pic\\14.png",
    "src\\pic\\15.png",
    "src\\pic\\16.png",
    "src\\pic\\17.png",
    "src\\pic\\18.png",
]
const neg=()=>{
    if(count.value>0){
        count.value--
    }
}
const list=[
    {
        'id':0, 
        'c':"小麦",
        'bug':["白粉病","赤霉病"],
        'msg':`
        赤霉病：
                选择抗病品种。
                小麦扬花期时，减少浇水量，避免过多浇水。
                使用有效的内吸杀菌剂，如多菌灵和甲基硫菌灵。
                最适合喷药的时期是小麦的齐穗期至盛花期。
        白粉病：
                该病主要侵害叶片和叶鞘。
                初发病时，叶面出现白色霉点，后逐渐扩大为白色霉斑。
                使用药剂进行防治，如杂环类和三唑类药剂。
                防治小麦白粉病宜早不宜晚，发病初期用药效果较好。
            `     
    },
    {
        'id':1,
        "c":"水稻",
        'bug':["白枯叶病","胡麻斑病"],
        'msg':`
        白枯叶病：
                深耕灭茬，压低菌源。
                及时处理带病稻草，烧毁。
                适当增施磷钾肥和有机肥，特别是钾肥的施用可提高植株抗病力。
                酸性土要注意排水，施用适量石灰，以促进有机肥物质的正常分解。
                实行浅灌、勤灌，避免长期淹水造成通气不良。
        胡麻斑病：
                选在无病田留种或进行种子消毒。
                增施腐熟堆肥做基肥，及时追肥，增加磷钾肥，特别是钾肥的施用可提高植物株抗病力。
                酸性土要注意排水，适当施用石灰。
                实行浅灌、勤灌，避免长期水淹造成通气不良。
        `
        
    },
    {
        'id':2,
        "c":"玉米",
        'bug':["大斑病"],
        'msg':`
        大斑病：
                选择抗病品种：种植具有稳定抗病性的玉米品种，避免品种单一化，合理布局与轮换。
                加强田间管理：科学施肥、加强排水、定期翻耕、长势调整，增强植株抵抗力。
                消灭菌源：清除田间的病株和病叶，深翻土壤，作燃料用的玉米秸杆要及早处理。
                定期喷药：在玉米抽雄前后，当病株率达到70%，病叶率达到20%时，喷药防治。可使用有效药剂如多菌灵、托布津等。
        `
    },
    {
        'id':3,
        "c":"大豆",
        'bug':["花叶病毒病","细菌性斑疹"],
        'msg':`
        花叶病毒病：
                选用抗病品种，精选无病种子，必要时进行种子消毒。
                与禾本科作物实行3-4年以上轮作。
                收获后及时深翻，以减少菌源。
                必要时喷洒1:1:160倍式波尔多液或30%碱式硫酸铜悬浮剂400倍液、30%氧氯化铜悬浮剂800倍液、47%加瑞农可湿性粉剂700-800倍液、12%绿乳铜油600倍液。
        细菌性斑疹：
                与禾本科作物实行3-4年以上轮作。
                选用抗病品种，精选无病种子，必要时进行种子消毒。
                实行栽培防病，清除田间大豆残体。
                必要时喷洒1:1:160倍式波尔多液或30%绿得保悬浮液400倍液，视病情防治1次或2次。
        `

    },
    {
        'id':4,
        "c":"棉花",
        'bug':[],
        'msg':"棉花病害分类得分均较低，请仔细检测->未检出病害"
        
    },
    {
        'id':5,
        "c":"西瓜",
        'bug':["炭疽病","病毒病"],
        'msg':`
        炭疽病：
                选择抗病品种，消毒种子和幼苗。
                避免重茬种植，轮作3年以上。
                合理施肥，增施有机肥和钾肥。
                提前预防，使用药剂进行防治。
        病毒病：
                选用抗病品种，消毒种子和幼苗。
                防止湿度过大，通风透光。
                及时摘除病叶和病果。
                使用药剂进行预防。
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