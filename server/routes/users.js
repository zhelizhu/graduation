var express = require('express');
var router = express.Router();

let {registerCon,loginCon,userDetail,addUser,deleteUser,listUserDetail,userUpdata,userAvatar,resetPwd} = require('../controller/controller')

router.post('/register',registerCon)

router.post('/login',loginCon)

router.post('/userDetail',userDetail)

router.post('/addUser',addUser)

// 批量删除用户

router.post('/deleteUser',deleteUser)

router.post('/listUserDetail',listUserDetail)

router.post('/userUpdata',userUpdata)

router.post('/userAvatar',userAvatar)

router.post('/resetPwd',resetPwd)

module.exports = router;
