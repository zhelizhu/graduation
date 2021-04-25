let {
    Video
  } = require('../../model/model')


module.exports = function(req,res) {

    let formInline= req.body

    let videoId = 'v_' + (+new Date)

    Video.create({

       videoId,

       videoSrc:formInline.videoSrc,

       videoBgSrc:formInline.videoBgSrc,

       videoName:formInline.videoName,

       videoInfo:formInline.videoInfo,

       videoUpOfUser:formInline.videoUpOfUser,

       videoType:formInline.videoType,

       videoStatus:parseInt(formInline.videoStatus)

      //  createAt:formInline.createAt

    }).then((result) => {

            res.json({

              status: 1000,

              msg: '添加成功',

              data: result

            })


    }).catch((err) => {

            res.json({

              status: 1001,

              msg: '添加失败(服务器错误)',

              data: err

            })

    })

}