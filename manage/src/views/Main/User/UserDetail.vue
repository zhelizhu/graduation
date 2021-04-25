<!--  -->
<template>
  <div class="user-detail">
    <div class="nk-content">
      <div class="container-fluid">
        <div class="nk-content-inner">
          <div class="nk-content-body">
            <div class="nk-block">
              <div class="card card-bordered">
                <div class="card-aside-wrap">
                  <div class="card-inner card-inner-lg">
                    <div class="nk-block-head nk-block-head-lg">
                      <div class="nk-block-between">
                        <div class="nk-block-head-content">
                          <h3 class="nk-block-title page-title">
                            用户 /
                            <strong class="text-primary small">{{
                              userDetail.nickName
                            }}</strong>
                          </h3>
                          <div class="nk-block-des text-soft">
                            <ul class="list-inline">
                              <li>
                                用户ID:
                                <span class="text-base">{{
                                  this.$route.params.id
                                }}</span>
                              </li>
                              <li>
                                最后登录时间
                                <span class="text-base">{{
                                  userDetail.updatedAt
                                }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                      <!-- back -->

                      <back></back>

                      </div>
                    </div>
                    <!-- .nk-block-head -->
                    <div class="nk-block">
                      <div class="nk-data data-list" @click="showUpdata">
                        <div class="data-head">
                          <h6 class="overline-title">基础信息</h6>
                        </div>
                        <!-- data-item -->
                        <div class="data-item">
                          <div class="data-col">
                            <span class="data-label">头像</span>
                            <span class="data-value"
                              ><img
                                :src="userDetail.avatar"
                                alt=""
                                width="100px"
                                style="border-radius: 50%"
                                ref="avatarImg"
                            /></span>
                          </div>
                          <div class="data-col data-col-end">
                            <span class="data-more"
                              ><em class="icon ni ni-forward-ios"></em
                            ></span>
                          </div>
                        </div>
                        <div
                          class="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div class="data-col">
                            <span class="data-label">昵称</span>
                            <span class="data-value">{{
                              userDetail.nickName
                            }}</span>
                          </div>
                          <div class="data-col data-col-end">
                            <span class="data-more"
                              ><em class="icon ni ni-forward-ios"></em
                            ></span>
                          </div>
                        </div>
                        <!-- data-item -->
                        <div class="data-item">
                          <div class="data-col">
                            <span class="data-label">邮箱</span>
                            <span class="data-value">{{
                              userDetail.email
                            }}</span>
                          </div>
                          <div class="data-col data-col-end">
                            <span class="data-more"
                              ><em class="icon ni ni-forward-ios"></em
                            ></span>
                          </div>
                        </div>
                        <!-- data-item -->
                        <div
                          class="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div class="data-col">
                            <span class="data-label">性别</span>
                            <span
                              class="data-value text-soft"
                              v-if="userDetail.sex == 0"
                              >男</span
                            >
                            <span
                              class="data-value text-soft"
                              v-if="userDetail.sex == 1"
                              >女</span
                            >
                            <span
                              class="data-value text-soft"
                              v-if="userDetail.sex == 2"
                              >未知</span
                            >
                          </div>
                          <div class="data-col data-col-end">
                            <span class="data-more"
                              ><em class="icon ni ni-forward-ios"></em
                            ></span>
                          </div>
                        </div>
                        <!-- data-item -->
                        <div
                          class="data-item"
                          data-toggle="modal"
                          data-target="#profile-edit"
                        >
                          <div class="data-col">
                            <span class="data-label">电话号码</span>
                            <span class="data-value text-soft">{{
                              userDetail.phone
                            }}</span>
                          </div>
                          <div class="data-col data-col-end">
                            <span class="data-more"
                              ><em class="icon ni ni-forward-ios"></em
                            ></span>
                          </div>
                        </div>
                        <!-- data-item -->
                      </div>
                      <!-- data-list -->
                    </div>
                    <!-- .nk-block -->
                  </div>
                </div>

                <div
                  class="modal"
                  tabindex="-1"
                  role="dialog"
                  id="profile-edit"
                  style="
                    display: block !important;
                    background: rgba(0, 0, 0, 0.5);
                  "
                  v-show="isUpdataShow"
                >
                  <div
                    class="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div class="modal-content">
                      <a @click="closeUpdata" class="close" data-dismiss="modal"
                        ><em class="icon ni ni-cross-sm"></em
                      ></a>
                      <div class="modal-body modal-body-lg">
                        <h5 class="title">修改用户信息</h5>
                        <ul class="nk-nav nav nav-tabs">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-toggle="tab"
                              href="#personal"
                              >个人信息</a
                            >
                          </li>
                        </ul>
                        <!-- .nav-tabs -->
                        <div class="tab-content">
                          <div class="tab-pane active" id="personal">
                            <div class="row gy-4">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label" for="full-name"
                                    >头像</label
                                  >
                                  <el-upload
                                    ref="upload"
                                    class="avatar-uploader"
                                    :action="`http://127.0.0.1:3000/users/userAvatar?fileRaw=${fileRaw}&&userToken=${userToken}`"
                                    :show-file-list="false"
                                    :on-change="handleAvatarChange"
                                    :on-success="handleAvatarSuccess"
                                    :auto-upload="false"
                                  >
                                    <img
                                      v-if="imageUrl"
                                      :src="imageUrl"
                                      class="avatar"
                                    />
                                    <i
                                      v-else
                                      class="el-icon-plus avatar-uploader-icon"
                                    ></i>
                                  </el-upload>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label" for="display-name"
                                    >昵称</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="display-name"
                                    v-model="userDetail.nickName"
                                    placeholder="请输入你的昵称"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label" for="phone-no"
                                    >邮箱</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="phone-no"
                                    placeholder="Phone Number"
                                    v-model="userDetail.email"
                                  />
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="form-group">
                                  <label class="form-label" for="phone-no"
                                    >电话号码</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="phone-no"
                                    placeholder="请输入电话号码"
                                    v-model="userDetail.phone"
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="custom-control custom-switch">
                                  <el-radio v-model="userDetail.sex" label="0"
                                    >男</el-radio
                                  >
                                  <el-radio v-model="userDetail.sex" label="1"
                                    >女</el-radio
                                  >
                                  <el-radio v-model="userDetail.sex" label="2"
                                    >未知</el-radio
                                  >
                                </div>
                              </div>
                              <div class="col-12">
                                <ul
                                  class="align-center flex-wrap flex-sm-nowrap gx-4 gy-2"
                                >
                                  <li>
                                    <a
                                      @click="upData"
                                      class="btn btn-lg btn-primary"
                                      >更新</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      @click="closeUpdata"
                                      data-dismiss="modal"
                                      class="link link-light"
                                      >关闭</a
                                    >
                                  </li>
                                </ul>
                              </div>
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
                <!-- .modal -->
              </div>
              <!-- .card -->
            </div>
            <!-- .nk-block -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import
import { ListUserDetail ,userUpdata} from "../../../request/api";

import back from '../../../components/Utils/Back'

export default {
  components: {back},

  //数据
  data() {
    return {
      isUpdataShow: false,

      userDetail: {},

      imageUrl: "",

      userToken:localStorage.getItem('userToken'),

      upDataForm:{

          gender: "1",

          phone:''

      },

      fileRaw:''
    };
  },

  //监听
  computed: {},

  //数据
  watch: {},

  //方法
  methods: {

    getUserListDetail(){

        let params = {
          userId: this.$route.params.id,
        };

        ListUserDetail(params).then((res) => {

          if (res.data.status === 3000) {

            this.userDetail = res.data.data;

          } else {

            this.message.error("服务器错误！");

          }

        });

    },

    showUpdata() {
      this.isUpdataShow = true;
    },
    closeUpdata() {
      this.isUpdataShow = false;
    },
    handleAvatarChange(file) {

      let type = ["png", "gif", "jpg", "jpeg"];

      let imgType = file.name.split(".")[1];

      if (type.indexOf(imgType) === -1) {

        this.$message.error("文件类型不支持！");

        return;
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {

        this.$message.error("上传头像图片大小不能超过 2MB!");

        return;

      }

      this.imageUrl = URL.createObjectURL(file.raw);

      this.userDetail.avatar =  URL.createObjectURL(file.raw);

      this.fileRaw = JSON.stringify(file.raw)

    },

    handleAvatarSuccess(){

      // this.imageUrl = URL.createObjectURL(JSON.parse(res.data.avatar));

      // this.userDetail.avatar =  URL.createObjectURL(file.raw);

      // JSON.parse(res.data.avatar)

      // console.log(JSON.parse(res.data.avatar));

      console.log(this.$refs.avatarImg);

    },
    upData(){

        let params = {

            userId: this.$route.params.id,

            upDataForm: this.userDetail,

            fileRaw: JSON.stringify(this.fileRaw)

        }

        userUpdata(params).then( (res) =>{

            if(res.data.status === 1000) {

                this.$message.success(res.data.msg)

                this.$refs.upload.submit()

            }
            else{

                this.$message.error(res.data.msg)

            }

            this.getUserListDetail()

            this.closeUpdata()

        } )

    }
  },

  //创建完成
  created() {

      this.getUserListDetail()

  },

  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>
.nk-content-inner {
  padding-top: 70px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.custom-control,
.custom-switch {
  padding-left: 0;
}
</style>