let { originalQuery } = require('../../utils/utils')

let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res){

  let { videoId } = req.query

  let sql = `SELECT u.user_id,email,nick_name,avatar,content,c.created_at

  FROM user u
  
  INNER JOIN comment c
  
  ON u.user_id = c.user_id
  
  WHERE c.video_id = :videoId
  `

  originalQuery(sql,{ videoId },'SELECT').then( (result) => {

    res.json({

      status:1000,

      msg:'查询评论成功',

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