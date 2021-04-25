
let {varifyUserToken} = require('../../utils/utils')

let {User} = require('../../model/model')

module.exports = function(req,res){

    let {userToken,fileRaw} = req.query

    let userId = varifyUserToken(userToken).data

     User.update({avatar:fileRaw},{

            where:{

                userId

            }

     }).then( () => {

         User.findOne({

             where:{

                 userId

             },

             attributes:['avatar']

         }).then( (result)=>{

             res.send({

                 status:1000,

                 data:result

             })

         } )

     })


}