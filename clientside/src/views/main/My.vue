<!-- my -->
<template>

    <div class='my'>

     <el-card class="my-card">

      <el-avatar size="large" :src="userDetail.avatar"></el-avatar>

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

          <Production></Production>
          
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 关注</span>

          <Attention :attention="attention" :fans="fans"></Attention>

        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 粉丝</span>
          
          <Fans :attention="attention" :fans="fans"></Fans>
            
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 点赞</span>
          点赞
        </el-tab-pane>

        <el-tab-pane>

          <span slot="label"><i class="el-icon-date"></i> 上传</span>

          <UploadVideo></UploadVideo>
          
        </el-tab-pane>

      </el-tabs>

    </div>

</template>

<script>

import { userDetail,attention,fans } from "../../request/api";

import UploadVideo from '../../components/main/UploadVideo'

import Production from '../../components/main/Production'

import Attention from '../../components/main/Attention'

import Fans from '../../components/main/Fans'

export default {

   components: { UploadVideo , Production , Attention , Fans},

   data() {
       return {

           avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

           userDetail:{},

           attention:[],

           fans:[],

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

           userToken:localStorage.getItem('userToken'),

       };
   },

   computed: {},

   methods: {

    findUserDetail() {

      let params = {

        userToken:this.userToken
        
      }

      userDetail(params).then((res)=>{

        this.userDetail = res.data.data

      })
      .catch((err)=>{

        console.log(err);

      })

    },

    findUserAttention(){

       let query = {

         userToken:localStorage.getItem('userToken')

       }

       attention(query).then( (res) => {

            console.log('关注');

            this.attention = res.data.data

            console.log(this.attention);

        } )
        .catch((err) => {

            console.log(err);

        })

    },

    findUserFans(){

        let params = {

           userToken:localStorage.getItem('userToken')

        }

        fans(params).then( (res) => {

              this.fans = res.data.data

              console.log('粉丝');

              console.log(this.fans);

        } )
        .catch((err) => {

            console.log(err);

        })

    },

   },
   created() {

      this.findUserDetail()

      this.findUserAttention()

      this.findUserFans()
        
   }
}
</script>

<style lang='less' scoped>

.my{

    display: flex;

    height: 100%;

    .my-card{

        display: flex;

        align-items: center;

        margin-right:10px;

        flex-shrink: 0;

        flex-basis: 300px;

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