<template>
    <div
    ref="myChart"
    id="chart-container">
    </div>

</template>

<script setup>
import * as echarts from 'echarts';
import { init } from 'echarts/core';
import { onMounted, onUnmounted } from 'vue';
let echart = echarts
onMounted(()=>{
  initChart()
})
onUnmounted(()=>{
  echart.dispose();
})

function initChart(){
  var myChart = echart.init(document.getElementById("chart-container"), null, {
  renderer: 'canvas',
  useDirtyRect: false
  
  });
  
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: [
    '白粉病'    ,
    '赤霉病'    ,
    '健康'      ,
    '白叶枯病'  ,
    '胡麻斑病'  ,
    '大斑病'    ,
    '花叶病毒病',
    '细菌性斑疹',
    '未检出' ,     
    '炭疽病'   , 
    '病毒病'  ,  
    '未知'       
    ]
  },
  series: [
    {
      name: ' 农作物种类',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 823, name: '小麦' },
        { value: 260, name: '水稻' },
        { value: 396, name: '玉米' },
        { value: 675, name: '大豆' },
        { value: 168, name: '棉花'},
        { value: 324, name: '西瓜'},
        { value: 452, name: '未知类', selected: true}
      ]
    },
    //,itemStyle: {color:''}
    {
      name: '病害识别',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,

        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 268, name:  '白粉病'    },
        { value: 230, name:  '赤霉病'     },
        { value: 325, name:  '未检出'        },
        { value: 135, name:  '白叶枯病'    },
        { value: 125, name:  '胡麻斑病'    },
        { value: 396, name:  '大斑病'      },
        { value: 234, name:  '花叶病毒病'   },
        { value: 441, name:  '细菌性斑疹'   },
        { value: 168, name:  '未检出'       },
        { value: 135, name:  '炭疽病'    },
        { value: 189, name:  '病毒病'    },
        { value: 452, name:  '未知'      }
      ]
    }
  ]
  };
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  window.addEventListener('resize', myChart.resize);
  return { initChart };
}  





</script>
<style>
#chart-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

</style>
