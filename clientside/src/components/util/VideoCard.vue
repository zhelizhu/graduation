<!-- card -->
<template>

     <div class="card">

        <video  class="card-video" :src="video.video_src"></video>

        <span class="font">{{video.video_name|fontFilter(10)}}</span>

        <div class="sub">
          <i class="el-icon-star-on"></i>
          <div class="sub-font">{{video.support_sum}}</div>
          {{'喜欢'}}
        </div>

        <div class="mask">

          <i class="el-icon-reading" @click="playVideo(video)"></i>

          <i v-if="isShowDel == 0" class="el-icon-delete" @click="doUserVideo(video.video_id)"></i>

          <i v-if="isShowDel == 1" :class="isLike" @click="doUserVideo(video.video_id)"></i>

        </div>

     </div>

</template>

<script>

import { fontFilter } from '../../filter/fontFilter'

import { deleteVideo,videoInfo,videoComment,likeVideo } from '@/request/api'

import { mapState,mapMutations} from 'vuex'

export default {

  props:['video','proOrLike','isShowDel'],

  data(){

    return{

      userId:localStorage.getItem('userId'),

      isLike:'el-icon-star-on'

    }

  },

  computed:{

    ...mapState(['videoSrc','videoInfo'])

  },

  methods:{

    ...mapMutations(['setvideoBody','setIsPlay','setCurrentUserId','setVideoInfo','setComment']),

    playVideo(video){

        this.setvideoBody(video)

        this.findVideosInfo(video.video_id)

        this.findVideoComment(video.video_id)

        this.setIsPlay(true)

    },

    doUserVideo(videoId){

        if (this.isLike == 'el-icon-star-off') {

          this.isLike = 'el-icon-star-on'

          let params = {

              userId:this.userId,

              videoId,

          }

          likeVideo(params).then( (res) => {
            
               this.$message.success(res.data.msg);

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

            } )
            .catch((err) => {
            
                console.log(err);

            })

            this.isLike = 'el-icon-star-off'

        }

    },

    findVideosInfo(videoId){

      let query = {

        userId:this.userId,

        videoId

      }

      videoInfo(query).then( (res)=>{

        this.setVideoInfo(res.data.data)

        console.log(this.videoInfo);

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

        this.setComment(res.data.data)

      } )
      .catch( (err)=>{

        console.log(err);

      } ) 

    }

  },

  filters:{

    fontFilter

  }

}
</script>

<style lang='less' scoped>

.card {

    position: relative;

    max-width: 200px;

    cursor: pointer;

    display: flex;

    flex-direction: column;

    padding: 10px;

    transition: all .5s;

    &:hover{

      // transform: scale(1.1);

      .mask{

        opacity: 1;

      }

    }

    .card-video{

      max-width: 260px;

      height: auto;

    }

    .font{

      font-size: 18px;

      font-weight: 700;

      padding: 10px;

    }

    .sub{

      height: 50px;

      display: flex;

      align-items: center;

      font-size: 18px;

      color: #999999;

      .sub-font{

        padding: 0 10px;

      }

      i{

        font-size: 26px;

      }

    }

    .mask{

      position: absolute;

      z-index: 2;

      width: 200px;

      height: 100%;

      background: rgba(0,0,0,.5);

      opacity: 0;

      display: flex;

      justify-content: center;

      align-items: center;

      flex-direction: column;

      i{

        font-size: 40px;

        color: aliceblue;

        margin: 20px;

        &:hover{

          color: #1296da;

        }

      }

      .el-icon-star-on{

        color: #1296da;

      }

    }
    
}

</style>