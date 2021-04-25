var express = require('express');

var router = express.Router();

let {deleteVideo,addVideo} = require('../controller/controller')

// 删除视频
router.post('/deleteVideo', deleteVideo);

// 添加视频

router.post('/addVideo', addVideo)


module.exports = router;
