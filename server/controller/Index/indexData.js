let {Video} = require('../../model/model')

module.exports = function(req,res){

      Video.findAll({

        attributes:['videoId','videoType','playSum','collectSum']

      })

      .then((result) => {

        res.send({

            status: 3000,

            data:result

        })

      })

}