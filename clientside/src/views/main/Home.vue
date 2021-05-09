<!-- home -->
<template>

    <div class='home'>

        <Banner></Banner>

        <Title :title="'短视频热榜'" />

        <hotCard :videoList="hotList"/>

    </div>

</template>

<script>

import Banner from '../header/Banner'

import hotCard from '../../components/main/home/hotCard'

import { hotList } from '../../request/api'

import Title from '../../components/home/Title'

export default {

   components: { Banner,hotCard,Title },

   data() {
       return {

           hotList:[]

       };
   },

   computed: {},

   watch: {},

   methods: {

       findHotList(){

           let query = {

               userId:localStorage.getItem('userId')

           }

           hotList(query).then( (res)=>{

               this.hotList = res.data.data

           } ).catch( (err) => {


               console.log(err);

           })

       }

   },
   created() {

       this.findHotList()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

</style>