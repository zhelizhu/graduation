<!-- video -->
<template>

    <div class='video'>        
        
        <Title :title="'推荐'" />

        <Production :production="video" @reFindUserProduction="reFindUserProduction"/>
        
    </div>

</template>

<script>

import Production from '../../components/main/my/Production'

import Title from '../../components/home/Title'

import { video } from '@/request/api'

export default {

   components: { Production,Title },

   data() {
       return {

           userId:localStorage.getItem('userId'),

           curPage:1,

           pageSize:16,

           video:[]

       };
   },

   computed: {},

   watch: {},


   methods: {

       findVideo(){

           let query = {

               userId:this.userId,

               currentUserId:this.userId,

               curPage:this.curPage,

               pageSize:this.pageSize

           }

           video(query).then( (res) => {

              if (res.data.total == this.video.length) {

                  return

              }

              this.video = this.video.concat(res.data.data)

           }).catch( (err) => {


               console.log(err);

           } )

       },

       reFindUserProduction( curPage ){
 
         this.curPage = curPage
 
         this.findVideo()
 
       }

   },
   created() {

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.video{

    ::v-deep.production{

        .card{

            padding: 8px;

        }

    }

}

</style>