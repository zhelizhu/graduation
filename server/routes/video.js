var express = require('express');

const formidable = require('express-formidable') // 引入

var router = express.Router();

let {deleteVideo,addVideo,uploadVideo} = require('../controller/controller')

// 删除视频
router.post('/deleteVideo', deleteVideo);

// 添加视频
router.post('/addVideo', addVideo)

router.use(formidable()); 
// 上传视频

router.post('/uploadVideo',uploadVideo)

module.exports = router;
