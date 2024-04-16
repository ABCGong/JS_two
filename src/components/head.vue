<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 40px"
          src="@/assets/iconapp.png"
          alt="Element logo"
        />
        <div id="ff"> 丰饶智象：混合数据源多模态自适应模式识别平台</div>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">工作区</el-menu-item>
      <el-sub-menu index="2">
        <template #title v-if="!user.isAdmin"><router-link to="/login">未登录</router-link></template>
        <template #title v-else-if="user.isAdmin">
          <el-avatar :size="40" :src="user.img" />
        </template>
        <el-menu-item index="2-1" :disabled="!user.isAdmin">
           个人中心
        </el-menu-item>
        <el-menu-item index="2-2" :disabled="!user.isAdmin">
           控制台
        </el-menu-item>
        <el-menu-item index="2-3" :disabled="!user.isAdmin">
           退出登录
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useUserStore } from '../stores/user'
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const user=useUserStore()
 
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  .router-link-active {
  text-decoration: none;
  color:rgb(  64, 158, 255);

}
a {
  text-decoration: none;
  color: #000000;
}
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈东方大楷 Regular";font-weight: 400;src: url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/AklNCiHSEEvd.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/s9W8UDzkLVOE.woff") format("woff");
  font-display: swap;
}
#ff{
  font-family: "阿里妈妈东方大楷 Regular";
  margin-left: 20px;

}
  </style>
  