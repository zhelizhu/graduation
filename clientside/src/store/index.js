import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      // 拖动验证

      dragValidatorStatus: false,

      // 用户token
      userToken:localStorage.getItem('userToken'),

      userDetail:{},

      // 视频地址

      videoBody:'',

      isPlay:false

  },
  mutations: {

    changeDragValidatorStatus (state,val){

      state.dragValidatorStatus = val

    },

    setUserToken( state,val ){

      state.userToken = val

    },

    setUserDetail( state,val ){

      state.userDetail = val

    },

    setvideoBody( state,val ){

      state.videoBody = val

    },

    setIsPlay( state,val ){

      state.isPlay = val

    }

  },
  actions: {
  },
  modules: {
  }
})
