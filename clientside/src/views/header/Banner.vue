<!-- banner -->
<template>

    <div class='banner'>

      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <ColorLine></ColorLine>

    </div>

</template>

<script>

import ColorLine from '../../components/home/ColorLine'

export default {

   components: { ColorLine },

   data() {
       return {

       };
   },

   computed: {},

   watch: {},


   methods: {

   },
   created() {

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}

</style>