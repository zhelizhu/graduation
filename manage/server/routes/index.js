var express = require('express');
var router = express.Router();

let {sendValidCode,userList,videoList,indexData} = require('../controller/controller')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// 发送验证码
router.post('/sendValidCode', sendValidCode);

// 用户列表

router.get('/userList', userList)

// 视频列表

router.post('/videoList', videoList)


router.get('/indexData',indexData)

module.exports = router;
