<script setup lang="ts">
import { nextTick, onMounted, ref, UnwrapRef } from "vue";
import * as echarts from "echarts";
const linchartRef: any = ref(null);
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};
const initEchart = () => {
  // let myChart: echarts.ECharts;
  let myChart = echarts.init(linchartRef.value as HTMLDivElement);
  myChart.setOption(option);
  myChart.resize();
};
const setValues = (val: any) => {
  // if (myChart) {
  //   myChart.dispose();
  // }
  option.xAxis.data = val.xAxisData;
  option.series[0].data = val.data1;
  // option.series[1].data = val.data2;
  // option.series[2].data = val.data3;
  // option.series[3].data = val.data4;
  // option.series[4].data = val.data5;
  initEchart();
};
defineExpose({ setValues });
onMounted(() => {
  // initEchart();
});
</script>
<template>
  <div ref="linchartRef" style="width: 100%; height: 100%"></div>
</template>
<style scoped lang="scss"></style>
