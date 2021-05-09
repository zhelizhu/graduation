import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('../views/main/Home.vue')
    }, {
      path: '/attention',
      name: 'Attention',
      component: () => import('../views/main/Attention.vue')
    }, {
      path: '/video',
      name: 'Video',
      component: () => import('../views/main/Video.vue')
    }, {
      path: '/search',
      name: 'Search',
      component: () => import('../views/main/Search.vue')
    },{
      path: '/my',
      name: 'My',
      component: () => import('../views/main/My.vue')
    },{
      path: '/userHome/:id',
      name: 'userHome',
      component:() => import('../components/user/userHome.vue'),
    }]
  },
  {
    path: '/loginregister',
    name: 'LoginRegister',
    component:() => import('../views/user/LoginRegister'),
    children:[
      {
        path: '/register',
        name: 'Register',
        component:() => import('../views/user/Register')
      },{
        path: '/login',
        name: 'Login',
        component:() => import('../views/user/Login')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
