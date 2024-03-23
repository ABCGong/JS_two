<template>
    <el-row class="tac">
      <el-col >
        <el-menu
          
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title >
              <el-icon><Briefcase /></el-icon>
              <span>大数据应用</span>
            </template>
            <el-menu-item-group title="应用">
              <el-menu-item :disabled="!user.isAdmin" index="1-1"><router-link to="/tool">功能使用</router-link></el-menu-item>
              
        
            </el-menu-item-group>
            <el-menu-item-group title="专家对话">
              <el-menu-item :disabled="!user.isAdmin" index="1-2"><router-link to="/lg">微调大模型</router-link></el-menu-item>
            </el-menu-item-group>
            
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><Histogram/></el-icon>
            <span>信息可视化</span>
          </el-menu-item>
        
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Histogram,
    Briefcase ,
    Setting,
  } from '@element-plus/icons-vue'
  import { useUserStore } from '../stores/user'
  import { ElMessage } from 'element-plus'

  const user=useUserStore()
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (user.isAdmin===false){
      ElMessage('未登录')
    }
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
<style>
  .router-link-active {
  text-decoration: none;
  color:rgb(  64, 158, 255);

}
a {
  text-decoration: none;
  color: #000000;
}
</style>
  