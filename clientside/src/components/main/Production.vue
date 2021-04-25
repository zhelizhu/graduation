<!-- 作品 -->
<template>

    <div class='production'>

      <Card  
        v-for="(pro,index) in production" 
        :key="index" 
        :video="pro"
        @reFindUserProduction="reFindUserProduction"
      />

    </div>

</template>

<script>

import Card from '../util/Card'

import { production } from "../../request/api";

export default {

   components: { Card },

   data() {
       return {

           production:[],

           userToken:localStorage.getItem('userToken'),

       };
   },

   computed: {},

   watch: {},


   methods: {

    findUserProduction() {

        let query = {

            userToken:this.userToken

        }

        production(query).then( (res) => {

            this.production = res.data.data

        } )
        .catch((err) => {

            console.log(err);

        })

    },

    reFindUserProduction(){

        this.findUserProduction()

    }

   },
   created() {

        this.findUserProduction()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.production{

    display: flex;

    align-items: center;

    justify-content: center;

}

</style>    