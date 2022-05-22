<script lang="ts" setup>
import Menu from "@/views/home/Menu.vue";
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="aside-container"><Menu /></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.common-layout{
  position: relative;
  min-height: 100vh;
  .aside-container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
