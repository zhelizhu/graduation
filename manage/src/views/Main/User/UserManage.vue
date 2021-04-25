<!-- user-manage -->
<template>
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
                          <h3 class="nk-block-title page-title">用户列表</h3>
                          <div class="nk-block-des text-soft">
                            <p>你共有{{ userList.length }}位用户</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-tools mr-n1">
                      <ul class="btn-toolbar gx-1">
                        <!-- li -->
                        <li>
                          <div class="nk-block-head-content">
                            <div class="toggle-wrap nk-block-tools-toggle">
                              <div class="toggle-expand-content">
                                <ul class="nk-block-tools g-3">
                                  <li>
                                    <a
                                      href="javascript:;"
                                      @click.stop="addUser"
                                      class="btn btn-white btn-outline-light"
                                      ><em class="icon ni ni-plus"></em
                                      ><span>添加用户</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!-- .toggle-wrap -->
                          </div>
                        </li>
                      </ul>
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
                          <label class="custom-control-label" for="uid"></label>
                        </div>
                      </div>
                      <div class="nk-tb-col">
                        <span class="sub-text">用户</span>
                      </div>
                      <div class="nk-tb-col tb-col-md">
                        <span class="sub-text">电话</span>
                      </div>
                      <div class="nk-tb-col tb-col-lg">
                        <span class="sub-text">邮箱</span>
                      </div>
                      <div class="nk-tb-col tb-col-lg">
                        <span class="sub-text">性别</span>
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
                      v-for="(item, index) in userList"
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
                                  :src="item.avatar"
                                  alt=""
                                  width="100px"
                                  style="border-radius: 50%"
                                  ref="avatarImg"
                              /></span>
                            </div>
                            <div class="user-info">
                              <span class="tb-lead">{{ item.nickName }} </span>
                              <span>{{ item.email }}</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="nk-tb-col tb-col-md">
                        <span>{{ item.phone }}</span>
                      </div>
                      <div class="nk-tb-col tb-col-lg">
                        <span>{{ item.email }}</span>
                      </div>
                      <div class="nk-tb-col tb-col-lg">
                        <span v-if="item.sex == 0">男</span>
                        <span v-if="item.sex == 1">女</span>
                        <span v-if="item.sex == 2">未知</span>
                      </div>
                      <div class="nk-tb-col nk-tb-col-tools">
                        <ul class="nk-tb-actions gx-1">
                          <li class="nk-tb-action-hidden">
                            <a
                              @click="deleteOneUser(item.userId)"
                              class="btn btn-trigger btn-icon"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="删除用户"
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
                                    <a @click="resetUserPwd(item.userId)"
                                      ><em class="icon ni ni-shield-star"></em
                                      ><span>重置密码</span></a
                                    >
                                  </li>
                                  <li>
                                    <a @click="resetUserPwd(item.userId)"
                                      ><em class="icon ni ni-shield-star"></em
                                      ><span>状态选择</span></a
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
                  </div>
                  <!-- .nk-tb-list -->
                </div>
                <!-- .card-inner -->
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
              </div>
            </div>
          </div>
          <!-- .modal -->
          <transition name="el-fade-in">
            <div
              class="modal fade show"
              tabindex="-1"
              role="dialog"
              id="compose-mail"
              style="display: block !important; background: rgba(0, 0, 0, 0.5)"
              v-show="isAddUserShow"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header" style="margin-bottom: 50px">
                    <h6 class="modal-title"><img
              class="logo-light logo-img"
              src="../../../assets/img/home/logo-small.png"
              alt="logo"
            />添加用户</h6>
                    <a class="close" data-dismiss="modal"
                      ><em
                        @click="closeAdduser"
                        class="icon ni ni-cross-sm"
                      ></em
                    ></a>
                  </div>
                  <div class="modal-body p-2">
                    <el-form
                      :model="ruleForm"
                      status-icon
                      :hide-required-asterisk="true"
                      :rules="rules"
                      ref="ruleForm"
                      label-width="45px"
                      class="demo-ruleForm"
                    >
                      <el-form-item
                        prop="email"
                        label="邮箱"
                        :rules="[
                          {
                            required: true,
                            message: '请输入邮箱地址',
                            trigger: 'blur',
                          },
                          {
                            type: 'email',
                            message: '请输入正确的邮箱地址',
                            trigger: ['blur'],
                          },
                        ]"
                      >
                        <el-input
                          ref="email"
                          v-model="ruleForm.email"
                        ></el-input>
                      </el-form-item>

                      <!-- prop关联ruler -->
                      <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="ruleForm.nickName"></el-input>
                      </el-form-item>

                      <el-form-item label="电话" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                      </el-form-item>

                      <el-form-item label="密码" prop="pass">
                        <el-input
                          ref="pass"
                          type="password"
                          v-model="ruleForm.pass"
                          autocomplete="off"
                        ></el-input>
                      </el-form-item>

                      <el-form-item class="form-btn">
                        <el-button
                          style="width: 50%"
                          type="primary"
                          @click="submitForm('ruleForm')"
                          >添加</el-button
                        >
                        <el-button
                          style="width: 45%"
                          @click="resetForm('ruleForm')"
                          >重置</el-button
                        >
                      </el-form-item>
                    </el-form>
                  </div>
                  <!-- .modal-body -->
                </div>
                <!-- .modal-content -->
              </div>
              <!-- .modla-dialog -->
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import {
  UserListAxios,
  AddUserAxios,
  deleteUserAxios,
  resetPwd,
} from "../../../request/api";

