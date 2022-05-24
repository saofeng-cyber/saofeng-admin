<script lang="ts" setup>
import Menu from "@/views/home/Menu.vue";
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";
import Header from "@/views/home/Header.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto" class="aside-container"><Menu /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.common-layout {
  .el-header {
    padding: 0;
  }
  .aside-container {
    height: 100vh;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.15);
  }
}
</style>
