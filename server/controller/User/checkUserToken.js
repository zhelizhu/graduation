let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res) {

  let { userToken } = req.query

  let userId = varifyUserToken(userToken).data

  if (!userId) {

    res.send({

      status:110,

      msg:'未登录'
        
    })

  }

}