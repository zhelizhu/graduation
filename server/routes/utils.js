// 工具接口

var express = require('express');

var router = express.Router();

let {userToken} = require('../controller/controller')

router.get('/userToken',userToken)

module.exports = router;
