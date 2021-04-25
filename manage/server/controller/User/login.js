let {User} = require('../../model/model')

let {enCodeString,getUserToken} = require('../../utils/utils')

module.exports = function (req, res){

    let {userEmail,userPwd} = req.body

    User.findAll({

        where: {

            email: userEmail

        },
        attributes:['userId','password']

    }).then((result) => {

        if (result.length === 0) {
            
            res.send({

                status:2002,

                msg:'邮箱未注册,用户不存在！'

            })

        }
        else {

            if (result[0].dataValues.password === enCodeString(userPwd)) {

                let token = getUserToken(result[0].dataValues.userId)

                res.send({

                    status:2000,
    
                    msg:'恭喜你,登录成功！',

                    token
    
                })
                
            }
            else{

                res.send({

                    status:2001,
    
                    msg:'邮箱或者密码不正确！'
    
                })

            }

        }

    })

}