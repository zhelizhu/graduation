<!-- play -->
<template>

    <div class='play'>

      <div class="in">

        <div class="video-body">

          <video class="video" controls  :src="videoBody.video_src"></video>

        </div>

        <div class="video-info">

          <UserCard :userInfo="videoInfo" @reFindAttention="reFindAttention"></UserCard>

          <div class="video-info-main">

            <div class="video-name">{{videoBody.video_name}}</div>

            <div class="video-msg">{{videoBody.video_info}}</div>

            <div class="video-time">{{videoBody.created_at}}</div>

          </div>

          <div class="video-do">

            <div class="video-like">

              <i class="el-icon-star-on"></i>

              <span>{{videoBody.support_sum}}</span>

            </div>

            <div class="video-nolike">

              <i class="el-icon-warning"></i>

              <span>{{videoBody.oppose_sum}}</span>

            </div>

          </div>

          <div class="video-comment">
          
          
          
          </div>

        </div>

        <div class="close" @click="close">

          <i class="el-icon-close"></i>

        </div>

      </div>

    </div>

</template>

<script>

import { mapState,mapMutations } from 'vuex'

import UserCard from './UserCard'

export default {

   components: { UserCard },

   data() {

       return {

       };

   },

   computed: {

     ...mapState(['videoBody','videoInfo','comment'])

   },

   methods:{

     ...mapMutations(['setvideoBody','setIsPlay']),

     close(){

       this.setvideoBody({})

       this.setIsPlay(false)

     },

     reFindAttention(){
       
     }

   },

   watch: {},

   created(){}

}
</script>

<style lang='less' scoped>

.play{

  position: fixed;

  width: 100%;

  height: 100vh;

  left: 0;

  top: 0;

  z-index: 2;

  background: rgba(0,0,0,.8);

  display: flex;

  justify-content: center;

  .in{

      display: flex;

      align-items: center;

      justify-content: space-between;

      width: 100%;

      .video-body{

        flex: 1;

        display: flex;

        justify-content: center;

        .video{

          height: 100vh;

        }

      }

      .video-info{

        display: flex;

        flex-direction: column;

        width: 500px;

        height: 100%;
  
        color: #fff;

        .user-card{

          height: 60px;

          width: 100%;

        }

        .video-info-main{

          display: flex;

          justify-content: space-around;

        }

        .video-do{

          display: flex;

          font-size: 20px;

          padding: 10px;

          i{

            margin: 0 10px;

          }

          .video-like,.video-nolike{

            margin: 0 10px;

          }

        }

      }

  }

  .close{

    position: absolute;

    left: 50px;

    top: 50px;

    display: flex;

    justify-content: center;

    align-items: center;

    width: 60px;

    height: 60px;

    border-radius: 50%;

    background: rgba(255,255,255,.4);

    color: #fff;

    cursor: pointer;

  }

}


</style>