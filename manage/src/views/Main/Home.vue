<!-- home -->
<template>

    <div class='home' @click="closePopup">

        <div class="nk-app-root">

            <sidebar :userInfo="userInfo"></sidebar>

            <div class="nk-main ">
        
            <div class="nk-wrap">

            <mainheader :userInfo="userInfo"></mainheader>

            <transition name="el-zoom-in-center">
                <router-view/>
            </transition>

            </div>

            </div>

        </div>
   
    </div>

</template>

<script>

import {mapState,mapMutations} from 'vuex'

import sidebar from '../../components/Home/SideBar'

import mainheader from '../../components/Home/Header'

import {UserDetailAxios} from '../../request/api'

export default {

// eslint-disable-next-line vue/no-unused-components
components: {sidebar,mainheader},

data() {
//数据
    return {

        userInfo:{}

    };
},
//监听
computed: {

    ...mapState(['isShowPopup'])

},

//监控data中的数据变化
watch: {},

//方法集合
methods: {

    ...mapMutations(
        [
            'changeShowPopup',
            'changeShowSide',
            'changeShowHeaderSetting',
            'changeUserTopSetting',
        ]
    ),

    // 关闭弹出层

    closePopup(event){

        let userMore = document.querySelectorAll('.user-more')

        let dropdown = document.querySelector('.show-popup')

        let side = document.querySelector('.nk-sidebar')

        let headerSetting = document.querySelector('.show-header-setting')

        let userTopSetting = document.querySelector('.user-top-setting')

        // 检测当前DOM对象返回的节点中的子节点是否包含指定节点

        for (let i = 0; i < userMore.length; i++) {

          const element = userMore[i];

          element.style.display = "none";

        }

        if (dropdown) {
            
            if(!dropdown.contains(event.target)){

                this.changeShowPopup(false)

            }
         
        }

        if (side) {

            if(!side.contains(event.target)){

                this.changeShowSide(false)

            }
            
        }

        if (headerSetting) {
            
            if (!headerSetting.contains(event.target)) {
            
                this.changeShowHeaderSetting(false)
            
            }

        }

        if (userTopSetting) {

            if (!userTopSetting.contains(event.target)) {
            
                this.changeUserTopSetting(false)
            
            }

        }

    }

},
//创建完成
created() {

    let userToken = localStorage.getItem('userToken')

    if(!userToken) {

        this.$router.push('/login')
        
    }

    let params = {

        userToken

    }

    UserDetailAxios(params).then((res) => {

        if(res.data.status === 3000){

            this.userInfo = res.data.data

        }

    })

},
//挂载完成
mounted() {

}
}
</script>

<style lang='less' scoped>

.home{

    height: 100%;

}

</style>