let {
    Video
  } = require('../../model/model')

let {varifyUserToken} = require('../../utils/utils')

let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res) {

    let {

        userToken,

        videoId

    } = req.body

    let userId = varifyUserToken(userToken).data

    console.log(userId,videoId);
    
    let sql = `DELETE FROM video

    WHERE video_id = :videoId`

    originalQuery(sql,{ videoId },'DELETE').then( (result) => {

        let sql = `
        
        DELETE FROM videouser

        WHERE 
        
        video_id = :videoId AND 
        
        user_id = :userId

        ` 
    
        originalQuery(sql,{ videoId,userId },'DELETE').then( (result) => {
      
          res.json({
      
            status:1000,
      
            msg:'删除成功',
      
            data:result
      
          })
      
        } ).catch((err) => {
      
          res.json({
      
            status: 1001,
      
            msg: '查询失败(服务器错误)',
      
            data: err
      
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