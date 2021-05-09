<!-- banner -->
<template>

    <div class='banner'>

      <el-carousel trigger="click" type="card" height="300px" :interval="4000" indicator-position="none">
        
        <el-carousel-item v-for="(item,index) in carousel" :key="index">

            <video class="banner-video" :src="item.banner_src" autoplay loop></video>

        </el-carousel-item>
      </el-carousel>

    </div>

</template>

<script>

import { banner } from '../../request/api'

export default {

   components: {  },

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

.banner{

  background: @black;

}

.banner-video{

    height: 100%;
    width: 100%;
    object-fit: cover;

}

</style>