
let {varifyUserToken} = require('../../utils/utils')

let {User} = require('../../model/model')

module.exports = function(req,res){

    let {userToken} = req.body

    let userId = varifyUserToken(userToken).data

    if(userId){

        User.findOne({

            where:{

                userId

            },

            attributes:['userId','email','nickName','sex','avatar']

        }).then( (result) => {

            res.send({

                status:3000,

                data:result

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