<script setup lang="ts">
import { ref } from "vue";
import LineChartVue from "@/components/LineChart.vue";
const linchartRef = ref<any>(null);
const initLinchart = () => {
  linchartRef.value.setValues({
    xAxisData: ["用户1", "用户2", "用户3", "用户4", "用户5"],
    data1: [38, 34, 69, 90, 22],
    data2: [10, 34, 43, 71, 12],
    data3: [67, 83, 56, 42, 45],
    data4: [36, 57, 18, 10, 52],
    data5: [23, 34, 43, 52, 67],
  });
};
// defineProps<{ msg: string }>()
</script>

<template>
  <el-row :gutter="10">
    <el-col :md="24" :lg="16" :xl="16" class="sf-container">
      <el-row :gutter="10">
        <el-col :md="24" :lg="12" :xl="6">
          <h3 class="h3-text">Dashboard</h3>
          <p class="text-color">Overview Of Lasted Month</p>
          <h3 class="h3-text" style="padding-top: 36px">
            <span style="font-size: 24px; font-weight: bold">$7,754</span>
          </h3>
          <p class="text-color">Overview Of Lasted Month</p>
          <h3 class="h3-text" style="padding-top: 36px">
            <span style="font-size: 24px; font-weight: bold">1234</span>
          </h3>
          <p class="text-color">Overview Of Lasted Month</p>
          <el-button
            style="margin-top: 15px"
            type="primary"
            size="large"
            @click="initLinchart"
            >Last Mouth Summary</el-button
          >
        </el-col>
        <el-col :md="24" :lg="12" :xl="18">
          <LineChartVue ref="linchartRef" style="height: 100%" />
        </el-col>
      </el-row>
    </el-col>
    <el-col :md="24" :lg="8" :xl="8">
      <div class="sf-botom"></div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.sf-container,
.sf-botom {
  background-color: #fff;
  margin-bottom: $sf-btom;
  height: $sf-height;
  padding: $sf-pd;
  border-radius: $sf-border-radius;
  text-align: center;
    & .h3-text {
      font-size: $sf-font-size;
      font-weight: bold;
  }
}
</style>
