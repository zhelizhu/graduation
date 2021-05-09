<!-- card -->
<template>

     <div class="card">

        <video  class="card-video" :src="video.video_src"></video>

        <span class="font">{{video.video_name}}</span>

        <div class="sub">
          <i class="el-icon-star-on"></i>
          <div class="sub-font">{{video.support_sum}}</div>
          {{'喜欢'}}
        </div>

        <div class="mask">

          <i class="el-icon-reading" @click="playVideo(video)"></i>

          <i v-if="isShowDel == 0" class="el-icon-delete" @click="deleteVideo(video.video_id)"></i>

          <i v-if="isShowDel == 1" :class="isLike" @click="doUserVideo(video.video_id)"></i>

        </div>

     </div>

</template>

<script>

import { fontFilter } from '../../filter/fontFilter'

import { deleteVideo,likeVideo } from '@/request/api'

import { mapMutations} from 'vuex'

export default {

  props:['video','proOrLike','isShowDel'],

  data(){

    return{

      userId:localStorage.getItem('userId'),

      isLike:this.video.isLike==0?'el-icon-star-off':'el-icon-star-on'

    }

  },

  computed:{

  },

  methods:{

    ...mapMutations(['setvideoBody','setIsPlay']),

    playVideo(video){

        this.setvideoBody(video)

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

            console.log(params);

            deleteVideo(params).then( (res) => {
            
                 this.$message.success(res.data.msg);

            } )
            .catch((err) => {
            
                console.log(err);

            })

            this.isLike = 'el-icon-star-off'

        }

    },

    deleteVideo(videoId){

        let params = {
          
             userId:this.userId,

             videoId,

             proOrLike:this.proOrLike

          }

          console.log(params);

          deleteVideo(params).then( (res) => {
          
               this.$message.success(res.data.msg);

          } )
          .catch((err) => {
          
              console.log(err);

          })

        this.isLike = 'el-icon-star-off'

    }

  },

  filters:{

    fontFilter

  },

}
</script>

<style lang='less' scoped>

.card {

    position: relative;

    max-width: 165px;

    height: 330px;

    cursor: pointer;

    display: flex;

    flex-direction: column;

    padding: 10px;

    transition: all .5s;

    &:hover{

      .mask{

        max-width: 165px;

        opacity: 1;

      }

    }

    .card-video{

      max-width: 260px;

      height: 290px;

    }

    .font{

      font-size: 10px;

      padding: 10px;

      overflow: hidden;

      white-space: nowrap;

      text-overflow: ellipsis;

    }

    .sub{

      height: 10px;

      display: flex;

      align-items: center;

      font-size: 8px;

      color: #999999;

      .sub-font{

        padding: 0 5px;

        font-size: 8px;

      }

      i{

        font-size:16px;

      }

    }

    .mask{

      position: absolute;

      z-index: 2;

      width: 90%;

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

        margin: 10px;

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