<!-- 作品 -->
<template>

    <div class='production'>

      <VideoCard  
        v-for="(pro,index) in production" 
        :key="index" 
        :video="pro"
        :proOrLike="proOrLike"
        @reFindUserProduction="reFindUserProduction"
      />

    </div>

</template>

<script>

import VideoCard from '../../util/VideoCard'

export default {

   components: { VideoCard },

   props:['production','proOrLike'],

   data() {
       return {

       };
   },

   computed: {},

   watch: {},

   methods: {

     reFindUserProduction(){

       this.$emit('reFindUserProduction')

     }

   },

   created() {},

   mounted() {}
}
</script>

<style lang='less' scoped>

.production{

    display: flex;

    align-items: center;

    justify-content: center;

}

</style>    