let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId,videoId } = req.body

  let sql = `
  
  INSERT INTO userlike 
  
  SET user_id = :userId,

  video_id = :videoId
  
  `
  originalQuery(sql,{ userId,videoId },'INSERT').then( (result) => {

    let sql = `UPDATE video 
    
    SET support_sum = support_sum+1

    WHERE video_id = :videoId
    
    `

    originalQuery(sql,{ videoId },'UPDATE').then( () => {

      res.json({

        status:1000,
  
        msg:'点赞成功',
  
        data:result
  
      })

    })

  } ).catch((err) => {

    res.json({

      status: 1001,

      msg: '查询失败(服务器错误)',

      data: err

    })

})

}