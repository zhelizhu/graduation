<!-- create-video -->
<template>
  <div class="create-video">
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="profile-edit"
      style="display: block !important; background: rgba(0, 0, 0, 0.5)"
      v-show="isUpdataShow"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <a @click="closeUpdata" class="close" data-dismiss="modal"
            ><em class="icon ni ni-cross-sm"></em
          ></a>
          <div class="modal-body modal-body-lg">
            <h5 class="title">添加视频</h5>
            <ul class="nk-nav nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab">视频信息</a>
              </li>
            </ul>
            <!-- .nav-tabs -->
            <div class="tab-content">
              <div class="tab-pane active" id="personal">
                <div class="row gy-4">
                  <el-form
                    :inline="true"
                    :model="formInline"
                    :rules="rules"
                    class="demo-form-inline"
                  >
                    <el-form-item label="视频名称" prop="videoName">
                      <el-input
                        v-model="formInline.videoName"
                        placeholder="输入视频名称"
                      ></el-input>
                    </el-form-item>

                    <el-form-item label="视频信息">
                      <el-input
                        v-model="formInline.videoInfo"
                        placeholder="输入视频描述"
                      ></el-input>
                    </el-form-item>

                    <el-form-item label="视频背景" prop="videoBgSrc">
                      <el-input
                        v-model="formInline.videoBgSrc"
                        placeholder="输入视频背景"
                      ></el-input>
                    </el-form-item>

                    <el-form-item label="视频地址" prop="videoSrc">
                      <el-input
                        v-model="formInline.videoSrc"
                        placeholder="输入视频地址"
                      ></el-input>
                    </el-form-item>

                    <el-form-item label="视频作者">
                      <el-input
                        v-model="formInline.videoUpOfUser"
                        placeholder="输入视频上传者"
                      ></el-input>
                    </el-form-item>

                    <el-form-item label="视频日期">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="formInline.createAt"
                        style="width: 100%"
                      ></el-date-picker>
                    </el-form-item>

                    <el-form-item label="视频状态">
                      <el-select
                        v-model="formInline.videoStatus"
                        placeholder="输入状态"
                      >
                        <el-option label="选择状态" value="-1"></el-option>
                        <el-option label="通过" value="0"></el-option>
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="不通过" value="2"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="视频类型">
                      <el-select
                        v-model="formInline.videoType"
                        placeholder="选择视频类型"
                      >
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

                    <el-form-item>
                      <a
                        @click="addVideo"
                        href="javascript:;"
                        class="btn btn-white btn-outline-light"
                        ><em class="icon ni ni-plus"></em
                        ><span>添加视频</span></a
                      >
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <!-- .tab-pane -->
            </div>
            <!-- .tab-content -->
          </div>
          <!-- .modal-body -->
        </div>
        <!-- .modal-content -->
      </div>
      <!-- .modal-dialog -->
    </div>
  </div>
</template>

<script>
import { addVideoAxios, getVideoList } from "../../../request/api";
export default {
  components: {},

  props: ["isUpdataShow"],

  data() {
    //数据
    return {
      formInline: {
        videoName: "",

        videoInfo: "",

        videoBgSrc: "",

        videoSrc: "",

        videoUpOfUser: "",

        videoStatus: "-1",

        createAt: "",

        videoType: "",
      },
      rules: {
        videoName: [
          { required: true, message: "请输入视频名称", trigger: "blur" },
        ],

        videoBgSrc: [
          { required: true, message: "请输入视频背景", trigger: "blur" },
        ],

        videoSrc: [
          { required: true, message: "请输入视频地址", trigger: "blur" },
        ],
      },
    };
  },
  //监听
  computed: {},

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    closeUpdata() {
      this.$emit("close-updata", false);
    },

    getVideoList() {
      let params = {};

      getVideoList(params).then((res) => {
        if (res.data.status === 3000) {
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].isCheck = false;
          }

          this.videoList = res.data.data;

        }
      });
    },

    addVideo() {

      let params = this.formInline;

      addVideoAxios(params)
        .then((res) => {
          if (res.data.status === 1000) {
            this.$message.success(res.data.msg);

            for (const key in this.formInline) {
              this.formInline[key] = "";
            }

            this.getVideoList();
          }
        })
        .catch(() => {
          this.$message.success("请求错误");
        });
    },
  },
  //创建完成
  created() {},
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>
</style>