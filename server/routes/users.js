var express = require('express');

const formidable = require('express-formidable') // 引入

var router = express.Router();

let { 
  registerCon, 

  loginCon, 

  userDetail, 

  addUser, 

  deleteUser, 

  listUserDetail, 

  userUpdata, 

  userAvatar, 

  resetPwd, 

  production, 

  attention,

  callAttention,

  playAttention,

  fans

} = require('../controller/controller')

router.post('/register', registerCon)

router.get('/login', loginCon)

router.get('/userDetail', userDetail)

router.post('/addUser', addUser)

// 批量删除用户

router.post('/deleteUser', deleteUser)

router.post('/listUserDetail', listUserDetail)

router.post('/userUpdata', userUpdata)

router.post('/resetPwd', resetPwd)

// 用户作品

router.get('/production', production)

// 用户关注

router.get('/attention', attention)

// 用户取消关注

router.post('/callAttention', callAttention)

// 用户关注

router.post('/playAttention', playAttention)

// 用户粉丝

router.get('/fans', fans)

router.use(formidable()); 

router.post('/userAvatar', userAvatar)

module.exports = router;
