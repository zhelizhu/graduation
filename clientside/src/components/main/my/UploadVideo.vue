<!-- 上传视频 -->
<template>
  <div class="upload-video">

    <el-form class="upload-video-form" :inline="true" :model="form" :rules="rules">

      <el-form-item label="视频名称" prop="videoName">
        <el-input
          v-model="form.videoName"
          placeholder="输入视频名称"
        ></el-input>
      </el-form-item>

      <el-form-item label="视频信息" prop="videoInfo">
        <el-input
          type="textarea"
          v-model="form.videoInfo"
          placeholder="输入视频描述"
        ></el-input>
      </el-form-item>

      <el-form-item label="视频类型">
        <el-select v-model="form.videoType" placeholder="选择视频类型">
          <el-option label="选择类型" value="-1"></el-option>
          <el-option label="娱乐" value="娱乐"></el-option>
          <el-option label="音乐" value="音乐"></el-option>
          <el-option label="舞蹈" value="舞蹈"></el-option>
          <el-option label="美食" value="美食"></el-option>
          <el-option label="运动" value="运动"></el-option>
          <el-option label="科技" value="科技"></el-option>
          <el-option label="时尚" value="时尚"></el-option>
          <el-option label="汽车" value="汽车"></el-option>
          <el-option label="旅行" value="旅行"></el-option>
          <el-option label="影视" value="影视"></el-option>
          <el-option label="动漫" value="动漫"></el-option>
          <el-option label="电影" value="电影"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="视频文件">
        <el-upload
          v-if="!cacheSrc"
          class="upload-demo"
          drag
          action=''
          :on-change="cacheVideo"
          :auto-upload="false"
          :show-file-list="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传视频文件</div>
        </el-upload>

        <div class="cache-video" v-else>

          <!-- <vue-core-video-player :src="cacheSrc" :autoplay="false"></vue-core-video-player> -->

          <video id="upvideo" :src="cacheSrc" :autoplay="false" controls></video>

          <el-link type="primary" @click="back">重新上传</el-link>

        </div>

      </el-form-item>

      <el-form-item class="upload-video-btn">

          <el-button type="primary" @click="addVideo">立即创建</el-button>

      </el-form-item>
    </el-form>

  </div>

</template>

<script>
import { uploadVideo } from "@/request/api";

export default {
  components: {},

  data() {

    return {

      cacheSrc:'',

      form: {

        userId:localStorage.getItem('userId'),

        videoName: "",

        videoInfo: "",

        videoType: "",

        videoBody:''

      },

      rules: {

          videoName:[{

            required:true,

            message:'请输入名称'

          }],

          videoInfo:[{

            required:true,

            message:'请输入信息'

          }],


      }

    };
  },

  computed: {},

  watch: {},

  methods: {

    cacheVideo(file){

        this.form.videoBody = file.raw

        this.cacheSrc = URL.createObjectURL(file.raw);

        this.form.videoName = file.raw.name.split('.')[0]

    },

    cleanForm(){
      
        for (const key in this.form) {

          this.form[key] = "";

        }

    },

    back(){

      this.cacheSrc = ''

      this.cleanForm()

    },

    addVideo() {

        let params = new FormData()

        for (const key in this.form) {

            params.append(key, this.form[key]);

        }

        uploadVideo(params).then((res) => {

            if (res.data.status === 1000) {

              this.$message.success(res.data.msg);

              this.cleanForm()

            }else{

              this.$message.error(res.data.msg);

            }

        }).catch(() => {

            this.$message.success("请求错误");

        })
    },

    // 截图

    findvideocover() {

        let video = document.getElementById("upvideo");
        
        let source = document.createElement("source");

        source.src = this.cacheSrc;

        source.type = "video/mp4";

        video.appendChild(source);

          var canvas = document.createElement("canvas");

          canvas.width = "260";
          canvas.height = "465";

          canvas
            .getContext("2d")
            .drawImage(video, 0, 0, canvas.width, canvas.width);

          let imgsrc = canvas.toDataURL("image/png");

          this.form.videoBgSrc = imgsrc
         
    }

  },

  created() {


  },

  mounted() {},
};
</script>

<style lang='less' scoped>

.upload-video{

    padding-top:50px;

    display: flex;

    width: 100%;

    height: 100%;

    .upload-video-form{
      
      width: 100%;

      height: 100%;

      display: flex;

      flex-direction: column;

      justify-content: center;

      ::v-deep.el-form-item{

          width: 100%;

          display: flex;

          margin: 0 0 35px 0;

          .el-form-item__label{

            width: 100px;

          }

          .el-form-item__content{

            flex: 1;

          }

          .el-upload,.el-upload-dragger,.el-select{

            width: 100%;

          }

      }

      .cache-video{

         display: flex;

         justify-content: center;

          video{

            height: 285px;

          }

      }
      
      ::v-deep.el-upload-dragger{

          display: flex;

          height: 230px;

          flex-direction: column;

          justify-content: center;

      }

      ::v-deep.upload-video-btn{

          .el-form-item__content{

              display: flex;

              justify-content: space-between;

              padding-left: 100px;

          }

          .el-button{

              width:40%;

          }

      }

    }

}

</style>