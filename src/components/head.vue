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
          style="width: 100px"
          
          alt="Element logo"
        />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">工作区</el-menu-item>
      <el-sub-menu index="2">
        <template #title v-if="!user.isAdmin"><router-link to="/login">未登录</router-link></template>
        <template #title v-else-if="user.isAdmin">{{ user.name }}</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3"></el-menu-item>
        </el-sub-menu>
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
  </style>
  