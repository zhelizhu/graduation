let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId,currentUserId,curPage,pageSize } = req.query

  curPage = (curPage-1) * pageSize

  pageSize = parseInt(pageSize)

  let sql = `SELECT * FROM video v

  WHERE v.video_id 
  
  in (SELECT video_id FROM videouser vs
  
  WHERE vs.user_id = :userId)
  
  limit :curPage, :pageSize

  `

  originalQuery(sql,{ userId,curPage,pageSize },'SELECT').then( (result1) => {

    if (currentUserId) {

      let sql = `SELECT * FROM userlike
  
      WHERE user_id = :currentUserId
      
      `
      originalQuery(sql,{ currentUserId,userId },'SELECT').then( (result2) => {

          if (result2.length == 0) {

            for (let i = 0; i < result1.length; i++) {

                result1[i].isLike = 0
            
            }
            
          }

          else{

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

          }

          let sql = `SELECT COUNT(*) total FROM video v

          WHERE v.video_id 
          
          in (SELECT video_id FROM videouser vs
          
          WHERE vs.user_id = :currentUserId)

          `
          originalQuery(sql,{ currentUserId,userId },'SELECT').then( (result3) => {

            res.json({

              status:1000,
        
              msg:'查询成功',
        
              data:result1,
  
              total:result3[0].total
  
            })

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