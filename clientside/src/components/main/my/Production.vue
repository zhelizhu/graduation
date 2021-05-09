<!-- 作品 -->
<template>

    <div class='production' v-infinite-scroll="load">

      <VideoCard  
        v-for="(pro,index) in production" 
        :key="index" 
        :video="pro"
        :proOrLike="proOrLike"
        :isShowDel="isShowDel"
        @reFindUserProduction="reFindUserProduction"
      />

    </div>

</template>

<script>

import VideoCard from '../../util/VideoCard'

export default {

   components: { VideoCard },

   props:['production','proOrLike','isShowDel'],

   data() {
       return {

         curPage:0

       };
   },

   computed: {},

   watch: {},

   methods: {

     load(){

       this.$emit('reFindUserProduction',this.curPage += 1)

     },

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

    // align-items: center;

    justify-content: flex-start;

    flex-wrap: wrap;

    width: 100%;

    height: calc(100vh - 100px);

    overflow-y: auto;

    padding-left: 20px;

    .scrollbar();

}

</style>    