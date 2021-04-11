<!-- aside -->
<template>

    <div class='aside'>

      <el-image :src="logoUrl" class="logo"/>

      <ul class="menu">

        <li 
        
          v-for="(item,index) in menu" 
          :key="index" 
          @click="navigation(index,item.to)"
          :class="{select:item.isSelect}"
        >

          <i :class="item.icon"></i>

          <span>{{item.title}}</span>

        </li>

      </ul>


    </div>

</template>

<script>


export default {

   components: {},

   data() {
       return {
  
         logoUrl: require('../../assets/logo.png'),

         menu: [{

           icon: 'el-icon-s-home',

           title: '主页',

           isSelect:true,

           to: '/home'

         },{

           icon: 'el-icon-star-on',

           title: '关注',

           isSelect:false,

           to: '/attention'

         },{

           icon: 'el-icon-video-camera',

           title: '短视频',

           isSelect:false,

           to: '/video'

         },{

           icon: 'el-icon-video-camera-solid',

           title: '直播',

           isSelect:false,

           to: '/live'

         },{

           icon: 'el-icon-s-promotion',

           title: '同城',

           isSelect:false,

           to: '/local'

         },{

           icon: 'el-icon-view',

           title: '电影',

           isSelect:false,

           to: '/film'

         },{

           icon: 'el-icon-user',

           title: '我的',

           isSelect:false,

           to: '/my'

         }]

       };
   },

   computed: {},

   methods: {

     navigation(index,to){

      this.menu.forEach( element => {

          element.isSelect = false

      })

      this.menu[index].isSelect = true

      if(this.$route.path === to ){

        return

      }

      this.$router.push(to)

     }

   },
   created() {

   },

   mounted() {

   }
}
</script>

<style lang='less' scoped>

.aside{

  position: relative;

  height: 100%;

  background: #f8f8f8;

  .logo{

      position: absolute;

      left: 50%;

      top: 5px;

      transform: translateX(-50%);

      width: 60px;

      height: 60px;

  }

  .menu{

    padding-top: 65px;

    li{

      height: 100px;

      display: flex;

      flex-direction: column;

      justify-content: center;

      cursor: pointer;

      &.select{

        color: @ThemeColor;

      }

      i{

        font-size: 30px;

        margin-bottom: 10px;

      }

    }

  }


}

</style>