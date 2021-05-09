<!-- play -->
<template>

    <div class='play'>

      <div class="in">

        <div class="video-body">

          <video class="video" controls autoplay loop :src="videoBody.video_src"></video>

        </div>

        <div class="video-info">

          <UserCard :userInfo="videoInfo" @reFindAttention="reFindAttention"></UserCard>

          <div class="video-info-main">

            <div class="video-name">{{videoBody.video_name}}</div>

            <div class="video-msg">{{videoBody.video_info}}</div>

            <div class="video-time">{{videoBody.created_at|recentlyTimeFormat(1)|beautifyTime}}</div>

          </div>

          <div class="video-do">

            <div class="video-like">

              <i :class="isLike == 0?'el-icon-star-off':'el-icon-star-on'" @click="doUserVideo(videoBody.video_id)"></i>

              <span>{{videoBody.support_sum}}</span>

            </div>

            <div class="video-nolike">

              <i class="el-icon-warning" @click="opposeVideo(videoBody.video_id)"></i>

              <span>{{videoBody.oppose_sum}}</span>

            </div>

          </div>

          <div class="video-send-comment">

            <el-avatar :src="this.userDetail.avatar"></el-avatar>

            <el-input
              type="textarea"
              :rows="5"
              placeholder="说点什么..."
              v-model="userComment">
            </el-input>

            <el-button class="btn-clean" type="info" round @click="cleanComment">取消</el-button>

            <el-button class="btn-send" type="success" round @click="UserSendComment">发送</el-button>

          </div>

          <div class="video-comment">
          
            <Comment v-for="(item,index) in comment" :key="index" :comment="item"></Comment>
          
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

import { videoInfo,videoComment,sendComment,deleteVideo,likeVideo,opposeVideo } from '@/request/api'

import { recentlyTimeFormat,beautifyTime } from '@/filter/timeFilter'

import UserCard from './UserCard'

import Comment from './Comment'

export default {

   components: { UserCard,Comment },

   data() {

       return {

         userId:localStorage.getItem('userId'),

         videoInfo:{},

         comment:[],

         userComment:'',

         isLike:0,

         proOrLike:1

       };

   },

   computed: {

     ...mapState(['userDetail','videoBody'])

   },

   methods:{

     ...mapMutations(['setvideoBody','setIsPlay']),

     close(){

       this.setvideoBody({})

       this.setIsPlay(false)

     },

     findVideosInfo(videoId){
     
       let query = {
       
         userId:this.userId,
 
         videoId
 
       }
 
       videoInfo(query).then( (res)=>{
       
         this.videoInfo = res.data.data
 
       } )
       .catch( (err)=>{
       
         console.log(err);
 
       } ) 
 
     },
 
     findVideoComment(videoId){
     
       let query = {
       
         videoId
 
       }
 
       videoComment(query).then( (res)=>{
       
         this.comment = res.data.data

         console.log(this.comment);
 
       } )
       .catch( (err)=>{
       
         console.log(err);
 
       } ) 
 
     },

     UserSendComment(){

       let params = {

         userId:this.userId,

         videoId:this.videoBody.video_id,
         
         comment:this.userComment
       }

       sendComment(params).then((res)=>{

         this.$message.success(res.data.msg);

         this.findVideoComment(this.videoBody.video_id)

         this.userComment = ''

       }).catch( (err)=>{

         console.log(err);

       } )

     },

     cleanComment(){

       this.userComment = ''

     },

     doUserVideo(videoId){

        if (this.isLike == 0) {

          let params = {

              userId:this.userId,

              videoId,

          }

          likeVideo(params).then( (res) => {
            
               this.$message.success(res.data.msg);

               this.isLike = 1

               this.videoBody.support_sum += 1

          } )
          .catch((err) => {
          
              console.log(err);

          })

        }

        else{

            let params = {
            
               userId:this.userId,

               videoId,

               proOrLike:this.proOrLike

            }

            deleteVideo(params).then( (res) => {
            
                 this.$message.success(res.data.msg);

                 this.isLike = 0

                 this.videoBody.support_sum -= 1

            } )
            .catch((err) => {
            
                console.log(err);

            })

        }

     },

     opposeVideo(videoId){

        let params = {

            videoId,

        }

        opposeVideo(params).then( (res) => {
          
             this.$message.success(res.data.msg);

             this.videoBody.oppose_sum += 1

             this.setIsPlay(false)

        } )
        .catch((err) => {
        
            console.log(err);

        })

     },

     reFindAttention(){

       this.findVideosInfo(this.videoBody.video_id)
       
     }

   },

   filters:{

     recentlyTimeFormat,beautifyTime

   },

   watch: {},

   created(){

     this.findVideosInfo(this.videoBody.video_id)

     this.findVideoComment(this.videoBody.video_id)

     this.isLike = this.videoBody.isLike

   }

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

        width: 400px;

        height: 100%;
  
        background: #fff;
        
        color: #333333;

        .user-card{

          height: 60px;

          width: 100%;

        }

        .video-info-main{

          display: flex;

          justify-content: space-around;

          padding: 10px;

        }

        .video-do{

          display: flex;

          font-size: 20px;

          padding: 20px;

          i{

            margin: 0 10px;

            font-size: 30px;

            cursor: pointer;

          }

          .video-like,.video-nolike{

            margin: 0 10px;

          }

        }

        .video-send-comment{

          padding: 0 10px;

          display: flex;

          position: relative;

          .el-avatar{

              width: 50px;

              height: 43px;

              margin:  0 10px;

          }

          ::v-deep.el-textarea__inner{

            resize: none;

          }

          .btn-clean,.btn-send{

            position: absolute;

            right: 20px;

            bottom: 10px;

          }

          .btn-clean{

            right: 100px;

          }

        }

        .video-comment{


        }

      }

      .video-comment{

        height: calc(100vh - 295px);

        overflow-y: auto;

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