const crypot = require('crypto')

//引入模块 nodemailer
const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1798012151@qq.com', // generated ethereal user
    pass: 'nvlfssqnhcuqdagd', // generated ethereal password
  },
});

const jwt = require('jsonwebtoken');

let sequelize = require('../db/connect')

const { QueryTypes } = require('sequelize');

module.exports = {

    enCodeString(val){

        let md5 = crypot.createHash('md5')
    
        let enCode = md5.update('_pwd'+val)
    
        return enCode.digest('hex')
    
    },

    sendValidCode(options) {

        return new Promise((res,rej) => {

            transporter.sendMail(options, (err,info) => {

                if(err){

                    rej(err)

                }
                else{

                    res(info)

                }

            })

        })

    },

    getUserToken(val) {

        return jwt.sign({

                   data: val

               }, 

               'secret', 

               { 

                   expiresIn: '1d' 

               });

    },

    varifyUserToken(token){//验证token是否合法的方法

        return jwt.verify(token,'secret',(err,data) => {


            if(err){

                return err

            }

            else{

                return data

            }


        });

    },

    originalQuery(sql,params,dbType){

       return sequelize.query(
            sql,
            {
              replacements: params,
              type: QueryTypes[dbType]
            }
        );

    }

}