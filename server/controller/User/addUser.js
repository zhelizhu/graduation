let {
    User
  } = require('../../model/model')

let {
  enCodeString
} = require('../../utils/utils')

const { Op } = require("sequelize");

module.exports = function(req,res) {

    let {
        userEmail,
        userNickName,
        userPhone,
        userPwd
    } = req.body

    let userId = 'u_' + (+new Date)

    User.findAll({
  
        where: {

          [Op.or]: [
            { nickName: userNickName },
            { email: userEmail }
          ]

        },

      })

    .then((result) => {

      if (result.length === 0) {

          User.create({

            userId,

            email: userEmail,

            nickName: userNickName,

            phone: userPhone,

            password: enCodeString(userPwd)

          }).then((result) => {

            res.json({

              status: 1000,

              msg: '添加成功',

              data: result

            })

          }).catch((err) => {

            res.json({

              status: 1001,

              msg: '添加失败(服务器错误)',

              data: err

            })

          })

      } 
      else {

          res.json({

            status: 1002,

            msg: '添加失败(邮箱或用户名已被注册！)'

          })

      }

    })

}