var express = require('express');

var router = express.Router();

let { 
  deleteVideo,

  addVideo,

  uploadVideo,

  userLike,

  videoInfo,

  videoComment,

  likeVideo,

  sendComment,

  opposeVideo,

  hotList,

  attentionVideo,

  video,

  search
  
} = require('../controller/controller')

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

// 评论视频

router.post('/sendComment',sendComment)

// 不感兴趣视频

router.post('/opposeVideo',opposeVideo)

// 热门列表视频

router.get('/hotList',hotList)

// 用户关注视频

router.get('/attentionVideo',attentionVideo)

// 所有视频

router.get('/video',video)

// 搜索

router.post('/search',search)

const formidable = require('express-formidable') // 引入

router.use(formidable()); 
// 上传视频

router.post('/uploadVideo',uploadVideo)


module.exports = router;
