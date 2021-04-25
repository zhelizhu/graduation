<!-- fans -->
<template>

    <div class='fans'>

      <FansCard v-for="(item,index) in fans" :key="index" :fans="item" />

    </div>

</template>

<script>

import FansCard from '../util/FansCard'

export default {

   components: { FansCard },

   props:['fans'],

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

.fans{

  display: flex;

  width: 100%;

  height: 100%;

  flex-wrap: wrap;

  align-content: flex-start;

}

</style>