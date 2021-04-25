import Home from '../views/Main/Home'

let mainRoutes = [
  {
    path: '/homeIndex',
    name: 'HomeIndex',
    component: () => import('../views/Main/HomeIndex.vue')
  },
  {
    path: '/userManage',
    name: 'UserManage',
    component: () => import('../views/Main/User/UserManage.vue')
  },
  {
    path: '/userDetail/:id',
    name: 'UserManage',
    component: () => import('../views/Main/User/UserDetail.vue')
  },
  {
    path: '/videoManage',
    name: 'VideoManage',
    component: () => import('../views/Main/Video/VideoManage.vue')
  }
]

export const routes = [
    {
      path: '/',
      redirect:'/homeIndex'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:mainRoutes
    },{
      path: '/loginregister',
      name: 'LoginRegister',
      component:() => import('../views/User/LoginRegister'),
      children:[
        {
          path: '/register',
          name: 'Register',
          component:() => import('../views/User/Register')
        },{
          path: '/login',
          name: 'Login',
          component:() => import('../views/User/Login')
        }
      ]
    }
]