<!-- play -->
<template>

    <div class='play'>

      <div class="in">

        <!-- <vue-core-video-player :src="videoSrc" :autoplay="true"></vue-core-video-player> -->

        <video class="video" controls autoplay :src="videoSrc"></video>

        <!-- <video-player :src="videoSrc"></video-player> -->

        <div class="close" @click="close">

          <i class="el-icon-close"></i>

        </div>

      </div>

    </div>

</template>

<script>

import { mapMutations } from 'vuex'

export default {

   components: {},

   data() {

       return {

       };

   },

   computed: {

     videoSrc(){

       return this.$store.state.videoSrc

     }

   },

   methods:{

     ...mapMutations(['setVideoSrc','setIsPlay']),

     close(){

       this.setVideoSrc('')

       this.setIsPlay(false)

     }

   },

   watch: {

   },
   created(){


   }
}
</script>

<style lang='less' scoped>

.play{

  position: fixed;

  width: 100%;

  height: 100vh;

  left: 0;

  top: 0;

  z-index: 2;

  background: rgba(0,0,0,.8);

  display: flex;

  justify-content: center;

  .in{

      display: flex;

      align-items: center;

      min-width: calc(100vw/3);

      .video{

        height: 95vh;

      }

  }

  .close{

    position: absolute;

    right: 50px;

    top: 50px;

    display: flex;

    justify-content: center;

    align-items: center;

    width: 60px;

    height: 60px;

    border-radius: 50%;

    background: rgba(255,255,255,.4);

    color: #fff;

    cursor: pointer;

  }

}


</style>