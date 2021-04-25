
let {User} = require('../../model/model')

module.exports = function(req,res){

    let {userId,fileRaw} = req.body

    let {email,nickName,sex,phone} = req.body.upDataForm

    User.update(
        
        { email,nickName,sex,avatar:fileRaw,phone}, {

        where: {

            userId

        }
        
    }).then(() => {

        res.send({

            status:1000,

            msg:'信息修改成功'

        })

    }).catch((error) => {

        res.send({

            sataus:1001,

            msg:'信息修改失败'+error

        })

    })

}