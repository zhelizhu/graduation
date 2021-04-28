let { originalQuery } = require('../../utils/utils')

let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res){

  let { userToken } = req.query

  let userId = varifyUserToken(userToken).data

  let sql = `SELECT

  u.user_id,email,nick_name,avatar,mutually
  
  FROM  user as u
  
  INNER JOIN fansup as f
  
  ON u.user_id = f.user_id
  
  WHERE f.fans_id = :userId
  
  `
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