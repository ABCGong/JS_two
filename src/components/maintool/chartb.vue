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
    '稻蝗',
    '稻飞虱',
    '红缘灯蛾',
    '玉米叶夜蛾',
    '玉米粘虫为害状',
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
        { value: 921, name: '水稻' },
        { value: 1522, name: '玉米' },
        { value: 557, name: '未知类', selected: true}
      ]
    },
    //,itemStyle: {color:''}
    {
      name: '虫害识别',
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

        { value: 497, name:  '稻蝗'   },
        { value: 424, name:  '稻飞虱'     },
        { value: 465, name:  '红缘灯蛾'       },
        { value: 469, name:  '玉米叶夜蛾'    },
        { value: 587, name:  '玉米粘虫为害状'    },
        { value: 557, name:  '未知'      }
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
