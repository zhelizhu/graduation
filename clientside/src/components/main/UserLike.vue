<!-- user-like -->
<template>

    <div class='user-like'>

       <Card  
        v-for="(pro,index) in userLike" 
        :key="index" 
        :video="pro"
      />

    </div>

</template>

<script>

import Card from '../util/Card'

import { userLike } from "../../request/api"; 

export default {

   components: { Card },

   data() {
       return {

         userLike:[]

       };
   },

   computed: {},

   watch: {},


   methods: {

     findUserLike(){

       let query = {

         userToken: localStorage.getItem('userToken')

       }

       userLike(query).then((res) => {

         this.userLike = res.data.data
         
       }).catch((err) => {

         console.log(err);
         
       });

     }

   },
   created() {

     this.findUserLike()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

</style>