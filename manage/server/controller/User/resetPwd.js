
let {varifyUserToken} = require('../../utils/utils')

let {User} = require('../../model/model')

module.exports = function(req,res){

    let {userToken} = req.body

    let userId = varifyUserToken(userToken).data

    if(userId){

        User.update({password:'123456'},{

            where:{

                userId

            },

        }).then( (result) => {

            res.send({

                status:3000,

                msg:'密码重置成功'

            })

        })

    }
    else{

        res.send({

            status:3001,

            msg: 'token错误'

        })

    }

}