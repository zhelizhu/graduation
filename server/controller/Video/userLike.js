let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId } = req.query

  let sql = `SELECT * from video

  WHERE video_id in (SELECT video_id FROM userlike
  
  WHERE user_id = :userId)`

  originalQuery(sql,{ userId },'SELECT').then( (result) => {

    res.json({

      status:1000,

      msg:'查询成功',

      data:result

    })

  } ).catch((err) => {

    res.json({

      status: 1001,

      msg: '查询失败(服务器错误)',

      data: err

    })

})

}