<!-- side-bar -->
<template>

  <div class="side-bar">

    <div class="nk-sidebar" :class="{nksidebaractive:isShowSide}">

      <div class="nk-sidebar-bar">

        <div class="nk-apps-brand">
          <a href="javascript:;" class="logo-link">
            <img
              class="logo-light logo-img"
              src="../../assets/img/home/logo-small.png"
              srcset="../../assets/img/home/logo-small2x.png 2x"
              alt="logo"
            />
            <img
              class="logo-dark logo-img"
              src="../../assets/img/home/logo-dark-small.png"
              srcset="../../assets/img/home/logo-dark-small2x.png 2x"
              alt="logo-dark"
            />
          </a>
        </div>

        <div class="nk-sidebar-element">

          <div class="nk-sidebar-body">

            <div class="nk-sidebar-content" data-simplebar>
              <div class="nk-sidebar-menu">
                <!-- Menu -->
                <ul class="nk-menu apps-menu">

                  <li class="nk-menu-item" 
                  
                    :class="{active:item.isActive}" 
                    
                    v-for="(item,index) in menuTitle" 
                    
                    :key="index" @click="sideHandle(item.id)"
                  >

                    <a href="javascript:;" class="nk-menu-link nk-menu-switch">

                      <span class="nk-menu-icon"><em :class="item.icon"></em></span>

                    </a>

                  </li>

                  <li class="nk-menu-hr"></li>

                  <li class="nk-menu-item">
                    <a
                      href="javascript:;"
                      class="nk-menu-link nk-menu-switch"
                      data-target="navComponents"
                    >
                      <span class="nk-menu-icon"
                        ><em class="icon ni ni-layers"></em
                      ></span>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            <div class="nk-sidebar-profile nk-sidebar-profile-fixed dropdown">

            <!-- 侧边栏头像 -->

                <a href="javascript:;" @click.stop="showSetting">
                <div class="user-avatar">
                  <img :src="userInfo.avatar" alt="">
                </div>
                </a>

            <!-- 设置 -->
            <transition name="el-fade-in">
              <div style="display: block!important;" class="dropdown-menu dropdown-menu-md ml-4 show-popup" v-show="isShowPopup">
                <div class="dropdown-inner user-card-wrap d-none d-md-block">
                  <div class="user-card">
                    <div class="user-avatar">
                      <img :src="userInfo.avatar" alt="">
                    </div>
                    <div class="user-info">
                      <span class="lead-text">{{userInfo.nickName}}</span>
                      <span class="sub-text text-soft">{{userInfo.email}}</span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-inner">
                  <ul class="link-list">
                    <li>
                      <a href="javascript:;"
                        @click="toUserDetail(userInfo.userId)"
                        ><em class="icon ni ni-user-alt"></em
                        ><span>用户信息</span></a
                      >
                    </li>
                    <li>
                      <a href="javascript:;"
                        ><em class="icon ni ni-setting-alt"></em
                        ><span>账户设置</span></a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown-inner">
                  <ul class="link-list">
                    <li>
                      <a href="javascript:;"
                        @click="outLogin"
                        ><em class="icon ni ni-signout"></em
                        ><span>退出登录</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </transition>

            </div>

          </div>
        </div>

      </div>
      
       <sidebaritem :sideBarList="sideBarList"></sidebaritem>

    </div>

  </div>

</template>

<script>

import sidebaritem from './SideBarItem'

import {mapState,mapMutations} from 'vuex'

export default {

  props:['userInfo'],

  components: {sidebaritem},

  data() {
    //数据
    return {

        menuTitle: [

            {
                id: 0,
                title:'首页',
                icon:'icon ni ni-dashboard',
                isActive:true,
                item:[
                    {
                        title: '汇总数据',
                        to:'/homeIndex'
                    },{
                        title: '播放统计'
                    },{
                        title: '播放排行'
                    }
                ]
            },{
                id: 1,
                title:'视频',
                icon:'icon ni ni-menu-circled',
                isActive:false,
                item:[
                    {
                        title: '视频管理',
                        to:'/videoManage'
                    },{
                        title: '创建视频'
                    }
                ]
            },{
                id: 2,
                title:'用户',
                icon:'icon ni ni-files',
                isActive:false,
                item:[
                  {
                    title:'用户信息',
                    to:'/userManage'
                  },
                  {
                    title:'管理员信息',
                  }
                ]
            },{
                id: 3,
                title:'其他',
                icon:'icon ni ni-server',
                isActive:false
            }
        ],

        sideBarList:[]
    };
  },
  //监听
  computed: {

    ...mapState(['isShowPopup','isShowSide','isDarkActive'])

  },

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {

      ...mapMutations(['changeShowPopup','closeOtherPopup']),

      sideHandle(id){

          this.sideBarList = this.menuTitle[id]

          this.menuTitle.forEach( element => {

              element.isActive = false

          })

          this.menuTitle[id].isActive = true

      },
      showSetting(){

          this.closeOtherPopup({

              currentClick:'isShowPopup'

          })

          this.changeShowPopup(!this.isShowPopup)

      },
      
      toUserDetail(id) {

        this.$router.push('/userDetail/'+id)

        this.changeShowPopup(false)

      },
      
      outLogin(){

        localStorage.clear()

        this.$router.push('/login')

      }

  },
  //创建完成
  created() {

      this.sideHandle(0)

  },
  //挂载完成
  mounted() {},
};
</script>

<style lang='less' scoped>

.dropdown-menu{
    
    position: absolute; 
    transform: translate3d(60px, -205px, 0px); 
    top: 0px; 
    left: 0px; 
    will-change: transform;

}

</style>