<!-- banner -->
<template>

    <div class='banner'>

      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="(item,index) in carousel" :key="index">

          <el-image
          :src="item.filmBgSrc"
          >
           <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>

        </el-carousel-item>
      </el-carousel>

      <ColorLine></ColorLine>

    </div>

</template>

<script>

import { banner } from '../../request/api'

import ColorLine from '../../components/home/ColorLine'


export default {

   components: { ColorLine },

   data() {

       return {

         carousel:[]

       };
   },

   computed: {},

   watch: {},


   methods: {

      getBanner(){

           banner({}).then( (res) =>{

                console.log(res);

                this.carousel = res.data.data

           } )

       }

   },
   created() {

       this.getBanner()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.el-image{

  width: 100%;

  height: 100%;

}

</style>