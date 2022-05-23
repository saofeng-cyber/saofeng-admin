<script lang="ts" setup>
import { ref } from "vue";
import {
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
} from "element-plus";
import {
  Document,
  Stopwatch,
  Setting,
  Finished,
  Monitor,
  Warning,
  Notebook,
} from "@element-plus/icons-vue";
import { UseSession } from "@/store/index";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const userSession = UseSession();
const { is_show } = storeToRefs(userSession);
const useroute = useRoute();
</script>
<template>
  <el-menu
    :default-active="useroute.path"
    class="el-menu-vertical-demo"
    :collapse="is_show"
    router
  >
    <el-sub-menu index="/">
      <template #title>
        <el-icon><Stopwatch /></el-icon>
        <span>仪表盘</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/analyis"
          ><template #title>
            <el-icon><Finished /></el-icon>
            <span>分析页</span>
          </template></el-menu-item
        >
        <el-menu-item index="/platform"
          ><template #title>
            <el-icon><Monitor /></el-icon>
            <span>工作台</span>
          </template></el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/error">
      <el-icon><Notebook /></el-icon>
      <template #title>错误页面</template>
    </el-menu-item>
    <el-menu-item index="/authority">
      <el-icon><document /></el-icon>
      <template #title>权限管理</template>
    </el-menu-item>
    <el-menu-item index="/system">
      <el-icon><setting /></el-icon>
      <template #title>系统管理</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><Warning /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu {
  border: none;
}
</style>
