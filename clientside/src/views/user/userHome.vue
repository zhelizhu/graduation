<!-- user-home -->
<template>

    <div class='user-home'>

      <el-card class="my-card">

            <div class="avatar">
            
                <el-avatar size="large" :src="userDetail.avatar"></el-avatar>

            </div>

            <span class="my-username">{{userDetail.nickName}}</span>

            <span class="my-email">{{userDetail.email}}</span>

            <ul class="user-info">

              <li v-for="( info,index ) in userInfo" :key="index">
              
                  <div class="user-info-num">
                  
                      {{info.num}}

                  </div>

                  <div class="user-info-title">
                  
                      {{info.title}}

                  </div>

              </li>

            </ul>

      </el-card>

      <el-tabs type="border-card" class="my-tabs">

        <el-tab-pane>

          <span slot="label"><i class="el-icon-date"></i> 作品</span>

          <Production :production="production"></Production>
          
        </el-tab-pane>

        <el-tab-pane>
          
          <span slot="label"><i class="el-icon-date"></i> 点赞</span>

          <Production :production="userLike"></Production>

        </el-tab-pane>

      </el-tabs>

    </div>

</template>

<script>

import { userDetail,production,userLike } from "../../request/api";

import Production from '../../components/main/my/Production'

export default {

   components: { Production },

   data() {
       return {

          userDetail:{},

          production:[],

          userLike:[],

          userInfo:[

               {
                   num:0,
                   title:'作品'
               },
               {
                   num:7,
                   title:'粉丝'
               },
               {
                   num:25,
                   title:'关注'
               }

           ],

       };
   },

   computed: {},

   watch: {},

   methods: {

    findUserDetail() {

      let params = {

        userToken:this.$route.params.id
        
      }

      userDetail(params).then((res)=>{

        this.userDetail = res.data.data[0]

        this.userInfo[0].num = this.userDetail.uservideo

        this.userInfo[1].num = this.userDetail.fans

        this.userInfo[2].num = this.userDetail.attention

      })
      .catch((err)=>{

        console.log(err);

      })

    },

    // 用户作品

    findUserProduction() {

      let query = {

          userToken:this.$route.params.id

      }

      production(query).then( (res) => {

          this.production = res.data.data

      } )
      .catch((err) => {

          console.log(err);

      })

    },

    // 用户喜欢

    findUserLike(){

      let query = {

        userToken:this.$route.params.id

      }

      userLike(query).then((res) => {

        this.userLike = res.data.data

      }).catch((err) => {

        console.log(err);

      });

    },

   },
   created() {

     this.findUserDetail(),

     this.findUserProduction(),

     this.findUserLike()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.user-home{

    .my-card{

        position: relative;

        display: flex;

        align-items: center;

        margin-right:10px;

        flex-shrink: 0;

        flex-basis: 300px;

        .login-out{

          position: absolute;

          left: 0;

          top: 0;

          i{

            font-size: 40px;

          }

        }

        .avatar{

          position: relative;

        }

        ::v-deep.avatar-uploader{
          
          position: absolute;

          left: 0;

          top: 0;

          i{

              opacity: 0;

              width: 100px;

              height: 100px;

          }

        }

        ::v-deep.el-card__body{

            width: 100%;

            height: 50%;

            padding: 20px 0;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: space-around;

            .el-avatar--large{

                width: 100px;

                height: 100px;

            }

        }

        .my-username,.my-email{

            font-size: 25px;

        }

        .user-info{

            display: flex;

            .user-info-num,.user-info-title{

                height: 40px;

                line-height: 40px;

                padding: 0 40px;

            }

            .user-info-num{

                font-size: 25px;

                font-weight: 700;

            }

        }

    }

    .my-tabs{

        flex: 1;

        ::v-deep.el-tabs__content{

           padding: 0;

           height: 95%;

           width: 1103px;

           overflow-x: scroll;

           .scrollbar();

           .el-tab-pane{

              height: 100%;

              display: flex;

              align-items: center;

              padding: 10px;

           }

        }

    }

}

</style>