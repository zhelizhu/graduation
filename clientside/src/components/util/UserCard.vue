<!-- user-card -->
<template>

    <div class='user-card' @click="toUserHome(userInfo.user_id)">

      <div class="avatar" @click="closeVideo">

        <el-avatar size="large" :src="userInfo.avatar"></el-avatar>

      </div>

      <div class="info">

        <!-- <span class="info-title">{{userInfo.email}}</span> -->

        <span class="info-content">{{userInfo.nick_name}}</span>

      </div>

      <div class="att-btn">

        <el-button v-if="mutually === 0" type="info" round @click.stop="playAttention(userInfo.user_id)"><i class="el-icon-plus"></i>关注</el-button>

        <el-button v-if="mutually === 1" type="success" round @click.stop="cancelAttention(userInfo.user_id)">已关注</el-button>

        <el-button v-if="mutually === 2" type="primary" round @click.stop="cancelAttention(userInfo.user_id)"><i class="el-icon-plus"></i> 相关注</el-button>

      </div>

    </div>

</template>

<script>

import { callAttention,playAttention } from '../../request/api'

import { mapMutations } from 'vuex'

export default {

   components: {},

   props:['userInfo'],

   data() {

       return {

         mutually:0

       };

   },

   computed: {},

   watch: {

     userInfo(val){

       this.mutually = val.mutually

     }

   },

   methods: {

     ...mapMutations(['setIsPlay']),

     toUserHome(id){

       this.$router.push('/userHome/'+id)

     },

     closeVideo(){

       this.setIsPlay(false)

     },

     playAttention(playAttentionId){

       let params = {

         userId:localStorage.getItem('userId'),

         playAttentionId

       }

       playAttention(params).then( (res)=>{

         this.$message.success(res.data.msg);

         this.$emit('reFindAttention')

       } )

     },

     cancelAttention(cancelUserId){

       let params = {

         userId:localStorage.getItem('userId'),

         cancelUserId

       }

       callAttention(params).then( (res)=>{

         this.$message.success(res.data.msg);

         this.mutually = 0

       } )

     },

   },
   created() {

     this.mutually = this.userInfo.mutually

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.user-card{

  cursor: pointer;

  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  background: #fff;

  padding: 15px;

  margin: 5px;

  height: 45px;

  width: 320px;

  display: flex;

  align-items: center;

  justify-content: space-around;

  .via{

    width: 60px;

    height: 60px;

    max-width: 60px;

    border-radius: 50%;

    margin: 0 8px;

  }

  .info{

    margin: 0 8px;

  }


}

</style>