import validator from "../../../assets/js/validator";

export default {
  components: {},

  data() {
    //数据
    return {
      allCheck: false,

      userList: [],

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

    addUser() {
      this.isAddUserShow = true;
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            userEmail: this.ruleForm.email,

            userNickName: this.ruleForm.nickName,

            userPhone: this.ruleForm.phone,

            userPwd: this.ruleForm.pass,
          };

          AddUserAxios(params).then((res) => {
            if (res.data.status === 1000) {
              this.$message.success(res.data.msg);

              this.getUserList();

              this.isAddUserShow = false;
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUserList() {
      let params = {};

      UserListAxios(params).then((res) => {
        if (res.data.status === 3000) {
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].isCheck = false;
          }

          this.userList = res.data.data;
        }
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
    checkUser() {
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].isCheck) {
          this.allCheck = true;
        } else {
          this.allCheck = false;

          return;
        }
      }
    },
    AllcheckUser() {
      this.allCheck = !this.allCheck;

      for (let i = 0; i < this.userList.length; i++) {
        this.userList[i].isCheck = this.allCheck;
      }
    },
    deleteSelect() {
      this.$confirm("确认删除用户?", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning",
      })
        .then(() => {
          let deleteItem = [];

          for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].isCheck) {
              deleteItem.push(this.userList[i].userId);
            }
          }

          let params = {
            deleteItem,
          };

          deleteUserAxios(params).then((res) => {
            if (res.data.status === 1000) {
              this.$message.success(res.data.msg);

              this.getUserList();

              this.changeUserTopSetting(false);
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
    deleteOneUser(id) {
      this.$confirm("确认删除用户?", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning",
      })
        .then(() => {
          let params = {
            deleteItem: [id],
          };

          deleteUserAxios(params).then((res) => {
            if (res.data.status === 1000) {
              this.$message.success(res.data.msg);

              this.getUserList();
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
    toUserDetail(id) {
      this.$router.push("/userDetail/" + id);
    },
    resetUserPwd(id) {
      let params = {
        userId: id,

        userToken: localStorage.getItem("userToken"),
      };

      resetPwd(params).then((res) => {
        if (res.data.status === 3000) {
          this.$message.success(res.data.msg);
        }
      });
    },
  },
  //创建完成
  created() {
    this.getUserList();
  },
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>
.el-radio-button__inner,
.el-radio-group {
  vertical-align: 0%;
}
/deep/ .el-form-item__content {
  margin-left: 35px !important;
  display: flex;
  justify-content: space-between;
}
</style>