<!-- user-detail -->
<template>

    <el-card class='user-detail'>

       <div class="login-out" @click="loginOut">

        <el-tooltip class="item" effect="dark" content="退出登录" placement="top-start">
               <i class="el-icon-s-fold"></i>
        </el-tooltip>

       </div>

      <div class="avatar">

          <el-avatar size="large" :src="cacheSrc"></el-avatar>

          <el-upload
              class="avatar-uploader"
              action=''
              :on-change="cacheAvatar"
              :auto-upload="false"
              :show-file-list="false">
              <i class="el-icon-upload"></i>
          </el-upload>

      </div>
    
      <span v-if="isEdit" @dblclick="Edit" class="my-username">{{userDetail.nick_name}}</span>

      <el-input v-else @blur="Edit" v-model="userDetail.nick_name" ref="myInput" class="my-username"></el-input>

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

</template>

<script>

import { userDetail,userAvatar,editName } from "@/request/api";

import { mapMutations } from 'vuex'

export default {

   components: {},

   data() {
       return {

          userDetail:{},

          cacheSrc:'',

          fileRaw:'',
          
          attention:[],

          fans:[],

          userInfo:[
              {
                  num:0,
                  title:'作品'
              },
              {
                  num:0,
                  title:'粉丝'
              },
              {
                  num:0,
                  title:'关注'
              }
          ],

          userToken:localStorage.getItem('userToken'),

          isEdit: true

       };
   },

   computed: {},

   watch: {},

   methods: {

     ...mapMutations(['setUserDetail']),

     Edit(){

       this.isEdit = !this.isEdit

       this.$nextTick(()=>{

         if (this.$refs.myInput) {

             this.$refs.myInput.focus()

         }
         else{

             let params = {

               userId: localStorage.getItem('userId'),

               nickName: this.userDetail.nick_name

             }

             editName(params).then( (res) => {

               this.$message.success(res.data.msg);

             } ).catch( (err) => {

               console.log(err);

             })

         }

       })

     },

    // 用户详情

    findUserDetail() {

      let params = {

        userId:localStorage.getItem('userId')
        
      }

      userDetail(params).then((res)=>{

        this.userDetail = res.data.data[0]

        this.setUserDetail(this.userDetail)

        this.cacheSrc = this.userDetail.avatar

        this.userInfo[0].num = this.userDetail.uservideo

        this.userInfo[1].num = this.userDetail.fans

        this.userInfo[2].num = this.userDetail.attention

      })
      .catch((err)=>{

        console.log(err);

      })

    },

    // 退出登录

    loginOut() {

      localStorage.removeItem('userToken')

      localStorage.removeItem('userId')

      this.$router.push('/login')

    },

    // 上传头像

    cacheAvatar(file){

        this.fileRaw = file.raw

        this.cacheSrc = URL.createObjectURL(file.raw);

        let params = new FormData()

        params.append('userToken', this.userToken);

        params.append('fileRaw', this.fileRaw);

        userAvatar(params).then((res)=>{

          this.$message.success(res.data.msg);

        })

    }

   },
   created() {

     this.findUserDetail()

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

    .user-detail{

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

            font-size: 20px;

            color: #1296db;

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

            font-size: 16px;

        }

        .user-info{

            display: flex;

            .user-info-num,.user-info-title{

                font-size: 8px;

                height: 40px;

                line-height: 40px;

                padding: 0 20px;

                text-align: center;

            }

            .user-info-num{

                font-weight: 700;

            }

        }

    }

</style>