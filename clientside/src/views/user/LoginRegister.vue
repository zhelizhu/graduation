<!-- 注册 -->
<template>

    <div class='login-register' :style="{background:`url(${bgData})`,}">

        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="rgba(0,0,0,0.2)"
            text-color="#fff"
            active-text-color="#4d90fe"
            :default-active="menuActive"
            @select="handleSelect"
        >
                <h1 class="title"><i class="el-icon-user-solid"></i>后台管理系统</h1>
                <el-menu-item index="login">登录</el-menu-item>
                <el-menu-item index="register">注册</el-menu-item>

        </el-menu>

        <el-container>

              <el-aside class="aside">

                    <el-col v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-background="rgba(0, 0, 0, 1)">
                      <el-card :body-style="{ padding: '0px' }">
                        <i :class="weatherIcon" style="color:#66b1ff"></i>{{weatherData.wea}}
                        <div class="win" style="font-size:16px">{{'~'+weatherData.win+'~'+weatherData.win_meter+'~等级'+weatherData.win_speed}}</div>
                        <div>{{weatherData.city}}</div>
                        <div class="air-tips" :title="weatherData.air_tips">{{weatherData.air_tips}}</div>
                      </el-card>
                    </el-col>

              </el-aside>

              <el-main>

                   <transition name="el-zoom-in-center">

                       <router-view><slot></slot></router-view>
                        
                   </transition>
                      
              </el-main>

        </el-container>

    </div>

</template>

<script>

export default {

    components: {},

    data() {

      return {

          weatherData: {},

          bgData: require('../../assets/img/registerBg.gif'),

          weatherIcon: 'el-icon-sunset',

          loading: true,

      };

    },

    computed: {

        menuActive(){

            return this.$route.path.slice(1,this.$route.path.length)

        }

    },

    methods: {

        handleSelect(key) {

          let path = this.$route.path

          if(path === '/'+key){

              return

          }
          else{

              this.$router.push('/'+key)

          }

        }
    },

    created() {

        this.axios({

            method:'GET',

            url:'https://v1.alapi.cn/api/tianqi/now',

            params:''

        }).then((res)=>{

            this.weatherData = res.data.data

            this.loading = false

            if(this.weatherData.wea.indexOf('晴') != -1){

                this.bgData = require('../../assets/img/weatherImg/qing.gif')

                this.weatherIcon = 'el-icon-sunrise'

                return

            }
            if(this.weatherData.wea.indexOf('雨') != -1){

                this.bgData = require('../../assets/img/weatherImg/rain.gif')

                this.weatherIcon = 'el-icon-heavy-rain'

                return

            }    
            if(this.weatherData.wea.indexOf('云') != -1){

                this.bgData = require('../../assets/img/weatherImg/yun.gif')

                this.weatherIcon = 'el-icon-cloudy'

                return

            }

        })

    }
}
</script>

<style lang='less' scoped>

@media screen and (max-width: 992px){

    .aside{

        display: none!important;

    }

    .title{

        display: none!important;

    }
    
    .el-menu-item{

        width: 50%;

        text-align: center;

    }
}

.login-register{

    height: 100vh;

    overflow: hidden;

    background-size: cover !important;

    .el-menu-demo{

        z-index: 2;

        display: flex;

        justify-content: flex-end ;

        border-bottom: 2px solid rgba(255, 255, 255, 0.4);

        .title{

            flex: 1;

            font-size: 25px;

            text-align: left;

            display: flex;

            align-items: center;

            color: #66b1ff;

            padding-left: 25px;

            outline: none;

            cursor: pointer;

        }

    }

    .el-container{

      height: 100%;

      display: flex;

    }
  
    .el-aside,.el-main{

      display: flex;

      justify-content: center;

      align-items: center;

      background-color: rgba(0, 0, 0, 0.8);

      text-align: center;

      height: 100%;

      flex: 0.6;

    }

    .el-aside{

        color: #fff;

        font-size: 55px;

        display: flex;

        justify-content: center;

        align-items: center;

        padding: 25px;

        /deep/ .el-card{

            border: none;

            color: #fff;

            border-radius: 25px;

            background: rgba(0,0,0,0.5);

            span{

                font-size: 25px;

            }

            .el-card__body{

                height: 400px;

                display: flex;

                flex-direction: column;

                justify-content: space-around;

            }

            .air-tips{

                font-size: 16px;

                overflow: hidden;

                text-overflow: ellipsis;

                white-space: nowrap;

                padding: 0 15px;

                color: #409eff;
            }

        }

    }
    
    .el-main {

      background-color: rgba(0, 0, 0, 0.5);

      flex: 1;

    }

}


</style>