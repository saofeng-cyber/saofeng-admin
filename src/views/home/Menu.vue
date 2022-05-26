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
  EditPen,
  Setting,
  Finished,
  Monitor,
  Warning,
  Notebook,
} from "@element-plus/icons-vue";
import { UseSession } from "@/store/index";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
    <el-menu-item index="/analyis">
      <el-icon :size="32" style="vertical-align: middle"
        ><EditPen color="#C396ED"
      /></el-icon>
      <template #title
        ><h3 style="color: #c396ed; margin: 0 5px">
          {{ t("manageSystem") }}
        </h3></template
      >
    </el-menu-item>
    <el-sub-menu index="/">
      <template #title>
        <el-icon><Stopwatch /></el-icon>
        <span>{{ t("dashboard") }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/analyis"
          ><template #title>
            <el-icon><Finished /></el-icon>
            <span>{{ t("analyisPage") }}</span>
          </template></el-menu-item
        >
        <el-menu-item index="/platform"
          ><template #title>
            <el-icon><Monitor /></el-icon>
            <span>{{ t("plateform") }}</span>
          </template></el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/error">
      <el-icon><Notebook /></el-icon>
      <template #title>{{ t("errorPage") }}</template>
    </el-menu-item>
    <el-menu-item index="/authority">
      <el-icon><document /></el-icon>
      <template #title>{{ t("authorityRun") }}</template>
    </el-menu-item>
    <el-menu-item index="/system">
      <el-icon><setting /></el-icon>
      <template #title>{{ t("systemRun") }}</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><Warning /></el-icon>
      <template #title>{{ t("about") }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-menu {
  border: none;
}
</style>
