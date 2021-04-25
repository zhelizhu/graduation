let { originalQuery } = require('../../utils/utils')

let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res){

  let { userToken ,cancelUserId} = req.body

  let userId = varifyUserToken(userToken).data

  console.log(userId,cancelUserId);

  let sql = `DELETE FROM fansup 

  WHERE fans_id = :userId AND

  user_id = :cancelUserId
  `
  originalQuery(sql,{ userId,cancelUserId },'DELETE').then( (result) => {

    res.json({

      status:1000,

      msg:'取消关注成功！',

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