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

          <i class="el-icon-reading" @click="playVideo(video.video_src)"></i>

          <i class="el-icon-delete" @click="deleteUserVideo(video.video_id)"></i>


        </div>

     </div>

</template>

<script>

import { fontFilter } from '../../filter/fontFilter'

import { deleteVideo } from '../../request/api'

import { mapState,mapMutations} from 'vuex'

export default {

  props:['video'],

  methods:{

    ...mapMutations(['setVideoSrc','setIsPlay']),

    playVideo(vSrc){

      this.setVideoSrc(vSrc)

      this.setIsPlay(true)

    },

    deleteUserVideo(videoId){

        let params = {

           userToken:localStorage.getItem('userToken'),

           videoId

        }

        deleteVideo(params).then( (res) => {

             this.$message.success(res.data.msg);

             this.$emit('reFindUserProduction')

        } )
        .catch((err) => {

            console.log(err);

        })


    }

  },

  computed:{

    ...mapState(['videoSrc'])

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

    }
    
}

</style>