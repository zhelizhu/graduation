<!-- home -->
<template>

    <div class='home'>

      <el-container>

        <el-aside width="80px">

          <Aside></Aside>
          
        </el-aside>

        <el-container>

            <Banner></Banner>

          <el-main>
            <transition name="el-zoom-in-center">
            <router-view/>
            </transition>
          </el-main>

          <el-footer>

          </el-footer>

        </el-container>

      </el-container>

    </div>

</template>

<script>

import Aside from './aside/Aside'

import Banner from './header/Banner'

export default {

    components: { Aside,Banner},

    data() {

        return {
        
        };

    },

    computed: {},

    watch: {},

    methods: {
    
    },

    created() {
    
    },
    
    mounted() {
    
    }
}
</script>

<style lang='less' scoped>

.home,.el-container{

  height: 100%;

}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>