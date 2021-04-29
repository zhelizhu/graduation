var express = require('express');

var router = express.Router();

let { deleteVideo,addVideo,uploadVideo,userLike,videoInfo,videoComment,likeVideo } = require('../controller/controller')

// 删除视频
router.post('/deleteVideo', deleteVideo);

// 添加视频
router.post('/addVideo', addVideo)

// 用户喜欢视频
router.get('/userLike', userLike);

// 视频信息
router.get('/videoInfo', videoInfo);

// 视频信息
router.get('/videoComment', videoComment);

// 点赞视频
router.post('/likeVideo', likeVideo);

const formidable = require('express-formidable') // 引入

router.use(formidable()); 
// 上传视频

router.post('/uploadVideo',uploadVideo)


module.exports = router;
