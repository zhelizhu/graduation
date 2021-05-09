<!-- attention -->
<template>

    <div class='attention'>

        <Title :title="'你的关注'" />

        <Production :production="attentionVideo" @reFindUserProduction="reFindUserProduction"/>

    </div>

</template>

<script>

import Production from '../../components/main/my/Production'

import Title from '../../components/home/Title'

import { attentionVideo } from '../../request/api'

export default {

   components: { Production,Title },

   data() {
       return {

           userId:localStorage.getItem('userId'),

           curPage:1,

           pageSize:10,

           attentionVideo:[]

       };
   },

   computed: {},

   watch: {},

   methods: {

       findAttentionVideo(){

           let query = {

               userId:this.userId,

               currentUserId:this.userId,
               
               curPage:this.curPage,

               pageSize:this.pageSize

           }

           attentionVideo(query).then( (res) => {

              console.log(res);

               if (res.data.total == this.attentionVideo.length) {
                   
                   return
   
               }

               this.attentionVideo = this.attentionVideo.concat(res.data.data)

           } ).catch( (err) => {

               console.log(err);

           } )

       },

       reFindUserProduction( curPage ){
 
         this.curPage = curPage
 
         this.findAttentionVideo()
 
       }

   },
   created() {


   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.attention{

    ::v-deep.production{

        .card{

            padding: 8px;

        }

    }

}

</style>