<script setup>
import myhead from "@/components/head.vue";
import myaside from "@/components/aside.vue";
import myfoot from "@/components/foot.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="head">
        <myhead/>
      </el-header>
      <el-container class="container">
        <el-aside class="aside">
            <myaside/>

        </el-aside>
        <el-container>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
          <el-footer class=" footer">
            <myfoot/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout{
  color:transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
}
.head{
  background-color: rgb(255, 255, 255);

}
.aside{
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 10.5%;
}
.container{
 height: 690px;
}
.main{
  height: 100%;
  color: red;
  padding: 0;
  margin: 0;
}
.footer{
  background-color: rgba(255, 255, 255,0.3);
}

</style>