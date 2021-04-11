let {User} = require('../../model/model')

module.exports = function(req,res){

      User.findAll({

        attributes:['userId','email','nickName','phone','sex','avatar']

      })

      .then((result) => {

        res.send({

            status: 3000,

            data:result

        })

      })

}