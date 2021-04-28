
let {varifyUserToken} = require('../../utils/utils')

let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

    let {userToken} = req.query

    let userId = varifyUserToken(userToken).data

    if (userId == undefined) {

      userId = userToken

    }

    let sql = `WITH 
    userInfo AS (SELECT user_id,email,nick_name,sex,avatar
    
        FROM user
    
        WHERE user_id = :userId),
    
    uservideo AS (
        SELECT count(*) uservideo FROM videouser
        
        WHERE user_id = :userId
    ),
    fans AS (
        SELECT count(*) fans FROM fansup
     
        WHERE user_id = :userId
    ),
    attention AS (
        SELECT count(*) attention FROM fansup
     
        WHERE fans_id = :userId
    )
    SELECT user_id,email,nick_name,sex,avatar, uservideo, fans, attention
    FROM userInfo, uservideo, fans, attention`

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