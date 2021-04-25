<!-- app -->
<template>

    <div class='app'>
      <transition name="el-fade-in">
      <router-view />
      </transition>
    </div>

</template>

<script>

import { mapState , mapMutations} from 'vuex'

import { checkUserToken } from './request/api'

export default {

   components: {},

   data() {
       return {

       };
   },

   computed: {

     ...mapState(['userToken'])

   },

   watch: {},


   methods: {

     ...mapMutations(['setUserToken']),

     checkToken(){

       let params = {

         userToken:this.userToken

       }

       checkUserToken(params).then( (res => {

         if (res.data.status===110) {
           this.$router.push('/login')
           this.setUserToken('')
           localStorage.removeItem('userToken')
         }

       }) )

     }

   },
   created() {
    //  判断用户token
    this.checkToken()
   },

   mounted() {

   }
}
</script>

<style lang='less'>

html,body,.app{

  height: 100%;

}

</style>