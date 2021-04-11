
let {User} = require('../../model/model')

module.exports = function(req,res){

    let {userId} = req.body

    if(userId){

        User.findOne({

            where:{

                userId

            },

            attributes:['email','nickName','sex','avatar','phone','sex','updatedAt']

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