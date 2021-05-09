let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId,currentUserId } = req.query

  let sql = `SELECT * from video

  WHERE video_id in (SELECT video_id FROM userlike
  
  WHERE user_id = :userId)`

  originalQuery(sql,{ userId },'SELECT').then( (result1) => {

    if (currentUserId) {

      let sql = `SELECT * FROM userlike
  
      WHERE user_id = :currentUserId
      
      `
      originalQuery(sql,{ currentUserId,userId },'SELECT').then( (result2) => {

        for (let i = 0; i < result1.length; i++) {

          
          for (let j = 0; j < result2.length; j++) {

              if (result1[i].video_id == result2[j].video_id) {

                result1[i].isLike = 1

              }else{

                if (result1[i].isLike == undefined) {

                  result1[i].isLike = 0

                }

              }
            
          }

          
        }

        res.json({

          status:1000,
    
          msg:'查询成功',
    
          data:result1
    
        })

    })

    }
    else{

      res.json({

        status:1000,
  
        msg:'查询成功',
  
        data:result1
  
      })

    }

  } ).catch((err) => {

    res.json({

      status: 1001,

      msg: '查询失败(服务器错误)',

      data: err

    })

})

}