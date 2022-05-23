<script lang="ts" setup>
import { UseSession } from "@/store/index";
import {
  Fold,
  Expand,
  Right,
  Sunny,
  FullScreen,
} from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import screenfull from "screenfull";

const isDark = useDark({
  valueDark: "html",
});
const toggleDark = useToggle(isDark);
const isFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  } 
};
// defineProps<{ msg: string }>();
const userSession = UseSession();
const { is_show } = storeToRefs(userSession);
const expand = () => {
  userSession.setShow();
};
const router = useRoute();

console.log(router);
</script>
<template>
  <div class="header">
    <div class="header-left">
      <el-icon
        :size="24"
        color="#606266"
        @click="expand"
        style="cursor: pointer; margin-right: 25px"
      >
        <Fold v-if="!is_show" />
        <Expand v-if="is_show" />
      </el-icon>
      <el-breadcrumb :separator-icon="Right">
        <el-breadcrumb-item v-for="(item, index) in router.matched" :key="index"
          ><span class="no-rediect" v-if="index == 0">{{ item.name }} </span>
          <span v-else>{{ item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-tooltip effect="dark" content="切换语言" placement="bottom">
        <div style="cursor: pointer; margin: 0 20px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="globalization"
            width="25"
            height="25"
            viewBox="0 0 512 512"
            data-v-22249cb1=""
          >
            <path
              d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏页面"
        placement="bottom"
      >
        <el-icon
          size="24px"
          style="margin: 0 20px; cursor: pointer"
          @click="isFull"
          ><FullScreen
        /></el-icon>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Github"
        placement="bottom"
      >
        <div style="cursor: pointer; margin: 0 20px">
          <svg
            class="inline-block text-20px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="25"
            height="25"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            ></path>
          </svg>
        </div>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="主题模式"
        placement="bottom"
      >
        <el-icon
          size="25px"
          style="margin: 0 20px; cursor: pointer"
          @click="toggleDark"
          ><Sunny
        /></el-icon>
      </el-tooltip>

      <el-dropdown style="margin: 0 15px; cursor: pointer">
        <span class="el-dropdown-link">
          <el-avatar
            :size="45"
            src="https://q.qlogo.cn/headimg_dl?dst_uin=3130723030&spec=640"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 56px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px #00152914;
  .header-left {
    display: flex;
    align-items: center;
    flex: 1 1 0%;
    .el-breadcrumb {
      display: flex;
    }
    .no-rediect {
      color: rgb(102, 158, 233);
      cursor: pointer;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
  }
}
</style>
