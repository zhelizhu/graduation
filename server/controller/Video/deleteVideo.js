let {
    Video
  } = require('../../model/model')

module.exports = function(req,res) {

    let {

        deleteItem

    } = req.body

    for (let i = 0; i < deleteItem.length; i++) {

        const element = deleteItem[i];

        Video.destroy({

            where: {

              videoId: element

            }

        }).then( () => {

            res.send({

                status:1000,

                msg:'删除视频成功！'

            })

        }).catch( () => {

            res.send({

                status:1001,

                msg:'删除视频失败！'

            })

        })
        
    }

}