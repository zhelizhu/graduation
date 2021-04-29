<!-- my -->
<template>

    <div class='my'>

      <UserDetail></UserDetail>

      <el-tabs type="border-card" class="my-tabs">

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 作品</span>

          <Production :production="production" @reFindUserProduction="reFindUserProduction" :proOrLike="0" :isShowDel="0"></Production>
          
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 关注</span>

          <Attention :attention="attention" @reFindAttention="reFindAttention"></Attention>

        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 粉丝</span>
          
          <Attention :attention="fans" @reFindAttention="reFindAttention"></Attention>
            
        </el-tab-pane>

        <el-tab-pane>
          
          <span slot="label"><i class="el-icon-date"></i> 点赞</span>

           <Production :production="userLike" @reFindUserProduction="reFindUserProduction" :proOrLike="1" :isShowDel="1"></Production>

        </el-tab-pane>

        <el-tab-pane>

          <span slot="label"><i class="el-icon-date"></i> 上传</span>

          <UploadVideo></UploadVideo>
          
        </el-tab-pane>

      </el-tabs>

    </div>

</template>

<script>

import { production,attention,fans,userLike } from "@/request/api";

import UserDetail from '../../components/main/my/userDetail'

import Production from '../../components/main/my/Production'

import Attention from '../../components/main/my/Attention'

import UploadVideo from '../../components/main/my/UploadVideo'

export default {

   components: { UserDetail,Production,Attention,UploadVideo},

   data() {
       return {

         userId:localStorage.getItem('userId'),

         production:[],

         attention:[],

         fans:[],

         userLike:[]

       };
   },

   computed: {},

   methods: {

      // 用户作品

      findUserProduction() {

          let query = {

              userId:this.userId

          }

          production(query).then( (res) => {

              console.log(res);

              this.production = res.data.data

          } )
          .catch((err) => {

              console.log(err);

          })

      },

      // 用户关注

      findUserAttention(){

       let query = {

         userId:this.userId

       }

       attention(query).then( (res) => {

            this.attention = res.data.data

        } )
        .catch((err) => {

            console.log(err);

        })

      },

      // 用户粉丝

      findUserFans(){

        let params = {

           userId:this.userId

        }

        fans(params).then( (res) => {

              this.fans = res.data.data

        } )
        .catch((err) => {

            console.log(err);

        })

      },
      
      // 刷新用户关注\粉丝

      reFindAttention(){

        this.findUserAttention()

        this.findUserFans()

      },

      // 用户喜欢

      findUserLike(){

        let query = {

          userId: this.userId

        }

        userLike(query).then((res) => {

          this.userLike = res.data.data

        }).catch((err) => {

          console.log(err);

        });

      },

      // 刷新用户喜欢

      reFindUserProduction(){

        this.findUserProduction()

        this.findUserLike()

      }

   },
   created() {

      this.findUserProduction()

      this.findUserAttention()

      this.findUserFans(),

      this.findUserLike()
    
   }
}
</script>

<style lang='less' scoped>

.my{

    display: flex;

    height: 100%;

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