import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // 拖动验证

    dragValidatorStatus: false,

    // 侧边栏设置弹出层

    isShowPopup: false,

    // 侧边栏

    isShowSide: false,

    // header的设置

    isShowHeaderSetting: false,

    // 深色模式

    isDarkActive: false,

    // 用户管理头部设置

    isUserTopSetting: false

  },
  mutations: {

    changeDragValidatorStatus (state,val){

      state.dragValidatorStatus = val

    },

    changeShowPopup (state,val){

      state.isShowPopup = val

    },

    changeShowSide (state,val){

      state.isShowSide = val

    },

    changeShowHeaderSetting(state,val){

      state.isShowHeaderSetting = val

    },

    changeDarkActive(state,val){

      state.isDarkActive = val

    },

    changeUserTopSetting(state,val){

      state.isUserTopSetting = val

    },

    closeOtherPopup(state,val){

      for (const key in state) {

          if (key === 'isDarkActive') {

            continue

          }

          if(key === val['currentClick']) {

            continue

          }

          state[key] = false
          
      }

    }

  },
  actions: {
  },
  modules: {
  }
})
