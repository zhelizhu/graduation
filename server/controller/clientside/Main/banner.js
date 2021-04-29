let { originalQuery } = require('../../../utils/utils')

module.exports = function(req,res){

  let params = req.query

  let sql = `SELECT * FROM banner`

  originalQuery(sql,params,'SELECT').then( (result) => {

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