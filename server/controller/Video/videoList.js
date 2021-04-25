let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let params = req.body

  let sql = `select 

  video_id as videoId,
  
  video_bg_src as videoBgSrc,

  video_name as videoName,

  video_info as videoInfo,

  video_up_of_user as videoUpOfUser,

  video_type as videoType,

  play_sum as playSum,

  coment_sum as comentSum,

  collect_sum as collectSum
  
  from video`

  originalQuery(sql,params,'SELECT').then( (result) => {

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