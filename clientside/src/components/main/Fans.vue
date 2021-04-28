<!-- fans -->
<template>

    <div class='fans'>

      <UserCard @reFindFans="findUserFans" v-for="(item,index) in fans" :key="index" :userInfo="item" />

    </div>

</template>

<script>

// import FansCard from '../util/FansCard'

import { fans } from "../../request/api";

import UserCard from '../util/UserCard'

export default {

   components: { UserCard },

   data() {
       return {

         fans:[]

       };
   },

   computed: {},

   watch: {},

   methods: {

    findUserFans(){

        let params = {

           userToken:localStorage.getItem('userToken')

        }

        fans(params).then( (res) => {

              this.fans = res.data.data

        } )
        .catch((err) => {

            console.log(err);

        })

    },

   },
   created() {

      this.findUserFans()

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