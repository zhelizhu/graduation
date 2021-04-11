// 白名单

let whiteList = [
    'http://localhost:8080',
]

// 中间件拦截

module.exports = (app) => {

    app.use((req,res,next) => {

        if(whiteList.indexOf(req.headers.origin)>-1){

            next()

        }
        else{

            res.send({msg:'请求域不合法！'})

        }
      
    })

}