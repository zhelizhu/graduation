<!-- fans-card -->
<template>

    <div class='fans-card'>

      <img class="via" :src="fans.avatar" alt="">

      <div class="info">

        <span class="info-title">{{fans.email}}</span>

        <span class="info-content">{{fans.nickName}}</span>

      </div>

      <div class="att-btn">

        <el-button v-if="fans.mutually === 1" type="info" round>

            <i class="el-icon-plus"></i> 相互关注</el-button>

        <el-button v-else-if="isAttend" type="success" round @click="cancelAttention(fans.user_id)">已关注</el-button>

        <el-button v-else type="info" round @click="playAttention(fans.user_id)">

            <i class="el-icon-plus"></i> 关注</el-button>

      </div>

    </div>

</template>

<script>

import { callAttention,playAttention } from '../../request/api'

export default {

   components: {},

   props:['fans'],

   data() {

       return {

         isAttend:false

       };

   },

   computed: {},

   watch: {},


   methods: {
    

     playAttention(playAttentionId){

       let params = {

         userToken:localStorage.getItem('userToken'),

         playAttentionId

       }

       playAttention(params).then( (res)=>{

         this.$message.success(res.data.msg);

         this.isAttend = true

       } )


     },

     cancelAttention(cancelUserId){

       let params = {

         userToken:localStorage.getItem('userToken'),

         cancelUserId

       }

       callAttention(params).then( (res)=>{

         this.$message.success(res.data.msg);

         this.isAttend = false

       } )

     }


   },
   created() {

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.fans-card{

  cursor: pointer;

  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  padding: 15px;

  margin: 5px;

  height: 45px;

  width: 320px;

  display: flex;

  align-items: center;

  justify-content: space-around;

  .via{

    max-width: 60px;

    border-radius: 50%;

    margin: 0 8px;

  }

  .info{

    margin: 0 8px;

  }


}

</style>