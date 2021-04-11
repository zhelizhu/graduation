import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      // 拖动验证

      dragValidatorStatus: false,

  },
  mutations: {

    changeDragValidatorStatus (state,val){

      state.dragValidatorStatus = val

    }
    
  },
  actions: {
  },
  modules: {
  }
})
