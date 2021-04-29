let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId,videoId } = req.query

  // 查询用户信息

  let sql = `SELECT u.user_id,email,nick_name,sex,avatar,v.created_at

  FROM user u 
    
  INNER JOIN videouser v
    
  ON u.user_id = v.user_id

  WHERE v.video_id = :videoId

  `
  originalQuery(sql,{ videoId },'SELECT').then( (result1) => {

    let vUserId = result1[0].user_id

    // 查询与用户关系

    let sql = `SELECT DISTINCT mutually from fansup

    WHERE (user_id = :vUserId
    
    AND fans_id = :userId)

    OR (user_id = :userId

    AND fans_id = :vUserId)
    `
    originalQuery(sql,{ vUserId,userId },'SELECT').then( (result2) => {

      if ( userId == vUserId ) {

        result1[0].mutually = -1
        
      }

      else if (result2.length==0) {

        result1[0].mutually = 0
        
      }

      else{

        result1[0].mutually = result2[0].mutually

      }

      // 查询是否点赞

      let sql = `SELECT * FROM userlike 
      
      WHERE user_id = :userId

      AND video_id = :videoId
      
      `
      originalQuery(sql,{ userId,videoId },'SELECT').then( (result3) => {

        if (result3.length!=0) {

          result1[0].isLike = true
          
        }

        else{

          result1[0].isLike = false

        }

        res.json({
  
        status:1000,
  
        msg:'查询视频信息成功',
  
        data:result1[0]
  
        })

      })
  
    } ).catch((err) => {

      console.log(err);
  
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