<!-- video-manage -->
<template>
  <div class="video-manage">
    <div class="nk-content">
      <div class="container-fluid">
        <div class="nk-content-inner">
          <div class="nk-content-body">
            <div class="nk-block">
              <div class="card card-bordered card-stretch">
                <div class="card-inner-group">
                  <div class="card-inner position-relative card-tools-toggle">
                    <div class="card-title-group">
                      <div class="nk-block-head nk-block-head-sm">
                        <div class="nk-block-between">
                          <div class="nk-block-head-content">
                            <h3 class="nk-block-title page-title">视频列表</h3>
                            <div class="nk-block-des text-soft">
                              <p>共有{{ videoList.length }}个视频</p>
                            </div>
                          </div>
                        </div>

                        <videosearchsetting
                          @show-updata="showUpdata"
                          @seachParam="seachParam"
                        ></videosearchsetting>

                      </div>
                    </div>
                  </div>

                  <div class="card-inner p-0">
                    <div class="nk-tb-list nk-tb-ulist">
                      <div class="nk-tb-item nk-tb-head" style="height: 50px">
                        <div class="nk-tb-col">
                          <div
                            class="custom-control custom-control-sm custom-checkbox notext"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              @click="AllcheckUser"
                              v-model="allCheck"
                              id="uid"
                            />
                            <label
                              class="custom-control-label"
                              for="uid"
                            ></label>
                          </div>
                        </div>
                        <div class="nk-tb-col">
                          <span class="sub-text">视频背景</span>
                        </div>
                        <div class="nk-tb-col">
                          <span class="sub-text">视频名称</span>
                        </div>
                        <div class="nk-tb-col tb-col-md tb-col-lg">
                          <span class="sub-text">视频信息</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">上传者</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">视频类型</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">播放数</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">评论数</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">收藏数</span>
                        </div>
                        <div class="nk-tb-col tb-col-lg">
                          <span class="sub-text">状态</span>
                        </div>
                        <div class="nk-tb-col nk-tb-col-tools">
                          <ul class="nk-tb-actions gx-1 my-n1">
                            <li>
                              <div class="drodown">
                                <a
                                  @click.stop="showUserTopSetting"
                                  class="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                  ><em class="icon ni ni-more-h"></em
                                ></a>
                                <div
                                  class="dropdown-menu dropdown-menu-right user-top-setting"
                                  style="display: block !important"
                                  v-show="isUserTopSetting"
                                >
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a @click="deleteSelect"
                                        ><em class="icon ni ni-trash"></em
                                        ><span>删除选择</span></a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- .nk-tb-item -->
                      <div
                        class="nk-tb-item"
                        v-for="(item, index) in videoList"
                        :key="index"
                      >
                        <div class="nk-tb-col nk-tb-col-check">
                          <div class="custom-control custom-control-sm">
                            <div
                              class="custom-control custom-control-sm custom-checkbox notext"
                            >
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                @change="checkUser"
                                v-model="item.isCheck"
                                :id="`uid${index}`"
                              />
                              <label
                                class="custom-control-label"
                                :for="`uid${index}`"
                              ></label>
                            </div>
                          </div>
                        </div>

                        <div class="nk-tb-col">
                          <a>
                            <div class="user-card">
                              <div class="user-avatar bg-primary">
                                <span
                                  ><img
                                    :src="item.videoBgSrc"
                                    alt=""
                                    height="40px"
                                    width="100px"
                                /></span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div class="nk-tb-col" :title="item.videoName">
                          <span>{{ item.videoName|formartP}}</span>
                        </div>

                        <div class="nk-tb-col tb-col-md tb-col-lg">
                          <span>{{ item.videoInfo }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span>{{ item.videoUpOfUser }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span>{{ item.videoType }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span>{{ item.playSum }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span>{{ item.comentSum }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span>{{ item.collectSum }}</span>
                        </div>

                        <div class="nk-tb-col tb-col-lg">
                          <span class="tb-status text-success" v-if="item.videoStatus == 0 ">通过</span>
                          <span class="tb-status text-warning" v-if="item.videoStatus == 1 ">审核</span>
                          <span class="tb-status text-danger" v-if="item.videoStatus ==  2 ">禁止</span>
                        </div>
                        <!-- more -->
                        <div class="nk-tb-col nk-tb-col-tools">
                          <ul class="nk-tb-actions gx-1">
                            <li class="nk-tb-action-hidden">
                              <a
                                @click="deleteOneVideo(item.videoId)"
                                class="btn btn-trigger btn-icon"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="删除视频"
                              >
                                <em class="icon ni ni-user-cross-fill"></em>
                              </a>
                            </li>
                            <li>
                              <div class="drodown">
                                <a
                                  @click.stop="showUserMore(index)"
                                  class="dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                  ><em class="icon ni ni-more-h"></em
                                ></a>
                                <div
                                  class="dropdown-menu dropdown-menu-right user-more"
                                  ref="userMore"
                                >
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a @click="toUserDetail(item.userId)"
                                        ><em class="icon ni ni-eye"></em
                                        ><span>查看详细</span></a
                                      >
                                    </li>

                                    <li class="divider"></li>
                                    <li>
                                      <a
                                        ><em class="icon ni ni-shield-star"></em
                                        ><span>正常</span></a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        ><em class="icon ni ni-shield-star"></em
                                        ><span>冻结</span></a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        ><em class="icon ni ni-shield-star"></em
                                        ><span>加入黑名单</span></a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-inner">
                    <div class="nk-block-between-md g-3">
                      <div class="g">
                        <ul
                          class="pagination justify-content-center justify-content-md-start"
                        >
                          <li class="page-item">
                            <a class="page-link" href="#">上一页</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">1</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">2</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">下一页</a>
                          </li>
                        </ul>
                        <!-- .pagination -->
                      </div>
                    </div>
                  </div>

                  <createvideo @close-updata="closeUpdata" :isUpdataShow="isUpdataShow"></createvideo>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { deleteVideoAxios, getVideoList } from "../../../request/api";

import validator from "../../../assets/js/validator";

import videosearchsetting from "../../../components/Home/Main/VideoSearchSetting";

import createvideo from "./CreateVideo";

export default {
  components: { videosearchsetting, createvideo },

  data() {
    //数据
    return {
      isUpdataShow: false,
      allCheck: false,
      videoList: [],
      isAddUserShow: false,
      ruleForm: {
        email: "",

        nickName: "",

        phone: "",

        pass: "",
      },
      rules: {
        pass: [{ validator: validator.validatePass, trigger: "blur" }],
      },

      seachForm:{}

    };
  },
  //监听
  computed: {
    ...mapState(["isSearchSetting", "isUserTopSetting"]),
  },

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    ...mapMutations(["closeOtherPopup", "changeUserTopSetting"]),

    seachParam(val){

      this.seachForm = val

      this.getVideoList()

    },

    getVideoList() {

      let params = this.seachForm;

      getVideoList(params).then((res) => {


        if (res.data.status === 1000) {

          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].isCheck = false;
          }

          this.videoList = res.data.data;

          console.log(this.videoList);

        }
      });
    },
    addVideo() {
      console.log("addvideo");
    },
    closeAdduser() {
      this.isAddUserShow = false;
    },
    showUserTopSetting() {
      for (let i = 0; i < this.$refs.userMore.length; i++) {
        const element = this.$refs.userMore[i];

        element.style.display = "none";
      }

      this.closeOtherPopup({
        currentClick: "isUserTopSetting",
      });

      this.changeUserTopSetting(!this.isUserTopSetting);
    },
    checkUser() {
      for (let i = 0; i < this.videoList.length; i++) {
        if (this.videoList[i].isCheck) {
          this.allCheck = true;
        } else {
          this.allCheck = false;

          return;
        }
      }
    },
    AllcheckUser() {
      this.allCheck = !this.allCheck;

      for (let i = 0; i < this.videoList.length; i++) {
        this.videoList[i].isCheck = this.allCheck;
      }
    },
    deleteSelect() {
      this.$confirm("确认删除视频?", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning",
      })
        .then(() => {
          let deleteItem = [];

          for (let i = 0; i < this.videoList.length; i++) {
            if (this.videoList[i].isCheck) {
              deleteItem.push(this.videoList[i].videoId);
            }
          }

          let params = {
            deleteItem,
          };

          console.log(deleteItem);

          deleteVideoAxios(params).then((res) => {
            if (res.data.status === 1000) {
              this.$message.success(res.data.msg);

              this.getVideoList();

              this.changeVideoTopSetting(false);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",

            message: "已取消删除",
          });
        });
    },
    deleteOneVideo(id) {
      this.$confirm("确认删除视频?", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning",
      })
        .then(() => {
          let params = {
            deleteItem: [id],
          };

          deleteVideoAxios(params).then((res) => {
            if (res.data.status === 1000) {
              this.$message.success(res.data.msg);

              this.getVideoList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",

            message: "已取消删除",
          });
        });
    },
    showUserMore(index) {
      this.closeOtherPopup({
        currentClick: "isUserTopSetting",
      });

      this.changeUserTopSetting(false);

      if (this.$refs.userMore[index].style.display === "block") {
        this.$refs.userMore[index].style.display = "none";
      } else {
        for (let i = 0; i < this.$refs.userMore.length; i++) {
          const element = this.$refs.userMore[i];

          element.style.display = "none";
        }

        this.$refs.userMore[index].style.display = "block";
      }
    },
    showUpdata(val) {
      this.isUpdataShow = val;
    },
    closeUpdata(val) {

      this.isUpdataShow = val

    } 
  },
  //创建完成
  created() {
    this.getVideoList();
  },
  //挂载完成
  mounted() {},
  filters:{
    formartP(val){

      return val

    }
  }
};
</script>

<style lang='less' scoped>
.video-manage {
  .nk-content {
    padding-top: 80px;
  }
}
</style>