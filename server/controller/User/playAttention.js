let { originalQuery } = require('../../utils/utils')

let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res){

  let { userToken ,playAttentionId} = req.body

  let userId = varifyUserToken(userToken).data

  let sql = `
  
  SELECT user_id FROM fansup
  
  WHERE user_id = :userId 
  
  AND

  fans_id = :playAttentionId

  `
  originalQuery(sql,{ userId,playAttentionId },'SELECT').then( (result) => {

    let sqli = ''

    if (result.length == 0) {
      
      sqli = `INSERT INTO fansup

      (user_id,fans_id,mutually)
      
      VALUES(:playAttentionId,:userId,0)
      `

    }
    else{

      sqli = `INSERT INTO fansup

      (user_id,fans_id,mutually)
      
      VALUES(:playAttentionId,:userId,1)
      `

    }

    originalQuery(sqli,{ playAttentionId,userId },'INSERT').then( (result) => {
    
      res.json({
  
        status:1000,
  
        msg:'关注成功！',
  
        data:result
  
      })
  
    } )

  } )
  .catch((err) => {

    res.json({

      status: 1001,

      msg: '查询失败(服务器错误)',

      data: err

    })

  })

}