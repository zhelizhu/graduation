<!-- attention -->
<template>

    <div class='attention'>

      <UserCard @reFindAttention="findUserAttention" v-for="(item,index) in attention" :key="index" :userInfo="item" />

    </div>

</template>

<script>

import { attention } from "../../request/api";

// import AttentionCard from '../util/AttentionCard'

import UserCard from '../util/UserCard'

export default {

   components: { UserCard },

   data() {
       return {

         attention:[]

       };
   },

   computed: {},

   watch: {},

   methods: {

    findUserAttention(){

       let query = {

         userToken:localStorage.getItem('userToken')

       }

       attention(query).then( (res) => {

            this.attention = res.data.data

        } )
        .catch((err) => {

            console.log(err);

        })

    }

   },
   created() {

     this.findUserAttention()

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