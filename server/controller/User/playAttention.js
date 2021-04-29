let { originalQuery } = require('../../utils/utils')

module.exports = function(req,res){

  let { userId ,playAttentionId} = req.body

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
      
      VALUES(:playAttentionId,:userId,1)
      `

    }
    else{

      sqli = `INSERT INTO fansup

      (user_id,fans_id,mutually)
      
      VALUES(:playAttentionId,:userId,2)
      
      `

      let sqlu = `
      
      UPDATE fansup SET mutually = 2

      WHERE fans_id = :playAttentionId

      AND user_id = :userId

      `

      originalQuery(sqlu,{ playAttentionId,userId },'UPDATA').then( () => {
    
        // 把原来的变成2
    
      } )

    }

    originalQuery(sqli,{ playAttentionId,userId },'INSERT').then( (resulti) => {
    
      res.json({
  
        status:1000,
  
        msg:'关注成功！',
  
        data:resulti
  
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