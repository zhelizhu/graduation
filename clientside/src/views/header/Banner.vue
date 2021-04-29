<!-- banner -->
<template>

    <div class='banner'>

      <el-carousel trigger="click" type="card" height="500px" :interval="4000">
        
        <el-carousel-item v-for="(item,index) in carousel" :key="index">

            <video class="banner-video" :src="item.banner_src" autoplay loop></video>

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

.banner-video{

    height: 100%;
    width: 100%;
    object-fit: cover;

}

</style>