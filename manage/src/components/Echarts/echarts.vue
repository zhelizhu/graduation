<!-- echarts -->
<template>

    <div ref="echarts" class='echarts'></div>

</template>

<script>

import * as echarts from "echarts";

export default {

components: {},

props:['option'],

data() {
//数据
    return {


    };
},
//监听
computed: {

},

//监控data中的数据变化
watch: {

},

//方法集合
methods: {

  initCharts(){

      let echartsDom = echarts.init(this.$refs.echarts)

      echartsDom.setOption(this.option)

      this.chart = echartsDom

      window.addEventListener('resize', ()=>{

          echartsDom.resize()

      })

  },

    destroy() {
      this.chart.dispose();
      this.chart = null;
    },

    refresh() {
      this.destroy();
      this.initCharts();
    } 
},

//创建完成
created() {

    // 监听 options 改动，改动后重绘数据
    this.$watch(
      "option",
      () => {
        this.refresh();
      },
      { deep: true }
    ); 


},
//挂载完成
mounted() {

   this.initCharts() 

}
}
</script>

<style lang='less' scoped>

.echarts {
  width: 100%;

  height: 500px;

  margin: 0 auto;
}

</style>