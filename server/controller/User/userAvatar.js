  let fs = require('fs')
  
  let path = require('path')
  
  let {varifyUserToken,originalQuery} = require('../../utils/utils')

  module.exports = function(req,res) {
  
     let { userToken } = req.fields

     let userId = varifyUserToken(userToken).data
  
     let file = req.files.fileRaw;
  
     let avatarImg = hostname+'/img/'+file.name
  
     fs.rename(file.path,path.join(dirname,'/public/img/'+file.name),()=>{
  
        let sql = `UPDATE user SET avatar = :avatarImg

        WHERE user_id = :userId`

        originalQuery(sql,{ avatarImg,userId },'UPDATA').then( (result) => {
      
          res.json({
      
            status:1000,
      
            msg:'更新头像成功',
      
            data:result
      
          })
      
        } )
        .catch((err) => {
      
          res.json({
      
            status: 1001,
      
            msg: '查询失败(服务器错误)',
      
            data: err
      
          })
      
        })
  
     })
  
  }