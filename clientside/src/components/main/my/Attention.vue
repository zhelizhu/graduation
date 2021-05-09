<!-- attention -->
<template>

    <div class='attention'>

      <UserCard @reFindAttention="reFindAttention" v-for="(item,index) in attention" :key="index" :userInfo="item" />

    </div>

</template>

<script>

import UserCard from '../../util/UserCard'

export default {

   components: { UserCard },

   props:['attention'],

   data() {
       return {


       };
   },

   computed: {},

   watch: {},

   methods: {

     reFindAttention(){

       this.$emit('reFindAttention')

     }

   },

   created() {},

   mounted() {}
}
</script>

<style lang='less' scoped>

.attention{

  display: flex;

  width: 100%;

  height: 100%;

  flex-wrap: wrap;

  padding-left: 35px;

  align-content: flex-start;

}

</style>