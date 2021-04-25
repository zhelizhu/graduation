<!-- header -->
<template>
  <div
    class="nk-header nk-header-fixed nk-header-fluid is-light"
    :class="{ darkMode: isDarkActive }"
  >
    <div class="container-fluid" :class="{ darkMode: isDarkActive }">
      <div class="nk-header-wrap">
        <!-- 三条杠 -->

        <div class="nk-menu-trigger d-xl-none ml-n1">
          <span @click.stop="sideShow" class="nk-nav-toggle nk-quick-nav-icon"
            ><em class="icon ni ni-menu"></em
          ></span>
        </div>

        <!-- logo -->
        <div class="nk-header-brand d-xl-none">
          <a href="javascript:;" class="logo-link">
            <img
              class="logo-light logo-img"
              src="../../assets/img/home/logo.png"
              srcset="../../assets/img/home/logo2x.png 2x"
              alt="logo"
            />
            <img
              class="logo-dark logo-img"
              src="../../assets/img/home/logo-dark.png"
              srcset="../../assets/img/home/logo-dark2x.png 2x"
              alt="logo-dark"
            />
          </a>
        </div>

        <!-- 消息 -->
        <div class="nk-header-tools">
          <ul class="nk-quick-nav">
            <!-- header设置 -->

            <li class="dropdown user-dropdown">
              <a
                href="javascript:;"
                class="dropdown-toggle mr-n1"
                @click.stop="headerSettingShow"
              >
                <div class="user-toggle">
                  <div class="user-avatar sm">
                    <img :src="userInfo.avatar" alt="" />
                  </div>
                </div>
              </a>

              <transition name="el-fade-in">
                <div
                  style="display: block !important"
                  v-show="isShowHeaderSetting"
                  class="dropdown-menu dropdown-menu-md dropdown-menu-right show-header-setting"
                >
                  <div class="dropdown-inner user-card-wrap bg-lighter">
                    <div class="user-card">
                      <div class="user-avatar">
                        <img :src="userInfo.avatar" alt="" />
                      </div>
                      <div class="user-info">
                        <span class="lead-text">{{ userInfo.nickName }}</span>
                        <span class="sub-text">{{ userInfo.email }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-inner">
                    <ul class="link-list">
                      <li>
                        <a @click="toUserDetail(userInfo.userId)"
                          ><em class="icon ni ni-user-alt"></em
                          ><span>用户信息</span></a
                        >
                      </li>
                      <li>
                        <a
                          ><em class="icon ni ni-setting-alt"></em
                          ><span>账户设置</span></a
                        >
                      </li>
                      <li @click="DarkMode">
                        <a class="dark-switch" :class="{ active: isDarkActive }"
                          ><em class="icon ni ni-moon"></em
                          ><span>深色模式</span></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown-inner">
                    <ul class="link-list">
                      <li>
                        <a href="javascript:;" @click="outLogin"
                          ><em class="icon ni ni-signout"></em
                          ><span>退出登录</span></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: ["userInfo"],

  components: {},

  data() {
    //数据
    return {};
  },
  //监听
  computed: {
    ...mapState([
      "isShowSide",
      "isShowHeaderSetting",
      "isShowHeaderSetting",
      "isDarkActive",
    ]),
  },

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    ...mapMutations([
      "changeShowSide",
      "changeShowHeaderSetting",
      "changeShowHeaderSetting",
      "changeDarkActive",
      "closeOtherPopup",
    ]),

    sideShow() {
      this.closeOtherPopup({
        currentClick: "isShowSide",
      });

      this.changeShowSide(true);
    },

    headerSettingShow() {
      this.closeOtherPopup({
        currentClick: "isShowHeaderSetting",
      });

      this.changeShowHeaderSetting(!this.isShowHeaderSetting);
    },

    DarkMode() {
      let body = document.querySelector("body");

      body.classList.toggle("darkMode");

      this.changeDarkActive(!this.isDarkActive);
    },
    toUserDetail(id) {
      this.$router.push("/userDetail/" + id);

      this.changeShowHeaderSetting(false);
    },
    outLogin() {
      localStorage.clear();

      this.$router.push("/login");
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