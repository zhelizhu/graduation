import Vue from 'vue'
import './request/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer)

import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer)

import './assets/less/style.less'

// resetcss
import 'reset-css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
