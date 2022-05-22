<script lang="ts" setup>
import { ref } from "vue";
import {
  ElLink,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
} from "element-plus";
import {
  Document,
  Menu as IconMenu,
  Stopwatch,
  Setting,
  Finished,
  Monitor,
  Warning,
  Notebook,
  Lightning,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-link title="管理系统" href="/" style="text-align: center; width: 100%;height: 50px;line-height: 50px;" :underline="false"
      ><el-icon color="#409EFC" :size="40"><Lightning /></el-icon>
      <h3 style="color: #409efc; padding-left: 15px">SF管理系统</h3>
    </el-link>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Stopwatch /></el-icon>
        <span>仪表盘</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1"
          ><template #title>
            <el-icon><Finished /></el-icon>
            <span>分析页</span>
          </template></el-menu-item
        >
        <el-menu-item index="1-2"
          ><template #title>
            <el-icon><Monitor /></el-icon>
            <span>工作台</span>
          </template></el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Notebook /></el-icon>
      <template #title>错误页面</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>权限管理</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>系统管理</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Warning /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
</style>
