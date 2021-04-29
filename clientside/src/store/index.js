import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      // 拖动验证

      dragValidatorStatus: false,

      // 用户token
      userToken:localStorage.getItem('userToken'),

      // 视频地址

      videoBody:'',

      // 视频id

      videoId:'',

      isPlay:false,

      // 当前视频用户id

      currentUserId:'',

      videoInfo:{},

      comment:[]

  },
  mutations: {

    changeDragValidatorStatus (state,val){

      state.dragValidatorStatus = val

    },

    setUserToken( state,val ){

      state.userToken = val

    },

    setvideoBody( state,val ){

      state.videoBody = val

    },

    setIsPlay( state,val ){

      state.isPlay = val

    },

    setCurrentUserId( state,val ){

      state.currentUserId = val

    },

    setVideoId( state,val ){

      state.videoId = val

    },

    setVideoInfo( state,val ){

      state.videoInfo = val

    },

    setComment( state,val ){

      state.comment = val

    }

  },
  actions: {
  },
  modules: {
  }
})
