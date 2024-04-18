<template>
    <el-row>
      <el-col :span="8">
        <el-statistic title="收集农作物病害数据条数" :value="outputValue2" />
      </el-col>
      <el-col :span="8">
        <el-statistic title="收集农作物虫害数据条数" :value="outputValue1" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="生成农业对策与建议" :value="129">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useTransition } from '@vueuse/core'
  import { ChatLineRound, Male } from '@element-plus/icons-vue'
  
  const source1 = ref(0)
  const outputValue1 = useTransition(source1, {
    duration: 1500,
  })
  source1.value = 80235

  const source2 = ref(0)
  const outputValue2 = useTransition(source2, {
    duration: 1500,
  })
  source2.value = 86167
  </script>
  
  <style scoped>
  .el-col {
    text-align: center;
  }
  </style>
  