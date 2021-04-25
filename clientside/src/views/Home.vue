<!-- home -->
<template>

    <div class='home'>

      <el-container>

        <el-aside width="80px">

          <Aside></Aside>
          
        </el-aside>

        <el-container>

          <el-main>
            <transition name="el-zoom-in-center">
            <router-view/>
            </transition>
          </el-main>

          <!-- <el-footer>

          </el-footer> -->

        </el-container>

      </el-container>

      <Play v-show="isPlay"></Play>

    </div>

</template>

<script>

import Aside from './aside/Aside'

import Play from '../components/util/Play'

import { mapState } from 'vuex'

export default {

    components: { Aside , Play },

    data() {

        return {
        
        };

    },

    computed: {

      ...mapState(['isPlay'])

    },

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