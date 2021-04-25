let {
  Video,VideoUser
} = require('../../model/model')

let fs = require('fs')

let path = require('path')

let {varifyUserToken} = require('../../utils/utils')

module.exports = function(req,res) {

   let videoId = 'v_' + (+new Date)

   let { videoName,videoInfo,videoType,userToken} = req.fields

   let userId = varifyUserToken(userToken).data

   let file = req.files.videoBody;

   let videoSrc = hostname+'/video/'+file.name

   fs.rename(file.path,path.join(dirname,'/public/video/'+file.name),()=>{

        Video.create({
        
            videoId,
        
            videoName,
        
            videoInfo,
        
            videoType,

            videoSrc
        
         }).then((result) => {

            VideoUser.create({

               userId,

               videoId

            }).then(()=>{

              res.json({
                
                status: 1000,
             
                msg: '添加成功',
             
                data: result
             
              })

            })
             
         }).catch((err) => {
        
                 res.json({
                
                   status: 1001,
                
                   msg: '添加失败(服务器错误)',
                
                   data: err
                
                 })
             
         })


   })

}