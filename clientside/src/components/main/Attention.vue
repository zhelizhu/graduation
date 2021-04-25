<!-- attention -->
<template>

    <div class='attention'>

      <AttentionCard v-for="(item,index) in attention" :key="index" :attention="item" />

    </div>

</template>

<script>

import AttentionCard from '../util/AttentionCard'

export default {

   components: { AttentionCard },

   props:['attention'],

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

.attention{

  display: flex;

  width: 100%;

  height: 100%;

  flex-wrap: wrap;

  align-content: flex-start;

}

</style>