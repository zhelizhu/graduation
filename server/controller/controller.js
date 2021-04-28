// 控制器集合

let registerCon = require('./User/register')

let sendValidCode = require('./User/sendValidCode')

let loginCon = require('./User/login')

let userList = require('./User/userList')

let userDetail = require('./User/userDetail')

let addUser = require('./User/addUser')

let deleteUser = require('./User/deleteUser')

let listUserDetail = require('./User/listUserDetail')

let userUpdata = require('./User/userUpdata')

let userAvatar = require('./User/userAvatar')

let resetPwd = require('./User/resetPwd')

let videoList = require('./Video/videoList')

let deleteVideo = require('./Video/deleteVideo')

let addVideo = require('./Video/addVideo')

let indexData = require('./Index/indexData')

// 验证用户token

let userToken = require('./User/checkUserToken')

let uploadVideo = require('./Video/uploadVideo')

let production = require('./User/production')

let attention = require('./User/attention')

let callAttention = require('./User/callAttention')

let playAttention = require('./User/playAttention')

let fans = require('./User/fans')

let userLike = require('./Video/userLike')

module.exports = {
    
    registerCon,

    sendValidCode,

    loginCon,

    userList,

    userDetail,

    addUser,

    deleteUser,

    listUserDetail,

    userUpdata,

    userAvatar,

    resetPwd,

    videoList,

    deleteVideo,

    addVideo,

    indexData,

    userToken,

    uploadVideo,

    production,

    attention,

    callAttention,

    playAttention,

    fans,

    userLike

}