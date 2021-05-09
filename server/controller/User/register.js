let {
  User,
  ValidCode
} = require('../../model/model')

let {
  enCodeString
} = require('../../utils/utils')

let { originalQuery } = require('../../utils/utils')

module.exports = function (req, res) {

  let {
    userEmail,
    userPwd,
    uservalidCodeId,
    uservalidCode
  } = req.body

  // 用户注册

  let userId = 'u_' + (+new Date)

  let password = enCodeString(userPwd)

  ValidCode.findAll({

    where: {

      validCodeId: uservalidCodeId,

    }

  }).then((result) => {

    let outTime = +new Date(result[0].dataValues.createdAt)

    if ( outTime + (5*60*1000) < + new Date()) {

      res.json({
  
        status: 1003,

        msg: '验证码超时请重新获取！'

      })
      
    }
    else{
 
      if(result[0].dataValues.email === userEmail && result[0].dataValues.validCode === uservalidCode){

        console.log(userEmail);

        let sql = `SELECT user_id FROM user 
        
        WHERE email = :userEmail
        
        `
        originalQuery(sql,{ userEmail },'SELECT').then( (result) => {

            if (result.length === 0) {

                let sql = `INSERT INTO user SET user_id = :userId,
                
                email = :userEmail,

                nick_name = '请输入您的昵称',

                password = :password

                `
                originalQuery(sql,{ userId,userEmail,password },'INSERT').then( (result) => {

                    res.json({
                    
                      status: 1000,
                    
                      msg: '注册成功',
                    
                      data: result
                    
                    })

                })
            } 
            else {
            
                res.json({
                
                  status: 1002,
                
                  msg: '注册失败(邮箱已被注册！)'
                
                })
              
            }
          
        })
  
      }
      else{
  
        res.send({
  
          status:1003,
  
          msg: '邮箱或验证码不正确！'
  
        })
  
      }

    }

  }).catch((err) => {

    console.log('验证码查询失败' + err);

  })

}