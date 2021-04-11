let {sendValidCode} = require('../../utils/utils')

let {ValidCode} = require('../../model/model')

module.exports = function (req,res) {

    let getValidCode = ''

    for (let i = 0; i < 6; i++) {

        getValidCode += Math.floor(Math.random()*10)
            
    } 

    // send mail with defined transport object
    let info = {

      from: '1798012151@qq.com', // sender address

      to: req.body.email, // list of receivers

      subject: "后台管理系统", // Subject line

      text: '您的验证码为:'+getValidCode+'~5分钟内有效', // plain text body

    }

    let validCodeId = 'v_' + (+new Date)

    ValidCode.create({
    
        validCodeId,

        email: req.body.email,

        validCode: getValidCode

    }).then((result) => {

        console.log('邮箱存储成功' + result);

        sendValidCode(info).then(() => {

            res.send({
    
                status: 1000,
    
                msg: '验证码发送成功！',
    
                data: result.validCodeId
                    
            })
    
        }).catch((err) => {
    
            res.send({
    
                status: 1001,
    
                msg: '验证码发送失败',
    
                data: err
                    
            })
    
        })

    }).catch((err) => {

        console.log('邮箱存储失败' + err);

    })

}