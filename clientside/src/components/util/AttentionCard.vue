<!-- attention-card -->
<template>

    <div class='attention-card'>

      <img class="via" :src="attention.avatar" alt="">

      <div class="info">

        <span class="info-title">{{attention.email}}</span>

        <span class="info-content">{{attention.nickName}}</span>

      </div>

      <div class="att-btn">

        <el-button v-if="attention.mutually === 1" type="info" round>

            <i class="el-icon-plus"></i> 相互关注</el-button>

        <el-button v-else-if="isAttend" type="success" round @click="cancelAttention(attention.user_id)">已关注</el-button>

        <el-button v-else type="info" round @click="playAttention(attention.user_id)">

            <i class="el-icon-plus"></i> 关注</el-button>

      </div>

    </div>

</template>

<script>

import { callAttention,playAttention } from '../../request/api'

export default {

   components: {},

   props:['attention'],

   data() {

       return {

         isAttend:true

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

.attention-card{

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