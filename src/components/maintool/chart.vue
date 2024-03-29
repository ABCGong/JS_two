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
      'Direct',
      'Marketing',
      'Search Engine',
      'Email',
      'Union Ads',
      'Video Ads',
      'Baidu',
      'Google',
      'Bing',
      'Others'
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
        { value: 1548, name: '水稻' },
        { value: 775, name: '小麦' },
        { value: 775, name: '西瓜' },
        { value: 775, name: '棉花' },
        { value: 679, name: '未知类', selected: true}
      ]
    },
    //,itemStyle: {color:''}
    {
      name: 'Access From',
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
        { value: 1048, name: 'Baidu' },
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 251, name: 'Google' },
        { value: 234, name: 'Union Ads' },
        { value: 147, name: 'Bing' },
        { value: 135, name: 'Video Ads' },
        { value: 102, name: 'Others' }
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
