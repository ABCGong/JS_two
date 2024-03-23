<template>
    <el-row>
      <el-col :span="6">
        <el-statistic title="收集农作物数据条数" :value="268500" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="收集害虫数据条数" :value="outputValue" />
      </el-col>
      <el-col :span="6">
        <el-statistic :value="98">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              病虫害识别正确率
            </div>
          </template>
          <template #suffix>/100</template>
        </el-statistic>
      </el-col>

      <el-col :span="6">
        <el-statistic title="生成农业对策与建议" :value="562">
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
  
  const source = ref(0)
  const outputValue = useTransition(source, {
    duration: 1500,
  })
  source.value = 172000
  </script>
  
  <style scoped>
  .el-col {
    text-align: center;
  }
  </style>
  